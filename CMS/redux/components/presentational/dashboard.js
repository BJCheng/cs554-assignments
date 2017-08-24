import { connect } from 'react-redux';
import React from 'react';
import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';

class Dashboard extends React.Component {
    constructor() {
        super();
        this.lists = this.lists.bind(this);
    }

    componentWillMount(){
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
            <Paper style={style} zDepth={2} children={this.lists()} />
        );
    }

    lists() {
        return (
            <List>
                {/* click item to change the state of mainContent */}
                <ListItem primaryText="Structures" />
                <ListItem primaryText="Users" />
            </List>
        );
    }
}

function mapStateToProps(state) {
    return {
        structureList: [{}, {}]
    };
}

var dashboardContainer = connect(mapStateToProps)(Dashboard);

export default dashboardContainer;