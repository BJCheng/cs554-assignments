import { connect } from 'react-redux';
import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionList from 'material-ui/svg-icons/action/list';
import ActionUsers from 'material-ui/svg-icons/action/supervisor-account';
import ContentCreate from 'material-ui/svg-icons/content/create';
import Divider from 'material-ui/Divider';
import Contents from '../../../enums/contents';

class Dashboard extends React.Component {
    constructor() {
        super();
        // this.onClick = this.onClick.bind(this);
    }

    componentWillMount() {
        // call api to get structure list
        // then dispatch an action to update props
    }

    render() {
        const style = {
            // height: 100,
            // width: 100,
            margin: 10,
            // textAlign: 'center',
            // display: 'inline-block',
        };

        return (
            <List style={style}>
                {/* click item to change the state of mainContent */}
                <ListItem id='structures' primaryText="Structures" leftIcon={<ActionList />} onClick={this.onClick.bind(this, 'structures')} />
                <ListItem id='users' primaryText="Users" leftIcon={<ActionUsers />} onClick={this.onClick.bind(this, 'users')} />
                <ListItem id='favorites' primaryText="Favorites" leftIcon={<ActionFavorite />} onClick={this.onClick.bind(this, 'favorites')} />
                <Divider style={{ margin: '5 0' }} />
                <ListItem primaryText="Create Strucutre" leftIcon={<ContentCreate />} onClick={this.onClick.bind(this, 'createStructure')} />
            </List>
        );
    }

    onClick(id, e) {
        switch (id) {
            case 'structures':
                this.props.changeContent(Contents.StructureListing);
                break;
            case 'users':
                this.props.changeContent(Contents.ListUsers);
                break;
            case 'favorites':
                this.props.changeContent(Contents.Favorites);
                break;
            case 'createStructure':
                this.props.changeContent(Contents.CreateStructure);
                break;
            default:
                break;
        }
    }
}

function mapStateToProps(state) {
    return {
    };
}

var dashboardContainer = connect(mapStateToProps)(Dashboard);

export default dashboardContainer;