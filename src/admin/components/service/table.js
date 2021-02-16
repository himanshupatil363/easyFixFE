import axios from 'axios'
const Table = ({posts , loading}) => {
  const deleteService = async (id) => {
    try {
      await axios.post(
        `http://localhost:9990/service/deleteservice/${id}`,
      );
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  };
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
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {
            posts.map(post =>(
              <tr key={post._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-14 w-14">
                      <img className="h-12 w-12 rounded-full" src={post.img} alt="" />
                    </div>
                    <div className="ml-4 font-semibold">
                      {post.name}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {post.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button onClick={() => deleteService(post._id)} className="bg-red-600 text-white px-3 py-1 rounded-md">Delete</button>
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

export default Table

