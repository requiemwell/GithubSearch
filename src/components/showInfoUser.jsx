import React from "react";

const ShowInfo = (props) => {
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={props.user.avatar_url}
                        className="img-fluid rounded-start"
                        alt="..."
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.user.name}</h5>
                        <ul>
                            <li>Login: {props.user.login}</li>
                            <li>
                                <a href={props.user.html_url}>
                                    Url: {props.user.html_url}
                                </a>
                            </li>
                            <li>Localização: {props.user.location}</li>
                            <li>Total de seguidores: {props.user.followers}</li>
                        </ul>
                        <p className="card-text">
                            <small className="text-muted">
                                Last updated 3 mins ago
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowInfo;
