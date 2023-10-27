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

	<Nav>
 
		<NavMenu>
		<NavLink to='/homepage' activeStyle>
    Home
		</NavLink>
		<NavLink to='/todolist' activeStyle>
    TodoList
		</NavLink>
		
		
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>Sign In/Login</NavBtnLink>
		</NavBtn>
	</Nav>
	
);
};

export default Navbar;
