import React, {Component} from "react";
import {gql, graphql} from "react-apollo";

import logo from "./logo.svg";
import "./App.css";

const UserListQuery = gql`
    query { 
        users { 
            firstName, 
            lastName 
        } 
    }
`;

const UserList = ({data: {loading, users}}) => {
    return (
        <div>{loading ? '' : users.map((user, id) => {
            return <div key={id}>Hello {user.firstName}!</div>
        })}</div>
    )
};

const UserListData = graphql(UserListQuery)(UserList);

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React & Apollo!</h2>
                </div>
                <p className="App-intro">
                </p>
                <UserListData/>

            </div>
        );
    }
}

export default App;
