import React from 'react';
import './Form.css';
import Background from '../../assets/samson-ZGjbiukp_-A-unsplash.jpg'


class Form extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="bg-container" style={{ backgroundImage: `url(${Background})` }} >
                    <div className="form-wrapper">
                        <div className="wrap-form-content">

                            <form>
                                <div className="row">
                                    <div className="form-floating mb-3 col-md-8 m-5">
                                        <input type="text" className="form-control" id="stockIsin" />
                                        <label for="stockIsin" className="form-label">ISIN</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 col-md-8 m-5">
                                        <input type="text" className="form-control" id="stockTitle" />
                                        <label for="stockTitle" className="form-label">Position</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" id="boughtAt" />
                                        <label for="boughtAt" className="form-label">Gekauft am</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" id="amount" />
                                        <label for="amount" className="form-label">Anzahl</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" id="price" />
                                        <label for="price" className="form-label">Ge-/Verkauft zu</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" id="fee" />
                                        <label for="fees" className="form-label">Gebühren</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" id="totalAmount" />
                                        <label for="totalAmount" className="form-label">Gesamt</label>
                                    </div>
                                </div>
                                <div className="row justify-content-evenly btn-toolbar">
                                    <div className="col-md-3 btn-group">
                                        <button className="btn btn-primary" onClick={this.props.createStockEntry}>Erstellen</button>
                                    </div>
                                    <div className="col-md-3 btn-group">
                                        <button className="btn btn-primary" onClick={this.props.hideForm}>Zurück</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;