import React from "react";

export function Testimonial ({name, location, work, testimonial, userName}) {
    return (
        <article className="card">
            <div className="info-container">
                <img src={`https://unavatar.io/${userName}`} alt="Developer"/>
                <div className="text">
                    <div className="main-text">
                    <h2><span>{name}</span> en {location} </h2>
                    <h3>Ing. de software en {work}</h3>
                    </div>
                    <p>{testimonial}</p>
                </div>
            </div>
        </article>
    )
}