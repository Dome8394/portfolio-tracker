import React from 'react';
import './Form.css';
import Background from '../../assets/samson-ZGjbiukp_-A-unsplash.jpg'
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

            if (input && input.classList.contains("display-none")) {
                input.classList.remove("display-none");
                input.classList.add("display-block");
            } else if (input && input.classList.contains("display-block")) {
                input.classList.remove("display-block");
                input.classList.add("display-none");
            }
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

        this.invalidInputFeedback(fields);


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
                                    <div className="col-6 mt-5">
                                        <div className="row">
                                            <span className="form-header mx-auto mb-3">
                                                Neuer Eintrag
                                        </span>
                                        </div>
                                        <div className="row fa-icon-size icon-container mt-5">
                                            <FontAwesomeIcon icon={faPiggyBank} size="xs"/>
                                        </div>
                                        <div className="row mt-5">
                                            <p className="text-center">Toll! Du hast eine Transaktion getätigt!</p>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-5">
                                        <div className="row">
                                            <div className="form-floating mb-3 col-md-8 mx-auto m-1">
                                                <input type="text" className="form-control" onChange={this.handleChange} />
                                                <label for="stockIsin" className="form-label">ISIN</label>
                                                <div className="display-none" id="isin">
                                                    Bitte gebe eine korrekte ISIN ein!
                                        </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-floating mb-3 col-md-8 mx-auto m-1">
                                                <input type="text" className="form-control" onChange={this.handleChange} />
                                                <label for="stockTitle" className="form-label">Position</label>
                                                <div className="display-none" id="stockTitle" >
                                                    Bitte gib den Namen der erworbenen oder verkauften Papiere ein!
                                        </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-floating mb-3 col-md-8 mx-auto m-1">
                                                <input type="text" className="form-control" onChange={this.handleChange} />
                                                <label for="boughtAt" className="form-label">Gekauft am</label>
                                                <div className="display-none" id="boughtAt" >
                                                    Bitte gebe ein gültiges Datum ein!
                                        </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-floating mb-3 col-md-8 mx-auto m-1">
                                                <input type="text" className="form-control" onChange={this.handleChange} />
                                                <label for="amount" className="form-label">Anzahl</label>
                                                <div className="display-none" id="amount" >
                                                    Die Anzahl der erworbenen oder verkauften Positionen muss mindestens '1' sein!
                                        </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-floating mb-3 col-md-8 mx-auto m-1">
                                                <input type="text" className="form-control" onChange={this.handleChange} />
                                                <label for="price" className="form-label">Ge-/Verkauft zu</label>
                                                <div className="display-none" id="price">
                                                    Bitte gebe den Preis für den Kauf oder Verkauf ein!
                                        </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-floating mb-3 col-md-8 mx-auto m-1">
                                                <input type="text" className="form-control" onChange={this.handleChange} />
                                                <label for="fees" className="form-label">Gebühren</label>
                                                <div className="display-none" id="fee" >
                                                    Falls keine Gebühren anfallen gib bitte '0' als Wert für die Gebühren an!
                                        </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-floating mb-3 col-md-8 mx-auto m-1">
                                                <input type="text" className="form-control" onChange={this.handleChange} />
                                                <label for="totalAmount" className="form-label">Gesamt</label>
                                                <div className="display-none" id="totalAmount" >
                                                    Falls keine Gebühren angefallen sind, gib bitte den Gesamtwert deiner Investition an!
                                        </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center btn-toolbar">
                                            <div className="col-md-4 btn-group">
                                                <button className="btn btn-success" onClick={this.createStock}>Erstellen</button>
                                            </div>
                                            <div className="col-md-4 btn-group">
                                                <button className="btn btn-info" onClick={this.props.hideForm}>Zurück</button>
                                            </div>
                                        </div>
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