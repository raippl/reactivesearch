import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
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
        )
    }
}

export default Footer