import React from 'react';
import './Form.css';
import Background from '../../assets/samson-ZGjbiukp_-A-unsplash.jpg'
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
            isin: null,
            stockTitle: null,
            boughtAt: null,
            amount: null,
            price: null,
            fee: null,
            totalAmount: null,
            currency: ''
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
            'totalAmount': this.state.totalAmount,
            'currency': this.state.currency
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
                                            <FontAwesomeIcon icon={faPiggyBank} size="xs" />
                                        </div>
                                        <div className="row mt-5">
                                            <p className="text-center">Toll! Du hast eine Transaktion getätigt!</p>
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
                                                id="standard-basic" 
                                                fullWidth 
                                                label="Datum" 
                                                helperText="Bitte gebe ein gültiges Datum ein"
                                                onChange={this.handleChange} />
                                                {/* <label for="boughtAt" className="form-label">Gekauft am</label> */}
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
                                                    id="standard-select-currency"
                                                    select
                                                    fullWidth
                                                    label="Währung"
                                                    value={this.state.currency}
                                                    onChange={this.handleChange}
                                                    helperText="Bitte wähle deine Währung"
                                                >
                                                    {currencies.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
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