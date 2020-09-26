import React from 'react';

import './User.css'

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>
                <strong>
                    Author: <i onClick={props.click}>{props.author}</i>
                    <i><small>({props.publisher})</small></i>
                </strong>
                <br /><br />
                {props.content}
            </p>

            <p>
                Ensure that the new input entered by the user overwrites the old username passed to UserOutput
                Add two-way-binding to your input (in UserInput) to also display the starting username
                Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
            </p>
        </div>
    );
}

export default UserOutput;