import React, { useState } from 'react'
import DataTable from '../../components/DataTable/DataTable.jsx'
import Edit from '../../assets/svgs/edit.svg'
import Delete from '../../assets/svgs/delete.svg'
import './Lists.scss'

export default function Lists() {
    const [lists, setLists] = useState([
        {
            description: 'List 1',
            createdAt: '2021-01-01'
        },
        {
            description: 'List 2',
            createdAt: '2021-01-02'
        },
    ])

    lists.forEach((list) => {
        list.actions = (
            <div className='actions'>
                <button className='edit-btn icons'>
                    <img src={Edit} alt="edit" />
                </button>
                <button className='delete-btn icons'>
                    <img src={Delete} alt="delete" />
                </button>
            </div>
        )
    })

    return (
        <div className='list-page'>
            <h1 className='title'>Todo Lists</h1>
            <div className='lists-container'>
                <DataTable tableHead={['Description', 'Created At', 'Actions']} tableBody={lists} />
            </div>
        </div>
    )
}
