import React from 'react'
import TableHead from './TableHead/TableHead'
import TableBody from './TableBody/TableBody'
import "./DataTable.scss"

export default function DataTable({ tableBody = [{ "": "" }], tableHead = [""] }) {
    return (
        <div className="table-responsive">
            <table>
                <TableHead tableHead={tableHead} />
                <TableBody tableBody={tableBody} />
            </table>
        </div>
    )
}