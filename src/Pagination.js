import React from 'react'

export default function Pagination({gotoNextPage, gotoPrevPage}) {
    return(
        <div>
            {gotoPrevPage && <button onclick={gotoPrevPage}>Previous</button>}
            {gotoNextPage && <button onclick={gotoNextPage}>Next</button>}
        </div>
    )
}