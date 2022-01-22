import React from 'react';

function Alert(props) {

    const capitalized = (word) =>{
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (

        <div style={{height: '40px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalized(props.alert.type)}</strong>: {props.alert.msg}
        </div>} {/* if props.alert is not null, then do this */}
        </div>
    )
}

export default Alert;
 