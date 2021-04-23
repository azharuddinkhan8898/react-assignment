import React from "react";

export default function ItemsList({ data, id, setId }) {
    return (
        <div className="item-list">
            <div className="item-list-wrapper">
                <h2>Titles</h2>
                {data.length ? <ul>
                    {data.map(el => (
                        el.title ? <li key={el.title}>
                            <a href="#!" onClick={() => setId(el.title)} className={`${el.title === id ? 'active' : ''}`}>{el.title}</a>
                        </li> : null
                    ))}
                </ul>
                    :
                    <div className="no-list-item">No list item</div>
                }
            </div>
        </div>
    );
}
