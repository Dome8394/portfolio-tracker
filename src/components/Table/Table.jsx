import React from 'react';
import $ from 'jquery';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tableInfo: false
        }
    }

    componentDidMount() {

        /*
        * Tabelle kann nicht gefunden werden weil diese erst im render an der richtigen Stelle
        * zurück gegeben wird!
        */
        var table = $("#myTable td");
        if (!table) {
            console.log("Table wurde nicht gefunden");
        } 

        if(table.length > 0) {
            this.setState({
                tableInfo: true
            });
        }
    }

    render() {
        const that = this;
        return (
            <div>
                <div className="row">
                    <div className="col-8 mx-auto">
                        {
                            (function () {
                                if (!that.state.tableInfo) {
                                    return <div>Derzeit wurden keine Käufe oder Verkäufe getätigt.</div>
                                } else {
                                    return (
                                        <table class="table" id="myTable">
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
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td colspan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>)

                                }
                            })()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;