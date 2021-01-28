import React from 'react'
function error(props) {
    return (
        <div className=" bg-red-200 p-1 rounded-lg">
            <span>{props.message}</span>
            <button className="ml-4 mr-2 text-red-500" onClick={props.clearError}>X</button>
        </div>
    )
}
export default error;
