import React from 'react'
import "./Loader.scss"

export default function Loader() {
    return (
        <div className="loader">
            <div className="loader__container">
                <div className="loader__container__circle"></div>
            </div>
        </div>
    )
}
