import React from 'react';
import Dashboard from './dashboard';
import CONTENTS from '../../../enums/contents';
import StructureListing from './structure-listing';
import AddStructure from './add-structure';
import EditStructure from './edit-structure';
import TheEntityPage from './the-entity-page';

class Content extends React.Component {
    constructor() {
        super();
        this.renderLayout = this.renderLayout.bind(this);
    }

    render() {
        return (
            <div id="content">

                <div id="dashboard">
                    <Dashboard />
                </div>

                <div id="mainContent">
                    {this.renderLayout()}
                </div>

            </div>
        );
    }

    renderLayout() {
        switch (this.props.content) {
            case CONTENTS.StructureListing:
                return <StructureListing />;
            case CONTENTS.AddStructure:
                return <AddStructure />;
            case CONTENTS.EditStructure:
                return <EditStructure />;
            case CONTENTS.TheEntityPage:
                return <TheEntityPage />;
            default:
                return (<div>default</div>);
        }

    }
}

export default Content;