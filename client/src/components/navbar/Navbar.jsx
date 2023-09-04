import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-neutral-content">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Neighborhood Market</a>
        </div>
        <div className="flex-none">

          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-30 ml-0.1 pl-8"
            />
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-100 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">0 Items</span>
                <span className="text-info">Subtotal: R100</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="data:image/png;base64,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" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>
              <li>
                <a>LogOut</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
