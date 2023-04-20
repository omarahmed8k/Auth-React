import React, { useState } from 'react'
import './AddList.scss'

export default function AddList() {
    const [description, setDescription] = useState('')
    return (
        <div className='add-page'>
            <h1 className='title'>Add List</h1>
            <form className='col-1-columns'>
                <div className='input-container'>
                    <label>Description</label>
                    <textarea name="description" onChange={(e) => { setDescription(e.target.value) }}></textarea>
                </div>
                <button className="main-btn" onClick={(e) => { e.preventDefault() }}>
                    Add List
                </button>
            </form>
            {description}
        </div>
    )
}
