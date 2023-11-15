import { useState, useEffect } from "react";

const UploadSaveNetwork = (props) => {
    const [seeSettings, setSeeSettings] = useState(false)

    const saveNetwork = () => {
        if (props.reactflowInstance) {
            const flow = props.reactflowInstance.toObject();
            const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
                JSON.stringify(flow)
            )}`;
            const link = document.createElement("a");
            link.href = jsonString;
            let timestamp = Date.now()
            link.download = "nf-" + timestamp + ".json";
            link.click()
        }
    }

    const uploadNetwork = e => {
        console.log(e.target.files[0])
        const fileReader = new FileReader()
        fileReader.readAsText(e.target.files[0], "UTF-8")
        fileReader.onload = e => {
            const flow = JSON.parse(e.target.result)
            console.log(flow)
            if (flow) {
                console.log(flow)
                const { x = 0, y = 0, zoom = 1 } = flow.viewport;
                props.reactflowInstance.setNodes(flow.nodes || []);
                props.reactflowInstance.setEdges(flow.edges || []);
                props.reactflowInstance.setViewport({ x, y, zoom });
                setSeeSettings(!seeSettings)
            }
        };


    };

    return (

        <>
            <div className='has-tooltip '>
                <span className='tooltip rounded shadow-lg p-1 bg-slate-200 dark:bg-slate-600 text-slate-600 dark:text-slate-200 mt-12 -ml-10  duration-200 transition-colors' >Save/Restore Network</span>
                <button onClick={() => { setSeeSettings(!seeSettings) }}
                    className="p-2 bg-violet-400 hover:bg-violet-600 active:bg-violet-800 dark:bg-violet-500 dark:hover:bg-violet-600 dark:active:bg-violet-800 rounded-full mx-1 my-auto text-white  duration-200 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                </button>
            </div>
            {seeSettings &&
                <div className="z-20 absolute w-[60%] h-[60%] top-[10%] left-[20%] ">
                    <div className="block bg-slate-100 m-2 p-4 w-full h-full rounded-3xl  overflow-y-scroll no-scrollbar">
                        <button onClick={() => { setSeeSettings(!seeSettings) }} className="block ml-auto p-2 bg-violet-400 hover:bg-violet-500 active:bg-violet-600 transition-color duration-200 text-white rounded-full">
                            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" /></svg>
                        </button>
                        <div className="block bg-slate-200 p-2  m-2 ml-0 w-full rounded-3xl ">
                            <span className="text-xl font-medium pl-1">Save network file</span>
                            <div className="flex justify-center">
                                <button onClick={saveNetwork} className="w-[30%] mt-2 p-2 bg-violet-400 hover:bg-violet-500 active:bg-violet-600 transition-color duration-200 text-white rounded-full">
                                    Save
                                </button>
                            </div>
                        </div>
                        <div className="block bg-slate-200 p-2  m-2 ml-0 w-full rounded-3xl ">
                            <span className="text-xl font-medium pl-1">Restore network file</span>
                            <div>
                                <input type="file" onChange={uploadNetwork} id="first_name" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                            </div>
                        </div>
                    </div>
                </div >
            }
        </>
    )
}
export default UploadSaveNetwork;