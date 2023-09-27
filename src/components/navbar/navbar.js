import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
 
		<NavMenu>
		<NavLink to='/homepage' activeStyle>
    Home
		</NavLink>
		<NavLink to='/course' activeStyle>
    Course
		</NavLink>
		
		<NavLink to='/register' activeStyle>
			Sign Up/Register
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>Sign In/Login</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
