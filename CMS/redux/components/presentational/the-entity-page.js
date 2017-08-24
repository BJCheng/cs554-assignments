import React from 'react';
import { connect } from 'react-redux';

class TheEntityPage extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>The Entity Page</div>
        );
    }
}

const TheEntityPageContainer = connect()(TheEntityPage);

export default TheEntityPageContainer;