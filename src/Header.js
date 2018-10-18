import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app-header">
                <div className="main-header container">
                    <div className="h-100 bg-primary row">
                        <div className="float-left">
                            <a href="#/"><img src="./img/DAF_pittogramma_FU.svg" alt="" className="logo-pub mr-4" /></a>
                        </div>
                        <div className="col-md col-lg col-sm col-xs col h-auto">
                            <div className="row mx-0">
                                <a className="text-white" href="#/">
                                    <h2 className="mr-4 mb-0"><b>DAF Italia</b></h2></a>
                                <span className="badge badge-pill mt-2 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', 'height': 'max-content' }}>versione alpha 1.0</span>
                            </div>
                            <p className="d-sm-down-none">Data &amp; Analytics Framework<b> Italia</b></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header