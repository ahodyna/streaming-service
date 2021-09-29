import React from "react";

const Pagination = ({ filmsPerPage, items, paginate }) => {
    const pageNumber = [];
    console.log('totalItems', items)

    for (let i = 1; i <= Math.ceil(items / filmsPerPage); i++) {
        pageNumber.push(i);
    }
    console.log('pageNumber', pageNumber)
    return (
        <ul>
            {
                pageNumber.map(number => (

                    <li key={number}
                         onClick={()=> paginate(number)}
                          >  {number}
                        
                    </li>
                ))
            }
        </ul>

    )
};

export default Pagination;
