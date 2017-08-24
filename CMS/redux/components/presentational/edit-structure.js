import React from 'react';
import { connect } from 'react-redux';

class EditStructure extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                Edit Structure
            </div>
        );
    }
}

const EditStructureContainer = connect()(EditStructure);

export default EditStructureContainer;