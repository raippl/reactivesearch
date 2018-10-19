import React, { Component } from "react";
import {
  ReactiveBase,
  ResultList,
  DataSearch,
  RangeSlider,
  MultiList,
  SelectedFilters
} from "@appbaseio/reactivesearch";

class ESSearch extends Component {
  render() {
    return (
      <ReactiveBase
        url="http://elk-master-1.teamdigitale.test:9200/"
        app="operetest"
        type="doc"
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "30%",
              paddingRight: "60px"
            }}
          >
            <DataSearch
              title="Cerca Documento"
              placeholder="Cerca"
              style={{ paddingBottom: "50px" }}
              componentId="Ricerca"
              dataField={[
                "descrizione",
                "forma_giuridica",
                "scelta_contraente"
              ]}
              react={{
                and: ["Importo", "Regione", "Provincia", "Comune"]
              }}
              queryFormat="and"
              highlight
            />
            <RangeSlider
              title="Importo"
              style={{ paddingBottom: "50px" }}
              rangeLabels={{
                start: "$0",
                end: "$32000"
              }}
              range={{ start: 0, end: 32000 }}
              showHistogram={true}
              componentId="Importo"
              dataField="importo"
              react={{
                and: ["Ricerca", "Regione", "Provincia", "Comune"]
              }}
              customQuery={(value, props) => ({
                "bool": {
                  "should": [
                    {
                      "bool": {
                        "must_not": [
                          {
                            "exists": {
                              "field": "importo"
                            }
                          }
                        ]
                      }
                    },
                    {
                      "range": {
                        "importo": {
                          "gte": value[0],
                          "lte": value[1],
                          "boost": 2
                        }
                      }
                    }
                  ]
                }
              })}
            />
            <MultiList
              title="Regione"
              style={{ paddingBottom: "50px" }}
              showCheckbox
              componentId="Regione"
              dataField="regione_progetto"
              react={{
                and: ["Ricerca", "Importo", "Regione", "Provincia", "Comune"]
              }}
            />
            <MultiList
              title="Provincia"
              style={{ paddingBottom: "50px" }}
              showCheckbox
              componentId="Provincia"
              dataField="provincia_progetto"
              react={{
                and: ["Ricerca", "Importo", "Regione", "Provincia", "Comune"]
              }}
            />
            <MultiList
              title="Comune"
              style={{ paddingBottom: "50px" }}
              showCheckbox
              componentId="Comune"
              dataField="comune_progetto"
              react={{
                and: ["Ricerca", "Importo", "Regione", "Provincia", "Comune"]
              }}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", width: "70%" }}
          >
            <SelectedFilters />
            <ResultList
              style={{ marginBottom: "10px" }}
              size={8}
              pagination={true}
              componentId="Risultati"
              dataField="descrizione"
              react={{
                and: ["Ricerca", "Importo", "Regione", "Provincia", "Comune"]
              }}
              onData={res => {
                return {
                  title: res.codice_unico_progetto,
                  description: (
                    <div>
                      <p
                        style={{ fontStyle: "italic" }}
                        dangerouslySetInnerHTML={{ __html: res.descrizione }}
                      />
                      <div className="price">${res.importo}</div>
                      <p>
                        <b>Regione: </b>
                        {res.regione_progetto} <b>Provincia: </b>
                        {res.provincia_progetto} <b>Comune: </b>
                        {res.comune_progetto}
                      </p>
                      <p>
                        <b>Forma Giuridica: </b>
                        {res.forma_giuridica}
                      </p>
                      <p>
                        <b>Scelta Contraente: </b>
                        {res.scelta_contraente}
                      </p>
                      {res.entita &&
                        res.entita.length > 0 &&
                        res.entita.map((index, ent) => {
                          return (
                            <span
                              key={index}
                              className="badge badge-primary ml-1"
                            >
                              {ent}
                            </span>
                          );
                        })}
                    </div>
                  )
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
