import React from "react";

const Pagination = ({ filmsPerPage, items, paginate }) => {
    const pageNumber = [];
    console.log('totalItems', items)

    for (let i = 1; i <= Math.ceil(items / filmsPerPage); i++) {
        pageNumber.push(i);
    }
    console.log('pageNumber', pageNumber)
    return (
        <div className='pagination-wrapper'>
            <ul className='pagination-ul' >
                {
                    pageNumber.map(number => (

                        <li className='pagination-item' key={number}
                            onClick={() => paginate(number)}
                        >  {number}

                        </li>
                    ))
                }
            </ul>
        </div>

    )
};

export default Pagination;
