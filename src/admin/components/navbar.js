import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="fex flex-column">
        <ul className="bg-gray-600 p-12 text-xl text-white h-screen fixed w-60">
            <li className="py-4"><NavLink to="/">Dashboard</NavLink></li>
            <li className="py-4"><NavLink to="/users">Users</NavLink></li>
            <li className="py-4"><NavLink to="/provider">Provider</NavLink></li>
            <li className="py-4"><NavLink to="/category">Category</NavLink></li>
            <li className="py-4"><NavLink to="/services">Services</NavLink></li>
            <li className="py-4"><NavLink to="/orders">Orders</NavLink></li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
