import {
  Container,Image,Nav,Navbar,Form,FormControl,NavDropdown,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { IoBagHandle, IoLogOutOutline, IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./Header.css";
import { logoutUser } from "../redux/userSlice";
import { toast } from "react-toastify";

function Header({ setSearch }) {
  const { cartItems } = useSelector((state) => state.productState);
  const { isAuthentication} = useSelector((state) => state.userState);

  

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSearch = (e) => {
    setInput(e.target.value);
    setSearch(e.target.value);
  };

  const logout = () => {
    dispatch(logoutUser());
    toast.success("Logged out");
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="flipkart-header" sticky="top">
      <Container>
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/">
          <div className="logo-image">
            <Image className="w-100" src="/Logo.png" alt="logo" />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* SEARCH BAR */}
          <Form className="mx-lg-4 my-2 my-lg-0 search-form">
            <FormControl
              type="search"
              placeholder="Search for products..."
              className="flipkart-search"
              value={input}
              onChange={handleSearch}
            />
            <IoSearch className="search-icon" />
          </Form>

          {/* NAV LINKS */}
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link as={Link} to="/" className="flip-nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="flip-nav-link">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/shope" className="flip-nav-link">
              Shop
            </Nav.Link>

            {/* USER DROPDOWN */}
            {isAuthentication ? (
              <NavDropdown
                className="flip-nav-link user-icon-dropdown"
                title={<FaRegUserCircle  size={24} className="user-icon" />}
                id="user-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to={"/Profile"}>
                  Profile
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to={"/user-list"}>
                  Users
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/add-product"}>
                  Add Product
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={"/poroduct-list"}>
                  Products
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={"/login"} onClick={logout}>
                  Logout <IoLogOutOutline />
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login" className="flip-login-btn">
                Login
              </Nav.Link>
            )}

            {/* CART ICON */}
            <Nav.Link as={Link} to="/cart-page" className="bag-nav">
              <IoBagHandle size={22} />
              <span className="bag-count">{cartItems.length}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
