import React, {Component} from "react";
import {gql, graphql} from "react-apollo";

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
                <UserListData/>
        );
    }
}

export default App;
