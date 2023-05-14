import React,{useState,useEffect} from 'react';
import {Button} from './Button';
import './HomeNavBar.css';
import './Header/Header.css';
import {Link} from 'react-router-dom';
import {AiOutlineDingding} from 'react-icons/ai';
import {useSelector,useDispatch} from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { logout } from "../actions/userAction";
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
  } from "react-bootstrap";


function AdminNavBar () {

    const[click,setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const { cart } = useSelector(state => state.cart);

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logout());
      
      };
    
    useEffect(() => {}, [userInfo]);
  

    return(
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
          <Link to='/admin-home' className='homenavbar-logo'>
                  VERVE <AiOutlineDingding/>
          </Link>
          </Navbar.Brand>
  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            
          <Nav className="m-auto">
            <Form inline>
              
            </Form>
          </Nav>
  
            {userInfo ? (
              <>
                <Nav>
                  
  
                  <Nav.Link href="/customer-home">
                         Customer Home     
                </Nav.Link>
  
                  <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/profile" style={{color:'black'}}>
                      <img
                        alt=""
                        src={`${userInfo.pic}`}
                        width="25"
                        height="25"
                        style={{ marginRight: 10 }}
                      />
                      MyProfile
                    </NavDropdown.Item>
  
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logoutHandler} style={{color:'black'}}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </>
            ) : (
              <Nav>
                {" "}
                <Nav.Link>
                <Link to='/customer-home' className='homenav-links'>
                         Customer Home
                      </Link>
                </Nav.Link>
  
                
              </Nav>
              
            
             
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default AdminNavBar;