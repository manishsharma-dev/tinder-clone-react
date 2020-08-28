import React from 'react';
import '../Styles/Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
const Header = () => {
    return (
        <header className='App-Header'>
            <IconButton>
            <PersonIcon className="Header-Icon" fontSize="large" />
            </IconButton>
            <img className="Header-Logo" 
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder-logo" />
            <IconButton>
            <ForumIcon className="Header-Icon" fontSize="large" />
        </IconButton>
            </header >
    )
}

export default Header;