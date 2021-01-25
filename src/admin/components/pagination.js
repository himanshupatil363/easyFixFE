import React from 'react'

const Pagination = ({postsPerPage, totalPosts, indexOfLastPost, indexOfFirstPost ,paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);   
    }
    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <a href="!#" className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                Previous
              </a>
              <a href="!#" className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500">
                Next
              </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing
                  <span className="font-medium"> {indexOfFirstPost+1} </span>
                  to
                  <span className="font-medium"> {indexOfLastPost} </span>
                  of
                  <span className="font-medium"> {totalPosts} </span>
                  results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex shadow-sm -space-x-px cursor-pointer" aria-label="Pagination">
                  {pageNumbers.map(number =>(
                    <a onClick={() => paginate(number)} key={number} className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                      {number}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
        </div>
    )
}
export default Pagination;
