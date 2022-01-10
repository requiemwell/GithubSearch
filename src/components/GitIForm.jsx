import React from "react";
import GitHubUser from "../services/GitSearchService";
import ShowInfo from "./showInfoUser";

class GitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            dataUser: [],
        };
        
    }

    inputHandler = (e) => {
        e.preventDefault();
        this.setState({ username: e.target.value });
    };

    submitHandler = (e) => {
        e.preventDefault();
        GitHubUser.getUsername(this.state.username).then((response) => {
            this.setState({ dataUser: [response.data] });
            console.log(this.state.dataUser);
        }).catch(error => alert(error));
    };
    render() {
        return (
            <div className="mt-3">
                <h2>Search GitHub Users</h2>
                <form onSubmit={this.submitHandler}>
                    <div className="mb-3">
                        <input
                            type="text"
                            onChange={this.inputHandler}
                            className="form-control"
                            placeholder="Username"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
                <div className="mt-3">
                    {this.state.dataUser.length > 0 ? (
                        <ShowInfo user={this.state.dataUser[0]} />
                    ) : null}
                </div>
            </div>
        );
    }
}
export default GitForm;
