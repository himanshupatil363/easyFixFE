import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div classname="navbar ">
      <div classname="flex-column justify-items-center">
        <ul className="bg-gray-600 p-12 text-xl text-white h-screen">
            <li className="py-4"><NavLink to="/admin/">Dashboard</NavLink></li>
            <li className="py-4"><NavLink to="/admin/login">Login</NavLink></li>
            <li className="py-4"><NavLink to="/admin/users">Users</NavLink></li>
            <li className="py-4"><NavLink to="/admin/provider">Provider</NavLink></li>
            <li className="py-4"><NavLink to="/admin/category">Category</NavLink></li>
            <li className="py-4"><NavLink to="/admin/subcategory">Subcategory</NavLink></li>
            <li className="py-4"><NavLink to="/admin/steps">Steps</NavLink></li>
            <li className="py-4"><NavLink to="/admin/packages">Packages</NavLink></li>
            <li className="py-4"><NavLink to="/admin/offers">Offers</NavLink></li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
