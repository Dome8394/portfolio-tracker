import React from 'react';


class Form extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <div className="row">
                        <div className="form-floating mb-3 col-md-4 m-5">
                            <input type="text" className="form-control" id="stockIsin" />
                            <label for="stockIsin" className="form-label">ISIN</label>
                        </div>
                        <div className="form-floating mb-3 col-md-4 m-5">
                            <input type="text" className="form-control" id="stockTitle" />
                            <label for="stockTitle" className="form-label">Position</label>
                        </div>
                    </div>
                    <div className="row">

                        <div className="form-floating mb-3 m-5 col-md-4">
                            <input type="text" className="form-control" id="boughtAt" />
                            <label for="boughtAt" className="form-label">Gekauft am</label>
                        </div>
                    </div>
                    <div className="row">

                        <div className="form-floating mb-3 m-5 col-md-4">
                            <input type="text" className="form-control" id="amount" />
                            <label for="amount" className="form-label">Anzahl</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-floating mb-3 m-5 col-md-4">
                            <input type="text" className="form-control" id="price" />
                            <label for="price" className="form-label">Ge-/Verkauft zu</label>
                        </div>

                        <div className="form-floating mb-3 m-5 col-md-4">
                            <input type="text" className="form-control" id="fee" />
                            <label for="fees" className="form-label">Gebühren</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-floating mb-3 m-5 col-md-4">
                            <input type="text" className="form-control" id="totalAmount" />
                            <label for="totalAmount" className="form-label">Gesamt</label>
                        </div>
                    </div>
                    <div className="row mx-5 btn-toolbar">
                        <div className="col-md-3 btn-group">
                            <button className="btn btn-primary" onClick={this.props.createStockEntry}>Erstellen</button>
                        </div>
                        <div className="col-md-3 btn-group">
                            <button className="btn btn-primary" onClick={this.props.hideForm}>Zurück</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;