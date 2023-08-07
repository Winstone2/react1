import React from 'react';

function ConditionalRendering(props) {
    return (
        <div>
            {props.isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
        </div>
    );
}

export default ConditionalRendering;
