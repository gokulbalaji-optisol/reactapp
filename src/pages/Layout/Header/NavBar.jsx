import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <div>
        <div className="nav-bar ">
          <nav className="navbar navbar-expand  navbar-dark bg-dark ">
            <Link to={"/"} className="navbar-brand">
              WebApp
            </Link>
            <div className="navbar-nav ">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
            </div>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/book"} className="nav-link">
                  Books
                </Link>
              </li>
            </div>

            {isLoggedIn ? (
              <div className="navbar-nav ml-auto">
                {user.user.role === "SELLER" && (
                  <li className="nav-item">
                    <Link to={"/seller/dashboard"} className="nav-link">
                      Manage
                    </Link>
                  </li>
                )}
                {user.user.role === "ADMIN" && (
                  <li className="nav-item">
                    <Link to={"/admin/dashboard"} className="nav-link">
                      Dashboard
                    </Link>
                  </li>
                )}
                {user.user.role === "USER" && (
                  <>
                    <li className="nav-item">
                      <Link to={"/orders"} className="nav-link">
                        Orders
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/cart"} className="nav-link">
                        <i className="fas fa-shopping-cart"></i>Cart
                      </Link>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <Link to={"/logout"} className="nav-link">
                    Logout
                  </Link>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/signup"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
