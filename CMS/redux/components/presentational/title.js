import React from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ContentCreate from 'material-ui/svg-icons/content/create';
import { cyan500, yellow300 } from 'material-ui/styles/colors';

class Title extends React.Component {
    render() {
        const toolbarStyle = {
            backgroundColor: cyan500, 
            height: '128px'
        };
        return (
            <Toolbar style={toolbarStyle}>
                <ToolbarGroup >
                    <ToolbarTitle text="Title" style={{ color: '#000000' }} />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default Title;