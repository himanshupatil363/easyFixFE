import React from 'react'

const serinfo = (data) => {
    return (
        <div>
            {data.name}<br/>
            {data.price}<br/>
            {data.category}<br/>
        </div>
    )
}

export default serinfo
