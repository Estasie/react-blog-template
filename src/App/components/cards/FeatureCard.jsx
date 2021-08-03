import React from 'react'

export default function FeatureCard({el}) {
    return (
        <div className="feature-card">
            <div className="feature-img-container">
                <img src={el.picture} alt={el.ID} />
            </div>
            <div className="feature-text-container">
                <p className="feature-topic">{el.topic}</p>
                <h4 className="feature-title">{el.name}</h4>
                <h5 className="post-date">{el.date_create.substr(0, 10)}</h5>
            </div>
        </div>
    )
}
