import React, { Component } from "react";
import ESSearch from './ESSearch'


class App extends Component {
  render() {
    return (
        <div className="app">
            <div className="app-header">
                <div className="upper-header">
                    <div className="container">
                        <h6 className="mx-5 px-1 mb-0">Agid + Team Digitale</h6>
                    </div>
                </div>
                <div className="main-header container">
                    <div className="h-100 bg-primary row">
                        <div className="float-left">
                            <a href="#/"><img src="./img/DAF_pittogramma_FU.svg" alt="" className="logo-pub mr-4"/></a>
                        </div>
                        <div className="col-md col-lg col-sm col-xs col h-auto">
                            <div className="row mx-0">
                                <a className="text-white" href="#/">
                                <h2 className="mr-4 mb-0"><b>Italia</b></h2></a>
                                <span className="badge badge-pill mt-2 h-100" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)', 'height': 'max-content'}}>versione alpha 1.0</span>
                            </div>
                            <p className="d-sm-down-none">Data &amp; Analytics Framework<b> Italia</b></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="app-body app-body pub">
                <div className="container">
                    <ESSearch />
                </div>
            </div>
            <div className="section bg-footer clearfix">
                <footer className="container py-5">
                    <div className="row mb-5">
                    <div className="col-12 row">
                        <img src="https://teamdigitale.governo.it/images/loghi/governo.svg" alt="Logo Governo" title="Logo Governo" height='80px' className="mb-3 mr-3"/>
                        <img src="https://teamdigitale.governo.it/images/loghi/demo.png" alt="Logo Team" title="Logo Team" height='80px' className="mb-3 mr-3" />
                        <h4 className="text-white pl-3" style={{borderLeft: '1px solid white'}}>
                            TEAM PER LA
                            <br/>
                            TRASFORMAZIONE
                            <br/>
                            DIGITALE
                        </h4>
                        </div>
                    </div>
                </footer>
            </div>      
        </div>
    );
  }
}

export default App;
