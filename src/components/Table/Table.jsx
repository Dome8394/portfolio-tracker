import React from 'react';


class Table extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto">

                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            First
                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            Test
                            </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Table;