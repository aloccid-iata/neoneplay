import React, { useCallback, useEffect, useState, useMemo, useRef } from 'react';
import ReactFlow, { useNodesState, useEdgesState, addEdge, MiniMap, Controls, Background, useReactFlow, Connection, Edge } from 'reactflow';
import 'reactflow/dist/style.css';
import LOCard from './LOCard';
import useRFStore from '@/storeRF';
import useInternalStore from '@/store';
import FloatingEdge from './Edge/FloatingEdge';
import FloatingConnectionLine from './Edge/FloatingConnectionLine';
import EventPanel from './Events/EventPanel';
import CustomPanel from './BDI/CustomPanel';


const Canvas = ({ setRfInstance }) => {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const reactFlowInstance = useReactFlow();
    const rfCanvasRef = useRef(0)
    const { setAddNodeFlag, addNodeFlag, resetSearchbarValue, searchbarValue } = useInternalStore()

    const nodeTypes = useMemo(() => ({ LO: LOCard }), []);
    const edgeTypes = useMemo(() => ({ floating: FloatingEdge }), [])

    const [selectedObjectEvent, setSelectedObjectEvent] = useState('')
    const [bdiSelectedObjectEvent, bdiSetSelectedObjectEvent] = useState('')


    const onPaneClick = (event) => {
        if (addNodeFlag) {
            setAddNodeFlag(false)
            const bounds = rfCanvasRef.current.getBoundingClientRect();
            const position = reactFlowInstance.project({
                x: event.clientX - bounds.left,
                y: event.clientY - bounds.top
            })
            setNodes(nds => nds.concat({
                id: searchbarValue,
                type: 'LO',
                dragHandle: '#node-header',
                data: {
                    uri: searchbarValue,
                },
                position: position,
            }
            ))
            resetSearchbarValue();
        }
    }

    const nodeClick = (event, node) => {


        if (event.target.id.includes('logisticEvent')) {
            setSelectedObjectEvent(node.data.uri)
        }
        if (event.target.id.includes('BDI')) {
            console.log(node.data.uri)
            bdiSetSelectedObjectEvent(node.data.uri)
        }
    }


    return (
        <div className="absolute left-0 top-0 w-full h-full z-0 "
            style={{ flexDirection: "column", display: "flex", flexGrow: 1, height: "100%" }}>
            <ReactFlow className='dark:bg-slate-600 transition-color duration-300 '
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                connectionLineComponent={FloatingConnectionLine}
                minZoom={0.25}
                onPaneClick={onPaneClick}
                ref={rfCanvasRef}
                style={{ cursor: (addNodeFlag ? "cell" : "") }}
                onInit={setRfInstance}
                onNodeClick={nodeClick}
            >
                <MiniMap />
                <Controls />

                <Background color='black' variant='dots' />
            </ReactFlow>
            <EventPanel
                selectedObject={selectedObjectEvent}
                setSelectedObject={setSelectedObjectEvent}
            />
            <CustomPanel
                selectedObject={bdiSelectedObjectEvent}
                setSelectedObject={bdiSetSelectedObjectEvent}
            />
        </div>
    );
};

export default Canvas;
