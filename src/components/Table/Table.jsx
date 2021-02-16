import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Form from './Form';

class Table extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            tableHasContent: false,
            serverNotAvailable: true,
            displayForm: false,
            stocks: []
        }
        this.displayCreateStockEntry = this.displayCreateStockEntry.bind(this);
        this.hideCreateStockEntry = this.hideCreateStockEntry.bind(this);
        // this.doSomething = this.doSomething.bind(this);
    }

    displayCreateStockEntry = () => {
        console.log("State of display: " + this.state.displayForm);
        this.setState({
            displayForm: true
        });
    };

    hideCreateStockEntry = () => {
        this.setState({
            displayForm: false
        });
    };

    componentDidMount() {
        this._isMounted = true;

        /**
         * Retrieve all stocks of a portfolio
         */
        axios.get('http://localhost:3000/myStocks')
            .then((res) => {

                if (this._isMounted && res.data) {
                    const myStocks = res.data;
                    this.setState({
                        stocks: myStocks,
                        tableHasContent: true,
                        serverNotAvailable: false
                    });
                } else {
                    return;
                }
            })
            .catch(function (error) {
                console.log(error);
                return;
            });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        function doSomething() {
            console.log("This works.")
        };

        let createStockEntryForm = null;
        let tableHasContent = this.state.tableHasContent;
        let serverNotAvailable = this.state.serverNotAvailable;


        if (this.state.displayForm) {
            createStockEntryForm =
                <Form displayForm={this.state.displayForm} hideForm={this.hideCreateStockEntry} />
        }

        if (serverNotAvailable) {
            return (
                <div className="container">
                    <div className="row g-1">
                        <div className="col-sm-6 col-md-8 mx-auto mt-5 alert alert-warning">
                            <span>Tut uns Leid! Der Server konnte nicht kontaktiert werden. Bitte versuchen Sie es später noch einmal!</span>
                        </div>
                    </div>
                </div>
            )
        }

        if (!tableHasContent) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-md-3 mx-auto mt-5">
                            <div className="alert alert-danger">
                                Derzeit wurden keine Käufe oder Verkäufe getätigt.
                            </div>
                        </div>
                    </div> {/* closing first row */}
                    <div className="row gy-5">
                        <div className="col-sm-3 col-md-3 mx-auto mt-5">
                            <button onClick={this.displayCreateStockEntry} className="btn btn-primary btn-block">
                                {/* <FontAwesomeIcon icon={faPlus} />  */}
                                Neuen Eintrag erstellen
                            </button>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-8 mx-auto mt-5">
                            <table className="table" id="myTable">
                                <thead>
                                    <tr>
                                        <th scope="col">ISIN</th>
                                        <th scope="col">Position</th>
                                        <th scope="col">Gekauft am</th>
                                        <th scope="col">Anzahl</th>
                                        <th scope="col">Gekauft zu</th>
                                        <th scope="col">Gebühr</th>
                                        <th scope="col">Gesamt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.stocks.map((stock, key) => {

                                            return (
                                                <tr key={key}>
                                                    <td>{stock.isin}</td>
                                                    <td>{stock.title}</td>
                                                    <td>{stock.boughtAt}</td>
                                                    <td>{stock.amount}</td>
                                                    <td>{stock.cost}</td>
                                                    <td>{stock.fee}</td>
                                                    <td>{stock.totalAmount}</td>
                                                </tr>
                                            )
                                        }
                                        )
                                    }
                                </tbody>
                            </table> {/* Closing table tag */}
                        </div>
                    </div> { /* closing row tag */}
                    {/* <div className="row gy-5">
                        <div className="col-sm-3 col-md-3 mx-auto mt-5">
                            <button onClick={this.displayCreateStockEntry} className="btn btn-primary">
                                    Neuen Eintrag erstellen
                            </button>
                            <div className="row">
                                {console.log(this.state.displayForm)}
                            </div>
                        </div>
                    </div> */}
                </div>

                <button id="myTestBtn" onClick={console.log("Test")}>
                    Test
                </button>

                { /* Closing final div */}
            </div>
        );
    }
}

export default Table;