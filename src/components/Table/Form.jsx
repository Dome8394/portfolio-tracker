import React from 'react';
import './Form.css';
import "react-datepicker/dist/react-datepicker.css";

import DatePicker from "react-datepicker";

import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const currencies = [
    {
        value: "Eur",
        label: '€'
    },
    {
        value: "USD",
        label: "$"
    }
];
class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isin: 0,
            stockTitle: '',
            boughtAt: new Date(),
            amount: 0,
            price: 0,
            fee: 0,
            totalAmount: 0,
            currency: currencies[0].value,
            startDate: new Date()
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
        this.formValidation = this.formValidation.bind(this);
        this.createStock = this.createStock.bind(this);
        this.invalidInputFeedback = this.invalidInputFeedback.bind(this);
    }

    handleChange = (e) => {
        const value = e.target.value;

        console.log(e.target.id);
        console.log(e.target.value);
        
        this.setState({
            ...this.state,
            [e.target.id]: value
        });
    }

    handleDateChange = (date) => {
        this.setState({
            boughtAt: date
        });
    }

    handleChangeCurrency = (e) => {
        console.log(e.target.value)
        this.setState({
            currency: e.target.value
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
    formValidation = (stockData) => {

        let status = true;
        let fields = [];
        let msg = {
            'status': status,
            'content': `Alle Werte wurden korrekt ausgefüllt`
        }

        Object.keys(stockData).forEach(key => {
            if (stockData[key] === null) {
                status = false;
                msg["content"] = `Die folgenden Werte müssen ausgefüllt werden ${fields}`;
                fields.push(key);
            }
        });
        
        this.invalidInputFeedback(fields);
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
            'totalAmount': this.state.totalAmount,
            'currency': this.state.currency
        }

        console.log(this.formValidation(stock).status);

        if (this.formValidation(stock).status) {
            // console.log(stock);
            this.props.createStockEntry(stock);
        }
    }

    render() {
        return (
            <div>
                <div className="bg-container" >
                    <div className="form-wrapper">
                        <div className="wrap-form-content">
                            <form className="needs-validation">
                                <div className="row">
                                    <div className="col-6 mt-5">
                                        <div className="row">
                                            <span className="form-header mb-3 mx-4">
                                                Neuer <br />
                                                Eintrag
                                        </span>
                                        </div>
                                        <div className="row fa-icon-size icon-container mt-5 ">
                                            <FontAwesomeIcon icon={faPiggyBank} size="xs" />
                                        </div>
                                        <div className="row mt-5">
                                            <p className="text-center">Bitte fülle alle Felder auf der rechten Seite aus.</p>
                                        </div>
                                    </div>
                                    <div className="col-6 mt-5">
                                        <div className="row">
                                            <div className="form-floating mb-3 col-md-8 m-1">
                                                {/* <input type="text" className="form-control" onChange={this.handleChange} /> */}
                                                <TextField
                                                    id="standard-basic"
                                                    fullWidth
                                                    label="ISIN"
                                                    helperText="Bitte gebe eine gültige ISIN Nummer ein"
                                                    onChange={this.handleChange} />
                                                {/* <label for="stockIsin" className="form-label">ISIN</label> */}
                                                <div className="display-none" id="isin">
                                                    Bitte gebe eine korrekte ISIN ein!
                                        </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-floating mb-3 col-md-8 m-1">
                                                {/* <input type="text" className="form-control" onChange={this.handleChange} /> */}
                                                <TextField id="standard-basic"
                                                    fullWidth
                                                    label="Name"
                                                    helperText="Bitte gebe den Namen des Wertpapiers ein"
                                                    onChange={this.handleChange} />
                                                {/* <label for="stockTitle" className="form-label">Position</label> */}
                                                <p className="display-none" id="stockTitle" >
                                                    Bitte gib den Namen der erworbenen oder verkauften Papiere ein!
                                        </p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-floating mb-3 col-md-8 m-1">
                                                {/* <input type="text" className="form-control" onChange={this.handleChange} /> */}
                                                <TextField
                                                    id="datePicker"
                                                    type="date"
                                                    fullWidth
                                                    defaultValue="2017-05-24"
                                                    label="Datum"
                                                    helperText="Bitte gebe ein gültiges Datum ein"
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    onChange={this.handleDateChange}
                                                />
                        
                                                <div className="display-none" id="boughtAt" >
                                                    Bitte gebe ein gültiges Datum ein!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-floating mb-3 col-md-8 m-1">
                                                {/* <input type="text" className="form-control" onChange={this.handleChange} /> */}
                                                <TextField id="standard-basic"
                                                    fullWidth
                                                    label="Anzahl"
                                                    helperText="Bitte gebe eine gültige Anzahl an"
                                                    onChange={this.handleChange} />
                                                {/* <label for="amount" className="form-label">Anzahl</label> */}
                                                <div className="display-none" id="amount" >
                                                    Die Anzahl der erworbenen oder verkauften Positionen muss mindestens '1' sein!
                                        </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="mb-3 col-md-3">
                                                <TextField
                                                    id="select-currency"
                                                    name="currency"
                                                    select
                                                    fullWidth
                                                    label="Währung"
                                                    value={this.state.currency}
                                                    onChange={this.handleChangeCurrency}
                                                    helperText="Bitte wähle deine Währung"
                                                >
                                                    {currencies.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                                <div className="display-none" id="currency" >
                                                    Bitte wähle eine Währung aus!
                                                </div>
                                            </div>
                                            <div className="mb-3 col-md-5">
                                                {/* <input type="text" className="form-control" onChange={this.handleChange} /> */}
                                                <TextField
                                                    id="standard-basic"
                                                    fullWidth
                                                    label="Aktueller Kurs"
                                                    helperText="Bitte gebe den aktuellen Kurs an"
                                                    onChange={this.handleChange} />
                                                {/* <label for="price" className="form-label">Ge-/Verkauft zu</label> */}
                                                <div className="display-none" id="price">
                                                    Bitte gebe den Preis für den Kauf oder Verkauf ein!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-floating mb-3 col-md-8 m-1">
                                                {/* <input type="text" className="form-control" onChange={this.handleChange} /> */}
                                                <TextField
                                                    id="standard-basic"
                                                    fullWidth
                                                    helperText="Bitte gebe die Gebühren an"
                                                    label="Gebühren"
                                                    onChange={this.handleChange} />
                                                {/* <label for="fees" className="form-label">Gebühren</label> */}
                                                <div className="display-none" id="fee" >
                                                    Falls keine Gebühren anfallen gib bitte '0' als Wert für die Gebühren an!
                                        </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="form-floating mb-5 col-md-8 m-1">
                                                {/* <input type="text" className="form-control" onChange={this.handleChange} /> */}
                                                <TextField id="standard-basic"
                                                    fullWidth
                                                    label="Gesamt"
                                                    helperText="Bitte gebe den Gesamtwert an"
                                                    onChange={this.handleChange} />
                                                {/* <label for="totalAmount" className="form-label">Gesamt</label> */}
                                                <div className="display-none" id="totalAmount" >
                                                    Falls keine Gebühren angefallen sind, gib bitte den Gesamtwert deiner Investition an!
                                        </div>
                                            </div>
                                        </div>
                                        <div className="row justify-content-start btn-toolbar">
                                            <div className="col-md-4 btn-group">
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="medium"
                                                    endIcon={<SendIcon />}
                                                    onClick={this.createStock}>Erstellen</Button>
                                            </div>
                                            <div className="col-md-4 btn-group">
                                                <Button
                                                    variant="contained"
                                                    size="medium"
                                                    color="primary"
                                                    endIcon={<ArrowBackIosIcon />}
                                                    onClick={this.props.hideForm}>Zurück</Button>
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