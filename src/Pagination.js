import React from 'react'
import './styles/Pagination.css'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
    return (
        <div className="pagination-frame button">
            
            {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button>}
            {gotoNextPage &&<button onClick={gotoNextPage}>Next</button>}
        </div>
    )
}
