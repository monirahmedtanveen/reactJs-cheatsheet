import React from 'react';

import './User.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
            <div className="FormControl">
                <label>Type Author Name: </label>
                <input type='text' onChange={props.changeAuthor} value={props.author} />
            </div>

            <div className="FormControl">
                <label>Type Content: </label>
                <textarea type='text' onChange={props.changeContent} value={props.content} />
            </div>
        </div>
    );
}

export default UserInput;