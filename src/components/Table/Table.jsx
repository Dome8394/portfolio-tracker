import React from 'react';
import $ from 'jquery';
import axios from 'axios';

class Table extends React.Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            tableHasContent: false,
            serverNotAvailable: true,
            stocks: []
        }
    }

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


        /*
        * Tabelle kann nicht gefunden werden weil diese erst im render an der richtigen Stelle
        * zurück gegeben wird!
        */
        // var table = $("#myTable td");

        // if (!table) {
        //     console.log("Table wurde nicht gefunden");
        //     return;
        // }

        // if (table.length > 0 && this._isMounted) {
        //     this.setState({
        //         tableHasContent: true
        //     });
        // }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        let tableHasContent = this.state.tableHasContent;
        let serverNotAvailable = this.state.serverNotAvailable;

        /**
         * Center text for the alert boxes
         */
        if (serverNotAvailable) {
            return <div className="row"><div className="col-6 mx-auto mt-5 alert alert-warning"><span>Tut uns Leid! Der Server konnte nicht kontaktiert werden. Bitte versuchen Sie es später noch einmal!</span></div></div>
        }

        if (!tableHasContent) {
            return <div className="row"><div className="col-6 mx-auto mt-5 alert alert-danger"><span>Derzeit wurden keine Käufe oder Verkäufe getätigt.</span></div></div>
        }

        return (
            <div>
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
                                {console.log("Enter body...")}
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
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;