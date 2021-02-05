import React from 'react';
import NavBar from './components/Navbar/NavBar';
import Table from './components/Table/Table';
import './App.css';


class App extends React.Component {

    render() {
        return (
            <div>
            <NavBar />
            <Table />
            </div>
        );
    }
}

export default App;