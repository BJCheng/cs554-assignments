import React from 'react';
import { connect } from 'react-redux';

class AddStructure extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>Add Structure</div>
        );
    }
}

const AddStructureContainer = connect()(AddStructure);

export default AddStructureContainer;