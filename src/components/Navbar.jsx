import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div>
      <div className="navbar bg-base-100 lg:px-0 my-4 max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/">Bosh Sahifa</Link>
              </li>
              <li>
                <Link to="/stories">Asarlar</Link>
              </li>
              <li>
                <Link to="/quizes">Quizlar</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn  text-xl font-bold">Gofurov <span className="font-semibold">School</span></Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 text-sm font-semibold">
            <li>
              <Link to="/">Bosh Sahifa</Link>
            </li>
            <li>
              <Link to="/stories">Asarlar</Link>
            </li>
            <li>
              <Link to="/quizes">Quizlar</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary text-white">Kirish</button></div>
      </div>
      <div className="w-full bg-black h-[1px] opacity-10"></div>
    </div>
  );
}

export default Navbar;
