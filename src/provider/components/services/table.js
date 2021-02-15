import React from 'react'
import {NavLink} from 'react-router-dom'
const Table =({posts , loading})=>{
    if(loading){
        return <p>Loading...</p>
    }
    return(
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th>

                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {
                      posts.map(post =>(
                        <tr key={post.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-14 w-14">
                                <img className="h-14 w-14 rounded-full" src={post.img} alt="" />
                              </div>
                              <div className="ml-4 font-semibold">
                                {post.name}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {post.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {post.price}
                          </td>
                          <td>
                            <NavLink to={`/edit/${post._id}`} className="bg-gray-300 py-1 px-5 rounded-md outline-none cursor-pointer">Edit</NavLink>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
}
export default Table;