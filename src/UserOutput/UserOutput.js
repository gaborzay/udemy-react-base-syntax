import React from 'react';

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <h1 className="UserOutput__heading">{props.username}</h1>
            <p className="UserOutput__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p className="UserOutput__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    );
};

export default UserOutput;