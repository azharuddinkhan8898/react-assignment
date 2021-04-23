import React from "react";

export default function Details({ currentData, setId }) {
    const data = currentData?.data[0];
    return <div className="details">
        <div className="details-wrapper">
            <button className="back-button" onClick={() => setId("")}>back</button>
            {data ? <div className="card" style={{ backgroundImage: `url(${data?.backgroundImage})` }}>
                {data.descriptiveText ? <h3>{data.descriptiveText}</h3> : null}
                {data.webLink ? <a href={data.webLink} target="_blank" rel="noreferrer">Learn more</a> : null}
            </div> : <p>Select a title from left panel.</p>}
        </div>
    </div>;
}
