import iri_description from '@/ontology/iri-description';
import embobject_properties from '@/ontology/embobject-properties';
import standard_values from '@/ontology/standard-values';

import { useEffect, useState } from 'react';
import PropLine from './PropLine';
import isValidHttpUrl from '@/helpers/isValidHttpUrl';
import { operation } from '@/helpers/Enums';



const PropList = ({ id, cardData, expansionState, links, setLinks, inEdit, setInEdit, setRefetch, token }) => {
    const [data, setData] = useState([])
    const [changeMap, setChangeMap] = useState({})

    useEffect(() => {
        if (!inEdit) {
            setData(data.filter((line) => !line.isAddedLine))
        }
    }, [inEdit])

    useEffect(() => {
        const patchDataCall = async () => {
            if (inEdit == 2) {
                if (Object.keys(changeMap).length > 0) {
                    let changeObj = [];
                    // index is the key of the map
                    for (const index in changeMap) {
                        if (changeMap[index].op == operation.Change) {
                            changeObj.push(
                                {
                                    "@type": "api:Operation",
                                    "api:op": { "@id": "api:DELETE" },
                                    "api:s": changeMap[index].parent,
                                    "api:p": "https://onerecord.iata.org/ns/cargo#" + changeMap[index].label,
                                    "api:o": [{
                                        "@type": "api:OperationObject",
                                        "api:hasDatatype": changeMap[index].type ? changeMap[index].type : "http://www.w3.org/2001/XMLSchema#string",
                                        "api:hasValue": changeMap[index].oldValue
                                    }]
                                });
                            changeObj.push(
                                {
                                    "@type": "api:Operation",
                                    "api:op": { "@id": "api:ADD" },
                                    "api:s": changeMap[index].parent,
                                    "api:p": "https://onerecord.iata.org/ns/cargo#" + changeMap[index].label,
                                    "api:o": [{
                                        "@type": "api:OperationObject",
                                        "api:hasDatatype": changeMap[index].type ? changeMap[index].type : "http://www.w3.org/2001/XMLSchema#string",
                                        "api:hasValue": changeMap[index].newValue
                                    }]
                                })

                        }
                        if (changeMap[index].op == operation.Delete) {
                            changeObj.push(
                                {
                                    "@type": "api:Operation",
                                    "api:op": { "@id": "api:DELETE" },
                                    "api:s": changeMap[index].parent,
                                    "api:p": "https://onerecord.iata.org/ns/cargo#" + changeMap[index].label,
                                    "api:o": [{
                                        "@type": "api:OperationObject",
                                        "api:hasDatatype": changeMap[index].type ? changeMap[index].type : "http://www.w3.org/2001/XMLSchema#string",
                                        "api:hasValue": changeMap[index].oldValue
                                    }]
                                });
                        }
                        if (changeMap[index].op == operation.Add) {
                            changeObj.push(
                                {
                                    "@type": "api:Operation",
                                    "api:op": { "@id": "api:ADD" },
                                    "api:s": changeMap[index].parent,
                                    "api:p": "https://onerecord.iata.org/ns/cargo#" + changeMap[index].label,
                                    "api:o": [{
                                        "@type": "api:OperationObject",
                                        "api:hasDatatype": changeMap[index].type ? changeMap[index].type : "http://www.w3.org/2001/XMLSchema#string",
                                        "api:hasValue": changeMap[index].newValue
                                    }]
                                });

                            let objectType = changeMap[index].type.split('#').pop()
                            let objectDesc = iri_description[':' + objectType]
                            if (objectDesc && objectDesc.Type == 'EmbeddedObject') {
                                let embobj = embobject_properties[changeMap[index].type.split('#').pop()];
                                for (const property of embobj.properties) {
                                    let propertyDesc = iri_description[':' + property]
                                    if (propertyDesc && propertyDesc.Type == 'DataProperty') {
                                        changeObj.push(
                                            {
                                                "@type": "api:Operation",
                                                "api:op": { "@id": "api:ADD" },
                                                "api:s": changeMap[index].newValue,
                                                "api:p": "https://onerecord.iata.org/ns/cargo#"+property,
                                                "api:o": [{
                                                    "@type": "api:OperationObject",
                                                    "api:hasDatatype": propertyDesc.TypeIRI ? propertyDesc.TypeIRI : "http://www.w3.org/2001/XMLSchema#string",
                                                    "api:hasValue": standard_values[propertyDesc.TypeIRI]
                                                }]
                                            });
                                    }
                                }
                            }

                        }
                    }
                    const changes = Object.values(changeMap).map(change => change.label).join(',');
                    const body_obj = {
                        "@context": {
                            "cargo": "https://onerecord.iata.org/ns/cargo#",
                            "api": "https://onerecord.iata.org/ns/api#"
                        },
                        "@type": "api:Change",
                        "api:hasLogisticsObject": {
                            "@id": id
                        },
                        "api:hasDescription": "Change on " + changes,
                        "api:hasOperation": changeObj,
                        "api:hasRevision": {
                            "@type": "http://www.w3.org/2001/XMLSchema#positiveInteger",
                            "@value": cardData.headers["latest-revision"]
                        }
                    }
                    console.log(changeObj);
                    //make fetch
                    if (Object.keys(body_obj["api:hasOperation"]).length) {
                        let res = await fetch(id, {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/ld+json",
                                "Authorization": "Bearer " + token
                            },
                            body: JSON.stringify(body_obj)
                        })
                        if (res.status == 201) {
                            setInEdit(0)
                            setRefetch(true)
                        }
                    } else {
                        console.log("body obj not parsed")
                    }
                } else {
                    setInEdit(0)
                }
                return
            }
            if (inEdit == 0 && Object.keys(changeMap).length != 0) {
                setChangeMap({})
            }
        }
        patchDataCall()

    }, [inEdit, changeMap])

    useEffect(() => {
        const recursiveParse = (data, property, parent, indentation, lineContainer, innerlinks, index) => {
            const line = {
                label: '',
                description: '',
                value: '',
                type: '',
                indentation: indentation,
                isImage: false,
                isURL: false,
                isEditable: false,
                isDeletable: true,
                parent: parent,
                isExtObj: false,
                index: index,
                isEmbeddedObj: false,
                isValid : true
            };
            let iri_prefixed = property.split("#").pop()
            let object = iri_description[":" + iri_prefixed]
            if (!object) {
                line.label = <span className='text-red-500'>{iri_prefixed}</span>
                line.label = iri_prefixed
                line.description = "Invalid One Record Property"
                line.type = data["@type"]
                line.isValid = false
            } else {
                line.label = object.Label;
                line.description = object.Description
                line.type = object.TypeIRI
                line.isValid = true
            }

            if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
                //External link
                if (data["@id"] != null && isValidHttpUrl(data["@id"])) {
                    line.isEditable = true
                    line.isExtObj = true
                    line.value = data["@id"]
                    innerlinks.push({ loType: line.label, loLocation: data["@id"] })
                    lineContainer.push(line)
                }
                // Value
                if (data["@value"] != null) {
                    line.isEditable = true
                    line.value = data["@value"]
                    lineContainer.push(line)
                }
                //Embedded object
                if (data["@id"] != null && !isValidHttpUrl(data["@id"])) {
                    line.value = data["@id"]
                    line.isEmbeddedObj = true
                    lineContainer.push(line)
                    let keys = Object.keys(data)
                    keys.map((property) => {
                        if (property[0] != "@") {
                            recursiveParse(data[property], property, data["@id"], indentation + 1, lineContainer, innerlinks, 0)
                        }
                    })
                }
            } else if (Array.isArray(data)) {
                data.map((item, index) => {
                    recursiveParse(item, property, parent, indentation, lineContainer, innerlinks, (index + 1))
                })
            } else {
                if (isValidHttpUrl(data)) {
                    line.isEditable = true
                    line.value = data
                    line.isURL = true;
                } else {
                    line.isEditable = true
                    line.value = data
                }
                lineContainer.push(line);
            }
        }
        //Start Function
        let innerlinks = []
        let lineContainer = []
        if (cardData && cardData.body["@id"] == id) {
            let keys = Object.keys(cardData.body)
            keys.map((property) => {
                if (property[0] != "@") {
                    recursiveParse(cardData.body[property], property, id, 0, lineContainer, innerlinks, 0)
                }
            })

        }
        //Set Data in the component
        setData(lineContainer)
        setLinks(innerlinks)
        setChangeMap({})
    }, [cardData])

    const addProperty = (parentValue, parentIndentation, index) => {
        //Random index is defined to have a different key
        const line = {
            label: '',
            description: '',
            value: '',
            type: '',
            indentation: parentIndentation + 1,
            isURL: false,
            isEditable: true,
            isDeletable: true,
            parent: parentValue,
            isExtObj: false,
            index: Math.floor(Math.random() * 30000),
            isEmbeddedObj: false,
            isAddedLine: true,
            isValid : true
        };
        let innerData = [...data]
        innerData.splice(index + 1, 0, line)
        setData(innerData)
    }

    const resetIndexOnLabel = (line) => {
        let filteredData = data.filter((item) => item.parent == line.parent && item.label == line.label)
        if (filteredData.length > 1) {
            const updateChangeMap = { ...changeMap };
            filteredData.forEach((item, index) => {
                let oldIndexChange = item.parent + '_' + item.label + '_' + item.index
                item.index = index + 1
                let newIndexChange = item.parent + '_' + item.label + '_' + item.index
                if (oldIndexChange != newIndexChange && updateChangeMap[oldIndexChange] != null) {
                    updateChangeMap[newIndexChange] = updateChangeMap[oldIndexChange]
                    delete updateChangeMap[oldIndexChange]
                }
            });
            setChangeMap(updateChangeMap)
        }
    }

    const deleteLine = (line) => {
        let innerData = [...data]
        const index = data.indexOf(line);
        innerData.splice(index, 1)
        setData(innerData)
    }

    return (
        <>
            <div className={`ml-4 overflow-y-scroll
            ${expansionState == 1 && "max-h-[200px]"} 
            ${expansionState == 2 && "max-h-[300px]"} `}
            >
                {data && data.map((data, index) => {
                    return (
                        <div key={data.parent + data.label + data.index} className="block w-[319px]">
                            <PropLine
                                id={id}
                                data={data}
                                inEdit={inEdit}
                                changeMap={changeMap}
                                setChangeMap={setChangeMap}
                                addProperty={addProperty}
                                order={index}
                                resetIndexOnLabel={resetIndexOnLabel}
                                deleteLine={deleteLine}
                            />
                        </div>
                    )
                })}
                {inEdit != 0 && <div className="flex grow justify-end mt-2"><button
                    onClick={() => addProperty(id, -1, data.length)}
                    className={`ml-1  border-slate-400 rounded-lg border-[1px]`}>
                    <svg className="flex-initial fill-slate-800 m-1" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M452.116-216.462v-235.962H216.154v-55.96h235.962v-235.962h55.96v235.962h235.962v55.96H508.076v235.962h-55.96Z" /></svg>
                </button></div>}
            </div>
        </>
    )
}

export default PropList;
