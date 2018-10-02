import React from 'react';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <label htmlFor="input" className="UserInput__label">Write name here:</label>
            <input
                id="input"
                className="UserInput__input"
                type="text"
                onChange={props.onChange}
                value={props.username}
                required
            />
        </div>
    );
};

export default UserInput;