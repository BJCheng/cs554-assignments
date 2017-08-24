import { connect } from 'react-redux';
import NavBar from './presentational/nav-bar';

const NavBarContainer = connect()(NavBar);

export default NavBarContainer;