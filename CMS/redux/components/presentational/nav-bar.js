import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { blue700, yellow300 } from 'material-ui/styles/colors';

class NavBar extends React.Component {
    render() {
        const toolbarStyle = {
            backgroundColor: blue700
        };
        return (
            <Toolbar style={toolbarStyle}>
                <ToolbarGroup >
                    <ToolbarTitle text="Content Management System" style={{ color: '#fafafa' }} />
                </ToolbarGroup>

                <ToolbarGroup>
                    <ToolbarTitle text="Welcome, Ben" style={{ color: '#fafafa' }} />
                    <FlatButton label="Login" labelStyle={{ color: '#fafafa' }} />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default NavBar;