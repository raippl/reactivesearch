import React, { Component } from "react";
import {
  ReactiveBase,
  CategorySearch,
  SingleRange,
  RangeSlider,
  ResultList,
  DataSearch,
  DynamicRangeSlider,
  MultiList
} from "@appbaseio/reactivesearch";


class ESSearch extends Component {
  render() {
    return (
      <ReactiveBase app="operetest" url="http://locale:9200/" type="doc">
      	<div style={{ display: "flex", flexDirection: "row" }}>
			<div style={{ display: "flex", flexDirection: "column", width: "30%" , paddingRight: "60px"}}>
                <DataSearch
                componentId="searchbox"
                dataField={["descrizione", "forma_giuridica","scelta_contraente"]}
                placeholder="Cerca"
                title="Cerca Documento"
                style={{paddingBottom: '50px'}}
                react={{
                    and: ["searchbox", "importofilter", "regionefilter", "provinciafilter", "comunefilter" ]
                }}
                />
                <DynamicRangeSlider
                        componentId="importofilter"
                        dataField="importo"
                        title="Importo"
                        showHistogram = {true}
                        style={{paddingBottom: '50px'}}
                        defaultSelected={(min, max) => (
                            {
                            "start": min,
                            "end": max
                            }
                        )}
                        rangeLabels={(min, max) => (
                            {
                                "start": "$ "+ min ,
                                "end": "$ "+ max
                            }
                        )}
                        react={{
                            and: ["searchbox", "importofilter", "regionefilter", "provinciafilter", "comunefilter" ]
                        }}
                    /> 
                <MultiList
                    componentId="regionefilter"
                    dataField="regione_progetto"
                    title="Regione"
                    style={{paddingBottom: '50px'}}
                    react={{
                        and: ["searchbox", "importofilter", "regionefilter", "provinciafilter", "comunefilter" ]
                    }}
                />
                <MultiList
                    componentId="provinciafilter"
                    dataField="provincia_progetto"
                    title="Provincia"
                    style={{paddingBottom: '50px'}}
                    react={{
                        and: ["searchbox", "importofilter", "regionefilter", "provinciafilter", "comunefilter" ]
                    }}
                />
                <MultiList
                    componentId="comunefilter"
                    dataField="comune_progetto"
                    title="Comune"
                    style={{paddingBottom: '50px'}}
                    react={{
                        and: ["searchbox", "importofilter", "regionefilter", "provinciafilter", "comunefilter" ]
                    }}
                />
         
            </div>
            <div style={{ display: "flex", flexDirection: "column", width: "70%" }}>
                <ResultList
                    componentId="results"
                    title="Risultati"
                    dataField="descrizione"
                    from={0}
                    size={8}
                    pagination={true}
                    style={{"marginBottom": "10px"}}

                    react={{
                        and: ["searchbox", "importofilter", "regionefilter", "provinciafilter", "comunefilter" ]
                    }}
                    onData={res => {
                        return {
                        title: res.codice_unico_progetto,
                        description: (
                            <div>
                                <p style={{fontStyle: 'italic'}}>{res.descrizione}</p>
                                <div className="price">${res.importo}</div>
                                <p><b>Regione: </b>{res.regione_progetto}  <b>Provincia: </b>{res.provincia_progetto}  <b>Comune: </b>{res.comune_progetto}</p>
                                <p><b>Forma Giuridica: </b>{res.forma_giuridica}</p>
                                <p><b>Scelta Contraente: </b>{res.scelta_contraente}</p>
                                {res.entita && res.entita.length >0 && res.entita.map((ent) => {
                                    return(
                                            <span className="badge badge-primary ml-1">{ent}</span>
                                            )
                                        }
                                    )
                                }
                            </div>
                        ),
                        };
                    }}
                /> 
            </div>
        </div>
      </ReactiveBase>
    );
  }
}

export default ESSearch;
