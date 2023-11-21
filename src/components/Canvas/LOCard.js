import { useCallback, useEffect, useState } from 'react';
import { useHover, useFloating, useInteractions, useTransitionStyles } from '@floating-ui/react';
import { Handle, Position, useStore, MarkerType, setEdges, useReactFlow } from 'reactflow';
import IconProvider from '@/helpers/IconProvider';
import moment from 'moment';
import PropList from './ORContent/PropList';
import useInternalStore from '@/store';
import { expansion } from '@/helpers/Enums';


const IconReload = () => {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            height="1em"
            width="1em"
        >
            <path d="M14.66 15.66A8 8 0 1117 10h-2a6 6 0 10-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z" />
        </svg>
    );
}



const getTypeString = (loType) => {
    if (loType && loType.includes('#')) {
        return loType.split("#").at(-1)
    }
    return ''
}

function resolveGraphById(jsonLd, id) {
    if (!jsonLd["@graph"]) {
        return jsonLd;
    }

    // Find the element with the matching @id
    const mainElement = jsonLd["@graph"].find(element => element["@id"] === id);
    if (!mainElement) {
        throw new Error("Element with the provided @id not found");
    }

    // Function to replace links with corresponding nodes
    function replaceLinksWithNodes(obj) {
        for (const key in obj) {
            if (obj[key] && typeof obj[key] === 'object' && obj[key]["@id"]) {
                // Find the linked node
                const linkedNode = jsonLd["@graph"].find(element => element["@id"] === obj[key]["@id"]);
                if (linkedNode) {
                    obj[key] = {...linkedNode};
                }
            }
        }
    }

    // Recursively replace links in the main element
    replaceLinksWithNodes(mainElement);

    return mainElement;
}


const LOCard = ({ id, data, isConnectable }) => {

    const [expansionState, setExpansionState] = useState(expansion.Closed)
    const [cardData, setCardData] = useState(null)
    const [links, setLinks] = useState([])
    const [inEdit, setInEdit] = useState(0)

    const { servers } = useInternalStore()
    const position = useStore(s => s.nodeInternals.get(id)?.position);

    const [color, setColor] = useState("#ffffff")
    const [displayName, setDisplayName] = useState("")
    const [token, setToken] = useState("")
    const [is404, setIs404] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [refetch, setRefetch] = useState(false)
    const [firstOpen, setFirstOpen] = useState(false)
    const [selectedRevision, setselectedRevision] = useState(-1)


    const RFI = useReactFlow();


    useEffect(() => {
        const host = data.uri.split("//").at(-1).split("/logistics-objects").at(0)
        servers.map((server, index) => {
            if (!host.indexOf(server.host)) {
                setColor(server.color)
                setToken(server.token)
                setDisplayName(server.org_name)
            }
        })

        token && getCardData(data.uri, token)
        cardData && console.log("CARD DATA:", cardData)
    }, [token, servers])

    const getCardData = async (url = "", token) => {
        let send_header = {
            "cache-control": "no-cache",
            "Authorization": "Bearer " + token
        }

        let prom = fetch(url,
            {
                cache: "no-store",
                headers: send_header
            }
        )
        prom.catch(() => { setIs404(true) })
        let res = await prom;
        let body = await res.json()
        body = resolveGraphById(body, url)
        let header_obj = {};
        res.headers.forEach((val, key) => { header_obj[key] = val })
        if (!cardData || parseInt(cardData.headers["revision"]) != parseInt(header_obj["revision"])) {
            let data = { headers: header_obj, body: body }
            setCardData(data)
            setselectedRevision(header_obj["revision"])
        }
    }

    useEffect(() => {
        if (refetch || firstOpen) {
            const host = data.uri.split("//").at(-1)
            servers.map((server) => {
                if (!host.indexOf(server.host)) {
                    setColor(server.color)
                    setToken(server.token)
                    setDisplayName(server.org_name)
                }
            })
            getCardData(data.uri, token)
            setRefetch(false)
            setFirstOpen(false)
        }
    }, [refetch, servers, token, setRefetch, firstOpen, token])


    const loadRevData = async () => {
        if (parseInt(cardData.headers['latest-revision']) > parseInt(selectedRevision)) {
            //Get Auditrail
            let send_header = {
                "cache-control": "no-cache",
                "Authorization": "Bearer " + token
            }
            let prom = fetch(data.uri + "/audit-trail",
                {
                    cache: "no-store",
                    headers: send_header
                }
            )
            prom.catch(() => { setIs404(true) })
            let res = await prom;
            let body = await res.json()
            let apiNameSpace = "https://onerecord.iata.org/ns/api";
            let hasChangeRequest = apiNameSpace + "#hasChangeRequest";
            let hasChange = apiNameSpace + "#hasChange";
            let hasRevision = apiNameSpace + "#hasRevision";
            let isRequestedAt = apiNameSpace + "#isRequestedAt";
            let value = "@value"
            let changeRequest;
            if (Array.isArray(body[hasChangeRequest])) {
                changeRequest = body[hasChangeRequest].filter((changeReq) => changeReq[hasChange][hasRevision][value] == selectedRevision)[0]
            } else {
                changeRequest = body[hasChangeRequest]
            }
            let reviewDate = changeRequest[isRequestedAt][value]
            let formattedDate = reviewDate.split('.').shift().replaceAll("-", "").replaceAll(":", "") + "Z"
            getCardData(data.uri + "?at=" + formattedDate, token)
        }

        if (parseInt(cardData.headers['latest-revision']) == parseInt(selectedRevision)) {
            getCardData(data.uri, token)
        }

    }


    const addLinks = () => {
        let old_link = {};
        const offset = (-1 * ((links.length / 2) - 0.5)) * 350
        links.map((link, index) => {
            if (RFI.getNode(link.loLocation) == null) {
                RFI.addNodes({
                    id: link.loLocation,
                    type: 'LO',
                    dragHandle: '#node-header',
                    data: {
                        uri: link.loLocation,
                    },
                    position: { x: position.x + 800, y: (position.y + offset + ((index + 0) * 350)) },
                })
            }
            if (RFI.getEdge(id + "->" + link.loLocation) == null) {
                RFI.addEdges({
                    label: link.loType,
                    id: (id + "->" + link.loLocation),
                    target: link.loLocation,
                    source: id,
                    type: 'floating',
                    markerEnd: {
                        type: MarkerType.Arrow,
                    },
                });
            }
            old_link = link
        })
    }

    const deleteNode = () => {
        RFI.deleteElements({ nodes: [{ id }] });
    }

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
    });


    const hover = useHover(context, {
        delay: {
            // open: 0,
            open: 1000,
            close: 0
        }
    });

    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover,
    ]);

    const revertChanges = () => {
        setInEdit(0)
        setRefetch(true)
    }



    return (
        <div className=" rounded-lg bg-white/[0.9] drop-shadow-lg shadow-neutral-750 nowheel">

            <div id="node-header" className={`flex rounded-t-lg w-[350px] h-[110px] border-b-[1px] border-gray-200  ${is404 ? "bg-red-100" : "bg-slate-50/[0.9]"}  duration-500 rounded-lg ${expansionState > expansion.Closed ? "" : ""}`}>
                <div id="header-left-col" className='block relative w-full'>
                    <div note="colored bar"
                        className={`absolute left-0  w-3 transition-all delay-150 duration-200  h-full rounded-l-lg ${expansionState > expansion.Closed ? "" : ""}`}
                        style={{ background: color }}
                    >
                    </div>
                    <div className="ml-4 mt-2">

                        <div id="header-top-row" className='inline-flex ml-1'>
                            <div className=''><IconProvider objectType={cardData && cardData.body['@type']} className="" /></div>
                            <span className=' ml-2 font-sans text-2xl mb-1 ml-1 mr-1'>
                                LO:
                            </span>
                            <span className='font-semibold text-2xl table-cell align-middle mr-auto'>
                                <div className="w-[160px] overflow-hidden">
                                    {cardData && getTypeString(cardData.headers['type'])}
                                </div>
                                {(!cardData && !is404) &&
                                    <div role="status" className='absolute top-[30px] left-[150px] scale-150'>
                                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 " style={{ fill: color }} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                }
                                {is404 &&
                                    <div className='absolute top-[40px] left-[110px] scale-150 text-red-400 text-lg'>
                                        Invalid Request
                                    </div>

                                }
                            </span>
                            {cardData && cardData.headers["latest-revision"] &&
                                <div className="bg-slate-200/[0.9] p-1 mr-12 mt-2 rounded-lg text-sm align-baseline w-[50px] ">
                                    rv. {cardData.headers["latest-revision"]}
                                </div>
                            }

                        </div>

                        <div className="w-full inline-block ml-2">
                            <span className='block text-xs font-bold ml-1'>
                                {displayName && displayName}
                                {!displayName && cardData && cardData.body['@id'].split("/").slice(2, -2).join("/")}
                            </span>
                            {(!is404 && isOpen) &&
                                <div
                                    ref={refs.setFloating}
                                    style={{ ...floatingStyles, fontSize: "0.67rem", lineHeight: "0.9rem" }}
                                    {...getFloatingProps()}
                                    className=' bg-slate-200/[0.9] drop-shadow-lg p-2 rounded-lg z-10 w-[200px] backdrop-blur'
                                >
                                    {"Click to Copy"}
                                </div>
                            }
                            {!is404 &&
                                <button className='text-xs block  whitespace-nowrap w-[250px] overflow-clip text-ellipsis bg-slate-100/[0.9] active:bg-slate-300 p-1 rounded-sm  duration-200 transition-color'
                                    ref={refs.setReference} {...getReferenceProps()}
                                    onClick={() => { navigator.clipboard.writeText(cardData ? cardData.body['@id'] : "") }}>
                                    <span className='flex justify-start'>
                                        {cardData && cardData.body['@id'].split("/").slice(-2).join("/")}
                                    </span>
                                </button>
                            }

                        </div>
                        {cardData && cardData.headers["last-modified"] &&
                            <span className='absolute bottom-1 font-light text-xs flex'>
                                <svg className="inline-block my-auto ml-2" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.376 0-149.188-30Q261-156 208.5-208.5T126-330.958q-30-69.959-30-149.5Q96-560 126-630t82.5-122q52.5-52 122.458-82 69.959-30 149.5-30 79.542 0 149.548 30.24 70.007 30.24 121.792 82.08 51.786 51.84 81.994 121.92T864-480q0 79.376-30 149.188Q804-261 752-208.5T629.869-126Q559.738-96 480-96Zm0-384Zm.477 312q129.477 0 220.5-91.5T792-480.477q0-129.477-91.023-220.5T480.477-792Q351-792 259.5-700.977t-91.5 220.5Q168-351 259.5-259.5T480.477-168Z" /></svg>
                                <span className='inline-block align-baseline my-auto ml-1'>
                                    {moment(Date.parse(cardData.headers["last-modified"])).fromNow()}
                                </span>
                            </span>
                        }
                    </div>
                </div>
                <button
                    className='relative'
                    onClick={() => { setExpansionState((expansionState + 1) % 3); expansionState == expansion.Closed ? setFirstOpen(true) : "" }}
                >
                    <svg className={`absolute bottom-0 right-0 transition-all duration-500 ${expansionState == expansion.Folded ? "rotate-90" : ""} ${expansionState == expansion.Expanded ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" height="36" viewBox="0 -960 960 960" width="36"><path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z" /></svg>
                </button>

                {/* LEFT SIDE BUTTONS */}
                <div note="left-shifted-buttons" className="relativ ">
                    {/* OPEN LINKS BUTTON */}
                    {links.length && cardData.headers['latest-revision'] == cardData.headers['revision'] ?
                        <button className="absolute right-[-15px] mt-3
                        hover:bg-neutral-100 active:bg-neutral-200 transition-all duratio-300
                        bg-white/[0.9] rounded-full p-1 drop-shadow-md"
                            onClick={() => { addLinks() }}>
                            <span className="mx-1 text-sm">{links.length}</span>
                            <svg className="inline" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="M450-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140-422 180.833-381q40.834 41 99.167 41h170v60ZM325-450v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820-538 779.167-579 738.333-620 680-620H510v-60h170q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H510Z" /></svg>
                        </button>
                        : ""}


                    <button className="absolute right-[-15px] mt-[52px]
                hover:bg-neutral-100 active:bg-neutral-200 transition-all duratio-300
                bg-white/[0.9] rounded-full p-1 drop-shadow-md" onClick={() => { setRefetch(true) }}>
                        <IconReload />
                    </button>

                </div>
            </div >

            <div note="midsection"
                className={`
            ${(expansionState == expansion.Closed) ? "max-h-[0px] max-0" : ""} 
            ${(expansionState == expansion.Folded) ? "max-h-[250px]" : ""} 
            ${(expansionState == expansion.Expanded) ? "max-h-[500px]" : ""} 
            transition-all duration-300 nodrag w-full w-[235px] rounded-b-lg overflow-hidden
            `}
                style={{ userSelect: "text", cursor: "text" }}
            >
                {/* and set the styles user-select: 'text' and cursor: 'text' */}
                <div className={`w-full ${expansionState == expansion.Closed && "hidden"} `}>
                    {/* Property List */}
                    {cardData && cardData.body &&
                        < PropList
                            id={id}
                            cardData={cardData}
                            expansionState={expansionState}
                            links={links}
                            setLinks={setLinks}
                            inEdit={inEdit}
                            setInEdit={setInEdit}
                            setRefetch={setRefetch}
                            token={token}
                        />}
                </div>
                {/* Buttons */}
                <div className={`h-10 m-2 mb-2
                            ${expansionState == expansion.Closed && "hidden"} 
                            `}>

                    <div className="flex">
                        {cardData && cardData.headers['revision'] == cardData.headers['latest-revision'] &&
                            <>
                                {!inEdit &&
                                    <button
                                        id="logisticEvent-Button"
                                        onClick={() => { }}
                                        className={` flex-initial  top-0 border-slate-400 rounded-lg border-[1px] mr-1`}>
                                        <svg id="logisticEvent-Icon" className='fill-slate-800 m-2 left-[-1px] top-[-1px]' xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 960 960" width="16">
                                            <path id="logisticEvent-Path" xmlns="http://www.w3.org/2000/svg" d="M39.384615 374.153846c0 114.215385 45.292308 222.523077 126.03077 303.261539 17.723077 17.723077 43.323077 17.723077 61.046153 0 17.723077-17.723077 17.723077-45.292308 0-63.015385-63.015385-63.015385-98.461538-149.661538-98.461538-240.246154s35.446154-177.230769 98.461538-240.246154c17.723077-17.723077 17.723077-45.292308 0-63.015384-17.723077-17.723077-43.323077-17.723077-61.046153 0C84.676923 151.630769 39.384615 259.938462 39.384615 374.153846z m250.092308 177.230769c17.723077 17.723077 45.292308 17.723077 63.015385 0 17.723077-17.723077 17.723077-45.292308 0-63.015384-29.538462-29.538462-47.261538-70.892308-47.261539-114.215385 0-43.323077 15.753846-82.707692 47.261539-114.215384 17.723077-17.723077 17.723077-45.292308 0-63.015385-17.723077-17.723077-45.292308-17.723077-63.015385 0-47.261538 47.261538-72.861538 110.276923-72.861538 177.230769 0 66.953846 25.6 129.969231 72.861538 177.230769zM856.615385 70.892308c-17.723077-17.723077-45.292308-17.723077-63.015385 0-17.723077 17.723077-17.723077 45.292308 0 63.015384 63.015385 63.015385 100.430769 149.661538 100.430769 240.246154s-35.446154 177.230769-100.430769 240.246154c-17.723077 17.723077-17.723077 45.292308 0 63.015385 17.723077 17.723077 45.292308 17.723077 63.015385 0 80.738462-80.738462 126.030769-189.046154 126.030769-303.261539 0-114.215385-45.292308-222.523077-126.030769-303.261538zM805.415385 374.153846c-1.969231-66.953846-27.569231-129.969231-74.83077-177.230769-17.723077-17.723077-43.323077-17.723077-61.046153 0-17.723077 17.723077-17.723077 45.292308 0 63.015385 29.538462 31.507692 47.261538 70.892308 47.261538 114.215384 0 43.323077-17.723077 84.676923-47.261538 114.215385-17.723077 17.723077-17.723077 45.292308 0 63.015384 17.723077 17.723077 43.323077 17.723077 61.046153 0 47.261538-47.261538 72.861538-110.276923 72.861539-177.230769zM466.707692 480.492308c-43.323077-17.723077-70.892308-59.076923-70.892307-108.307693 0-63.015385 51.2-114.215385 114.215384-114.215384 63.015385 0 116.184615 51.2 116.184616 114.215384 0 49.230769-29.538462 88.615385-70.892308 106.338462v464.738461c0 11.815385-11.815385 23.630769-23.630769 21.661539h-43.323077c-11.815385 0-21.661538-9.846154-21.661539-21.661539V480.492308z" />
                                        </svg>
                                    </button>
                                }
                                <button
                                    onClick={() => { if (inEdit == 0) { setInEdit(1) } else if (inEdit == 1) { setInEdit(2) } }}
                                    className={` flex-initial  top-0 border-slate-400 rounded-lg ${inEdit ? "bg-blue-400" : "border-[1px]"}`}>
                                    {!inEdit && <svg className='fill-slate-800 m-2 left-[-1px] top-[-1px]' xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z" /></svg>}
                                    {inEdit != 0 && <svg className='fill-slate-50 m-1' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m382.808-258.693-207.73-207.73 40.037-40.038 167.693 167.885 362.269-362.269 39.845 40.037-402.114 402.115Z" /></svg>}
                                </button>
                            </>
                        }
                        {cardData && cardData.headers['revision'] != cardData.headers['latest-revision'] &&
                            <div className='p-2 bg-red-500 rounded-lg text-white text-xs top-0 '>
                                <span className='inline'>
                                    ! Older Revision
                                </span>
                            </div>
                        }
                        {cardData && inEdit == 0 &&
                            <div className='flex grow justify-end'>
                                <label className='p-1 mr-1'>rv.</label>
                                <input className='text-xs mr-1 border border-slate-400 rounded-md p-[2px] active:outline-none focus:outline-none' onChange={e => setselectedRevision(e.target.value)}
                                    type='number' min='1' max={cardData.headers["latest-revision"]} value={selectedRevision} />
                                <button
                                    className={`top-0 border-slate-400 rounded-lg bg-blue-400`} onClick={loadRevData} >
                                    <svg className='fill-slate-50 m-1' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m382.808-258.693-207.73-207.73 40.037-40.038 167.693 167.885 362.269-362.269 39.845 40.037-402.114 402.115Z" /></svg>
                                </button>
                            </div>
                        }
                        {inEdit != 0 && <button
                            onClick={revertChanges}
                            className={`flex-initial ml-1 border-slate-400 rounded-lg border-[1px]`}>
                            <svg className="fill-slate-800 m-1 rotate-45" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M452.116-216.462v-235.962H216.154v-55.96h235.962v-235.962h55.96v235.962h235.962v55.96H508.076v235.962h-55.96Z" /></svg>
                        </button>}
                        {inEdit != 0 &&
                            <div className='flex grow justify-end'>
                                <button onClick={deleteNode}
                                    className=' p-2 bg-red-500 rounded-lg text-white text-xs top-0 '>
                                    <svg className="fill-white inline mr-1" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16"><path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" /></svg>
                                    <span className='inline'>
                                        Delete
                                    </span>
                                </button>
                            </div>
                        }
                    </div>
                </div>

            </div>
            <Handle
                className='hidden'
                type="source"
                position={Position.Top}
                id="a"
                isConnectable={isConnectable}
            />
            <Handle
                className='hidden'
                type="target"
                position={Position.Bottom}
                id="a"
                isConnectable={isConnectable}
            />
        </div >
    );
}

export default LOCard;
