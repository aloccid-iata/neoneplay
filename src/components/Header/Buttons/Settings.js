import useInternalStore from "@/store";
import { useEffect, useState } from "react";

const Settings = () => {
    const [seeSettings, setSeeSettings] = useState(false)
    const { servers, addServer, removeServer, cleanServer } = useInternalStore()

    const [org, setOrg] = useState("");
    const [host, setHost] = useState("");
    const [protocol, setProtocol] = useState("");
    const [token, setToken] = useState("");
    const [color, setColor] = useState("#ffffff")

    useEffect(() => {
        //addServer("AIRLINE XYZ", "ne-one-airline-1-9d58e17495dd.herokuapp.com", globalToken, "#DD7373","https"); // Airline
        //addServer("FORWARDER 123", "ne-one-forwarder1-310e540cd5dc.herokuapp.com", globalToken, "#EAD94C","https") // Forwarder
        //addServer("SHIPPER ABC", "ne-one-shipper1-7e0fd8738aaa.herokuapp.com", globalToken, "#51A3A3","https") // Shipper
    }, [])

    return (

        <>
            <div className='has-tooltip '>
                <span className='tooltip rounded shadow-lg p-1 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-200 mt-12 -ml-10  duration-200 transition-colors' >Change Database</span>
                <button onClick={() => { setSeeSettings(!seeSettings) }}
                    className="p-2 bg-violet-400 hover:bg-violet-600 active:bg-violet-800 dark:bg-violet-500 dark:hover:bg-violet-600 dark:active:bg-violet-800 rounded-full mx-1 my-auto text-white  duration-200 transition-all">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="m388 976-20-126q-19-7-40-19t-37-25l-118 54-93-164 108-79q-2-9-2.5-20.5T185 576q0-9 .5-20.5T188 535L80 456l93-164 118 54q16-13 37-25t40-18l20-127h184l20 126q19 7 40.5 18.5T669 346l118-54 93 164-108 77q2 10 2.5 21.5t.5 21.5q0 10-.5 21t-2.5 21l108 78-93 164-118-54q-16 13-36.5 25.5T592 850l-20 126H388Zm92-270q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29 0-49.5-20.5T410 576q0-29 20.5-49.5T480 506q29 0 49.5 20.5T550 576q0 29-20.5 49.5T480 646Zm0-70Zm-44 340h88l14-112q33-8 62.5-25t53.5-41l106 46 40-72-94-69q4-17 6.5-33.5T715 576q0-17-2-33.5t-7-33.5l94-69-40-72-106 46q-23-26-52-43.5T538 348l-14-112h-88l-14 112q-34 7-63.5 24T306 414l-106-46-40 72 94 69q-4 17-6.5 33.5T245 576q0 17 2.5 33.5T254 643l-94 69 40 72 106-46q24 24 53.5 41t62.5 25l14 112Z" /></svg>
                </button>
            </div>
            {seeSettings &&
                <div className="z-20 absolute w-[60%] h-[60%] top-[10%] left-[20%] ">
                    <div className="block bg-slate-100 m-2 p-4 w-full h-full rounded-3xl  overflow-y-scroll no-scrollbar">
                        <button onClick={() => { setSeeSettings(!seeSettings) }} className="block ml-auto p-2 bg-violet-400 hover:bg-violet-500 active:bg-violet-600 transition-color duration-200 text-white rounded-full">
                            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>
                        </button>
                        <div className="block bg-slate-200 p-2  m-2 ml-0 w-full rounded-3xl ">
                            <span className="text-xl font-medium pl-1">ONE Record Servers</span>
                            <div className="mt-2">
                                <div className="flex w-full bg-slate-300 p-2 rounded-t-2xl mb-2">
                                    <span className="flex-1 w-40">Organization</span>
                                    <span className="flex-1 w-20">Protocol</span>
                                    <span className="flex-1 w-40">Host</span>
                                    <span className="flex-none">Action</span>
                                </div>
                                <div className="overflow-y-scroll h-[10vw] no-scrollbar">
                                    {servers.map((server, index) => {
                                        return (
                                            <li key={index} className="list-none border-b-2 border-violet-300 py-1 flex gap-2 ">
                                                <span className="flex-1 w-16 pl-1">{server.org_name}</span>
                                                <span className="flex-1 w-16">{server.protocol}</span>
                                                <span className="flex-1 w-32">{server.host}</span>
                                                <div className="">
                                                    {/* Color Picker */}
                                                    <input className="mr-2" type="color" name="" id="" defaultValue={server.color} style={{ height: "100%" }} />
                                                    {/* Delete */}
                                                    <button className="flex-none bg-violet-300 p-1 rounded-full mr-auto"
                                                        onClick={() => { removeServer(server) }}>
                                                        <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path d="M261 936q-24.75 0-42.375-17.625T201 876V306h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438V306ZM367 790h60V391h-60v399Zm166 0h60V391h-60v399ZM261 306v570-570Z" /></svg>
                                                    </button>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </div>
                                <div className="rounded-b-xl bg-slate-300 p-2">
                                    <div className="py-2 grid grid-cols-2 gap-2">
                                        <span>Organization Name</span>
                                        <input type="text" className=" rounded-xl px-4 focus:outline-none" value={org} onChange={e => setOrg(e.target.value)} />
                                        <span>Protocol</span>
                                        <input type="text" className="rounded-xl px-4 focus:outline-none" value={protocol} onChange={e => setProtocol(e.target.value)} />
                                        <span>Host</span>
                                        <input type="text" className="rounded-xl px-4 focus:outline-none" value={host} onChange={e => setHost(e.target.value)} />
                                        <span>Token</span>
                                        <input type="password" className="rounded-xl px-4 focus:outline-none" value={token} onChange={e => setToken(e.target.value)} />
                                        <span>Pick Color</span>
                                        <input type="color" name="" id="" style={{ margin: "auto", width: "100%" }} value={color} onChange={e => setColor(e.target.value)} />
                                    </div>
                                    <button className=" bg-violet-300 text-white font-light p-1 rounded-full w-full hover:bg-violet-400 active:bg-violet-500 transition-color duration-200"
                                        onClick={() => { addServer(org, host, token, color, protocol); setOrg(""); setProtocol(""); setHost(""), setToken(""), setColor("#ffffff") }}>
                                        <svg className="fill-white mx-auto" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-200v-240H200v-80h240v-240h80v240h240v80H520v240h-80Z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            }
        </>
    )
}
export default Settings;
