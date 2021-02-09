import React from 'react'

const table = ({posts , loading}) => {
  if(loading){
    return <p>Loading...</p>
}
    return (
<div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Service
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {
            posts.map(post =>(
              <tr key={post.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        {post.custname}
                      </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.service}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {`${('0'+new Date(post.datetime).getDate()).slice(-2)}-${('0'+new Date(post.datetime).getMonth() + 1).slice(-2)}-${new Date(post.datetime).getFullYear()} At ${('0'+new Date(post.datetime).getHours()%12).slice(-2) ? ('0'+new Date(post.datetime).getHours()%12).slice(-2) : 12}:${('0'+new Date(post.datetime).getMinutes()).slice(-2)} ${new Date(post.datetime).getHours() >= 12 ? 'PM' : 'AM'}`}
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
    )
}

export default table

