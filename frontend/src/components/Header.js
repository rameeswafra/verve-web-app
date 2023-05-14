import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";


function Header() {

    const { cart } = useSelector(state => state.cart);

    return (
        <nav className=" navbar-expand-lg navbar-light" style={{float: 'right'}}>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                    <Fragment>
                        <li className='nav-item mr-2' style={{position: 'relative'}}>
                            <Link to='/cart' className='nav-link'>
                                <FaShoppingCart/> Cart <span className='' style={{position: 'absolute', top: '0px'}}>{cart.length}</span>
                            </Link>
                        </li>
                    </Fragment>
                </ul>
            </div>
        </nav>
    )
}

export default Header;