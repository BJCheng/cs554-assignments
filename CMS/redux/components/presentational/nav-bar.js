import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { cyan300, yellow300 } from 'material-ui/styles/colors';

class NavBar extends React.Component {
    render() {
        const toolbarStyle = {
            backgroundColor: cyan300
        };
        return (
            <Toolbar style={toolbarStyle}>
                <ToolbarGroup >
                    <ToolbarTitle text="Content Management System" style={{ color: '#000000' }} />
                    <FlatButton label="Favortires" icon={<ActionFavorite />} />
                    <FlatButton label="Create" icon={<ContentCreate />} />
                </ToolbarGroup>

                <ToolbarGroup>
                    <ToolbarTitle text="Welcome, Ben" style={{ color: '#000000' }} />
                    <FlatButton label="Login" />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default NavBar;