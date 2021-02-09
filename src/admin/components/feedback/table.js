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
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Submitted on
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {
            posts.map(post =>(
              <tr key={post._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.msg}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {`${('0'+new Date(post.submittedat).getDate()).slice(-2)}-${('0'+new Date(post.submittedat).getMonth() + 1).slice(-2)}-${new Date(post.submittedat).getFullYear()} At ${('0'+new Date(post.submittedat).getHours()%12).slice(-2) ? ('0'+new Date(post.submittedat).getHours()%12).slice(-2) : 12}:${('0'+new Date(post.submittedat).getMinutes()).slice(-2)} ${new Date(post.submittedat).getHours() >= 12 ? 'PM' : 'AM'}`}

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

