import React from 'react';
import './Form.css';
import Background from '../../assets/samson-ZGjbiukp_-A-unsplash.jpg'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';


class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isin: null,
            stockTitle: null,
            boughtAt: null,
            amount: null,
            price: null,
            fee: null,
            totalAmount: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.formValidation = this.formValidation.bind(this);
        this.createStock = this.createStock.bind(this);
        this.invalidInputFeedback = this.invalidInputFeedback.bind(this);
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({
            ...this.state,
            [e.target.id]: value
        });
    }

    invalidInputFeedback = inputField => {
        inputField.forEach(element => {
            let input = document.getElementById(element);
        });
    }

    /**
     * Checks if all the values of the form have been provided
     * with a value. 
     * 
     * @param {*} formData 
     */
    formValidation = formData => {

        let status = false;
        let fields = [];
        let msg = {
            'status': status,
            'content': `Alle Werte wurden korrekt ausgefüllt`
        }

        Object.keys(formData).forEach(key => {
            if (formData[key] == null) {
                status = true;
                msg["content"] = `Die folgenden Werte müssen ausgefüllt werden ${fields}`;
                fields.push(key);
            }
        });

        // this.invalidInputFeedback(fields);

        console.log(`${msg["content"]}`);
        return msg;

    }

    /**
     * Creates a new stock entry based on the data that 
     * has been provided in the form. 
     * 
     * @param {} event 
     */
    createStock = (event) => {

        event.preventDefault();

        const stock = {
            'isin': this.state.isin,
            'stockTitle': this.state.stockTitle,
            'boughtAt': this.state.boughtAt,
            'amount': this.state.amount,
            'price': this.state.price,
            'fee': this.state.fee,
            'totalAmount': this.state.totalAmount
        }

        if (this.formValidation(stock)[0]) {
            console.log(`${msg["content"]}`);
            this.props.createStockEntry(stock);
        }
    }

    render() {
        return (
            <div>
                <div className="bg-container" style={{ backgroundImage: `url(${Background})` }} >
                    <div className="form-wrapper">
                        <div className="wrap-form-content">
                            <form className="needs-validation">
                                <div className="row">
                                    <div className="form-floating mb-3 col-md-8 m-5">
                                        <input type="text" className="form-control" onChange={this.handleChange} />
                                        <label for="stockIsin" className="form-label">ISIN</label>
                                        <div className={this.state.isin == null ? 'display-block' : 'display-none'} id="isin">
                                            Bitte gebe eine korrekte ISIN ein!
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 col-md-8 m-5">
                                        <input type="text" className="form-control" onChange={this.handleChange} />
                                        <label for="stockTitle" className="form-label">Position</label>
                                        <div className="invalid-feedback" id="stockTitle" >
                                            Bitte gib den Namen der erworbenen oder verkauften Papiere ein!
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" onChange={this.handleChange} />
                                        <label for="boughtAt" className="form-label">Gekauft am</label>
                                        <div className="invalid-feedback" id="boughtAt" >
                                            Bitte gebe ein gültiges Datum ein!
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" onChange={this.handleChange} />
                                        <label for="amount" className="form-label">Anzahl</label>
                                        <div className="invalid-feedback" id="amount" >
                                            Die Anzahl der erworbenen oder verkauften Positionen muss mindestens '1' sein!
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" onChange={this.handleChange} />
                                        <label for="price" className="form-label">Ge-/Verkauft zu</label>
                                        <div className="invalid-feedback" id="price">
                                            Bitte gebe den Preis für den Kauf oder Verkauf ein!
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" onChange={this.handleChange} />
                                        <label for="fees" className="form-label">Gebühren</label>
                                        <div className="invalid-feedback" id="fee" >
                                            Falls keine Gebühren anfallen gib bitte '0' als Wert für die Gebühren an!
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-floating mb-3 m-5 col-md-8">
                                        <input type="text" className="form-control" onChange={this.handleChange} />
                                        <label for="totalAmount" className="form-label">Gesamt</label>
                                        <div className="invalid-feedback" id="totalAmount" >
                                            Falls keine Gebühren angefallen sind, gib bitte den Gesamtwert deiner Investition an!
                                        </div>
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