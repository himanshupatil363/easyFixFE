import React from 'react'

const table = ({posts , loading}) => {
  if(loading){
    return <p>Loading...</p>
}
    return (
<div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                City
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total Orders
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Joined on
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          {
            posts.map(post =>(
              <tr key={post.id}>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60" alt="" />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {post.name}
                      </div>
                      <div class="text-sm text-gray-500">
                        {post.emailId}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-gray-900">
                  {post.city}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {post.status.toUpperCase()}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ..
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {`${('0'+new Date(post.joinedAt).getDate()).slice(-2)}-${('0'+new Date(post.joinedAt).getMonth() + 1).slice(-2)}-${new Date(post.joinedAt).getFullYear()} At ${('0'+new Date(post.joinedAt).getHours()%12).slice(-2) ? ('0'+new Date(post.joinedAt).getHours()%12).slice(-2) : 12}:${('0'+new Date(post.joinedAt).getMinutes()).slice(-2)} ${new Date(post.joinedAt).getHours() >= 12 ? 'PM' : 'AM'}`}
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

