import React from 'react';
import './Form.css';
import Background from '../../assets/samson-ZGjbiukp_-A-unsplash.jpg'


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isin: '',
            stockTitle: '',
            boughtAt: null,
            amount: '',
            price: null,
            fee: null,
            totalAmount: null
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.id]: value
        });
    }

    createStock = () => {

        const stock = {
            'isin': this.state.isin,
            'stockTitle': this.state.stockTitle,
            'boughtAt': this.state.boughtAt,
            'amount': this.state.amount,
            'price': this.state.price,
            'fee': this.state.fee,
            'totalAmount': this.state.totalAmount
        }

        console.log("Inside Form component, isin is: ", this.state.isin);

        this.props.createStockEntry(stock);
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
                                        <input type="text" className="form-control" id="isin" onChange={this.handleChange}/>
                                        <label for="stockIsin" className="form-label">ISIN</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 col-md-8 m-5">
                                        <input type="text" className="form-control" id="stockTitle" onChange={this.handleChange}/>
                                        <label for="stockTitle" className="form-label">Position</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" id="boughtAt" onChange={this.handleChange}/>
                                        <label for="boughtAt" className="form-label">Gekauft am</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" id="amount" onChange={this.handleChange}/>
                                        <label for="amount" className="form-label">Anzahl</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" id="price" onChange={this.handleChange}/>
                                        <label for="price" className="form-label">Ge-/Verkauft zu</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" id="fee" onChange={this.handleChange}/>
                                        <label for="fees" className="form-label">Gebühren</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" id="totalAmount" onChange={this.handleChange}/>
                                        <label for="totalAmount" className="form-label">Gesamt</label>
                                    </div>
                                </div>
                                <div className="row justify-content-evenly btn-toolbar">
                                    <div className="col-md-3 btn-group">
                                        <button className="btn btn-primary" onClick={this.createStock}>Erstellen</button>
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