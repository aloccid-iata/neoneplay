import { useEffect, useState } from "react";
import useInternalStore from "@/store";
import Select from 'react-select';


function EventPanel({ selectedObject, setSelectedObject }) {
    const [showEventPanel, setShowEventPanel] = useState(false)
    const [eventDate, setEventDate] = useState('')
    const [eventCode, setEventCode] = useState('')
    const [eventName, setEventName] = useState('')
    const [eventTimeType, setEventTimeType] = useState({})
    const [company, setCompany] = useState('')
    const [listLE, setListLE] = useState([])
    const { servers } = useInternalStore()

    const eventTimeTypes = [{ label: 'ACTUAL', value: 'ACTUAL' }, { label: 'ESTIMATED', value: 'ESTIMATED' },
    { label: 'EXPECTED', value: 'EXPECTED' }, { label: 'PLANNED', value: 'PLANNED' },
    { label: 'REQUESTED', value: 'REQUESTED' }]

    useEffect(() => {
        if (selectedObject && selectedObject != '') {
            setListLE([])
            readLE(selectedObject)
            setShowEventPanel(true);
        }

    }, [selectedObject])

    const closePanel = () => {
        setSelectedObject('')
        setShowEventPanel(!showEventPanel)
    }

    function cleanInterface() {
        setEventCode('')
        setCompany('')
        setEventDate('')
        setEventName('')
        setEventTimeType('')
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

    async function readLE(selectedObject) {
        let token;
        servers.map((server, index) => {
            if (selectedObject.includes(server.host)) {
                token = server.token
            }
        })

        let prom = fetch(selectedObject + "/logistics-events", {
            method: "GET",
            headers: {
                "Content-Type": "application/ld+json",
                "Accept": "application/ld+json",
                "Authorization": "Bearer " + token
            }
        })
        let res = await prom;
        let body = await res.json()
        console.log(body)
        if (res.status == 200) {
            let eventList = []
            if (body["@graph"]) {
                body["@graph"].forEach((event,) => {
                    if(!event['@id'].includes('neone:')){
                        eventList.push(resolveGraphById(body, event['@id']))

                    }
                })
            } else {
                eventList.push(body)
            }
            console.log(eventList)
            if (eventList.length > 1) {
                eventList.sort(function (a, b) {
                    a['eventDate']['@value']
                    return new Date(b['eventDate']['@value']) - new Date(a['eventDate']['@value']);
                })
            }
            let list = []
            if (eventList && eventList.length > 0) {
                eventList.forEach((event) => {
                    let key = Math.random().toString(36).slice(2, 7);
                    list.push(
                        <tr key={key}>
                            <td className="border border-slate-600 text-center">{event['eventName']}</td>
                            <td className="border border-slate-600 text-center">{event['eventCode']['code']}</td>
                            <td className="border border-slate-600 text-center">{event['eventDate']['@value'].replace('T', ' ').replace('Z', '')}</td>
                            <td className="border border-slate-600 text-center">{event['eventTimeType']['@id'].split("#").pop()}</td>
                        </tr>
                    )
                })
                setListLE(list)
            }
        }
    }

    const createLE = async () => {
        const creationDateISO = new Date().toISOString()
        const eventDateISO = new Date(eventDate).toISOString()
        let body_obj = {
            "@context": {
                "cargo": "https://onerecord.iata.org/ns/cargo#",
            },
            "@type": "cargo:LogisticsEvent",
            "cargo:creationDate": {
                "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
                "@value": creationDateISO
            },
            "cargo:eventDate": {
                "@type": "http://www.w3.org/2001/XMLSchema#dateTime",
                "@value": eventDateISO
            },
            "cargo:eventCode": {
                "@type": "cargo:CodeListElement",
                "cargo:code": eventCode,
                "cargo:codeListName": "Event code list"
            },
            "cargo:eventName": eventName,
            "cargo:eventTimeType": {
                "@id": "cargo:" + eventTimeType.value
            },
            "cargo:linkedObject": {
                "@id": selectedObject
            },
            "cargo:recordingOrganization": {
                "@id": company
            }
        }

        let token;
        servers.map((server, index) => {
            if (selectedObject.includes(server.host)) {
                token = server.token
            }
        })

        let prom = fetch(selectedObject + "/logistics-events", {
            method: "POST",
            headers: {
                "Content-Type": "application/ld+json",
                "Accept": "application/ld+json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify(body_obj)
        })
        let res = await prom;
        if (res.status == 201) {
            cleanInterface();
            readLE(selectedObject);
        }

    }

    return (
        <>
            {showEventPanel &&
                <div className="z-20 absolute w-[80%] h-[70%] top-[15%] left-[10%] ">
                    <div className="block bg-slate-100 m-2 p-4 w-full h-full rounded-3xl  overflow-y-scroll no-scrollbar">
                        <button onClick={closePanel} className="block ml-auto p-2 bg-violet-400 hover:bg-violet-500 active:bg-violet-600 transition-color duration-200 text-white rounded-full">
                            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>
                        </button>
                        <div className="block bg-slate-200 p-2  m-2 ml-0 w-full rounded-3xl ">
                            <span className="text-xl font-medium pl-1 pt-2">Logistics Events</span>
                            {listLE.length > 0 ?
                                <div className="rounded-b-xl bg-slate-300 mt-1">
                                    <table className="table-fixed w-[100%]">
                                        <thead>
                                            <tr>
                                                <th className="border border-slate-600 ...">Event Name</th>
                                                <th className="border border-slate-600 ...">Event Code</th>
                                                <th className="border border-slate-600 ...">Event Date</th>
                                                <th className="border border-slate-600 ...">Event Time Type</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listLE}
                                        </tbody>
                                    </table>
                                </div>
                                :
                                <span> No Events for this Logistics Object</span>
                            }
                        </div>
                        <div className="block bg-slate-200 p-2  m-2 ml-0 w-full rounded-3xl ">
                            <span className="text-xl font-medium pl-1 ">Create New Logistics Event</span>
                            <div className="rounded-b-xl bg-slate-300 p-2 mt-1">
                                <div className="py-2 grid grid-cols-2 gap-2">
                                    <span>Event Name</span>
                                    <input type="text" className=" rounded-xl px-4 focus:outline-none" value={eventName} onChange={e => setEventName(e.target.value)} />
                                    <span>Event Code</span>
                                    <input type="text" className="rounded-xl px-4 focus:outline-none" value={eventCode} onChange={e => setEventCode(e.target.value)} />
                                    <span>Event Date</span>
                                    <input type="datetime-local" className="rounded-xl px-4 focus:outline-none" value={eventDate} onChange={e => setEventDate(e.target.value)} />
                                    <span>Event Time Type</span>
                                    <Select options={eventTimeTypes}
                                        isClearable={true}
                                        isSearchable={true}
                                        onChange={(item) => { if (item != null) { setEventTimeType(item) } }}
                                    />
                                    <span>Recording Company (URI)</span>
                                    <input type="text" className="rounded-xl px-4 focus:outline-none" value={company} onChange={e => setCompany(e.target.value)} />
                                </div>
                                <button className=" bg-violet-300 text-white font-light p-1 rounded-full w-full hover:bg-violet-400 active:bg-violet-500 transition-color duration-200"
                                    onClick={createLE}>
                                    Add Event
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );

}

export default EventPanel;