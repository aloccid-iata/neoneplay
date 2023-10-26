import { useEffect, useState } from "react";
import Select from 'react-select';

function CustomPanel({ selectedObject, setSelectedObject }) {
    const [showPopup, setShowPopup] = useState(false)
    const [selectedServer, setSelectedServer] = useState({})
    const [createdEvent, setCreatedEvent] = useState('')


    const [serverOptions, setServerOption] = useState([])

    useEffect(() => {
        if (selectedObject && selectedObject != '') {
            setServerOption([{
                label: 'NL Customs',
                value: '34.72.128.15:10050',
                protocol: 'http'
            }])
            setCreatedEvent('')
            setShowPopup(true)
        }

    }, [selectedObject])



    useEffect(() => {
        setSelectedServer({})
    }, [showPopup])

    const closePanel = () => {
        setSelectedObject('')
        setShowPopup(!showPopup)
    }

    const sendToCustoms = async () => {
        let body_obj = {
            "involvesMilestone": "Start",
            "UUID": "db91de 756ca",
            "involvesTimeClassification": "Estimated",
            "involvesTimestamp": "2023-10-25T13:44:06+02:00",
            "involvesBusinessIdentifier": selectedObject
        }

        let prom = fetch(selectedServer.protocol + '://' + selectedServer.value + "/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Event-Type": "federated.events.custom-event.v1",
            },
            body: JSON.stringify(body_obj)
        })
        let res = await prom;
        if (res.status == 201) {
            setCreatedEvent('Event Successfully Created!')
        }
        if (res.status == 500) {
            setCreatedEvent('Event Successfully Created!')
        }
    }

    return (
        <>
            {showPopup &&
                <div className="z-20 absolute w-[60%] h-[60%] top-[10%] left-[20%] ">
                    <div className="block bg-slate-100 m-2 p-4 w-full h-full rounded-3xl  overflow-y-scroll no-scrollbar">
                        <button onClick={closePanel} className="block ml-auto p-2 bg-violet-400 hover:bg-violet-500 active:bg-violet-600 transition-color duration-200 text-white rounded-full">
                            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>
                        </button>
                        <div className="block bg-slate-200 p-2  m-2 ml-0 w-full rounded-3xl ">
                            <span className="text-xl font-medium pl-1">Customs Declaration</span>
                            <div className="rounded-b-xl bg-slate-300 p-2">
                                <div className="py-2 grid grid-cols-2 gap-2">
                                    <span>Select Customs BDI Server</span>
                                    <Select options={serverOptions}
                                        isClearable={true}
                                        isSearchable={true}
                                        onChange={(item) => { if (item != null) { setSelectedServer(item) } }}
                                    />
                                </div>
                                <button className=" bg-violet-300 text-white font-light p-1 rounded-full w-full hover:bg-violet-400 active:bg-violet-500 transition-color duration-200"
                                    onClick={sendToCustoms}>
                                    <span>Send to Customs</span>
                                </button>
                            </div>
                        </div>
                        {createdEvent != '' &&
                            <>
                                <div className="mt-2"><span>{createdEvent}</span></div>
                                <div className="flex justify-center">
                                    <button onClick={() => { setShowPopup(!showPopup) }} className="w-[30%] mt-2 p-2 bg-violet-400 hover:bg-violet-500 active:bg-violet-600 transition-color duration-200 text-white rounded-full">
                                        Close Window
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            }
        </>
    )

}

export default CustomPanel;