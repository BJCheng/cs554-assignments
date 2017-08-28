import React from 'react';
import Dashboard from './dashboard';
import CONTENTS from '../../../enums/contents';
import StructureListing from './structure-listing';
import CreateStructure from './create-structure';
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
                    <Dashboard changeContent={this.props.changeContent} />
                </div>
                <div id="mainContent" style={{ margin: '0px 40px' }}>
                    {this.renderLayout()}
                </div>
            </div>
        );
    }

    renderLayout() {
        switch (this.props.content) {
            case CONTENTS.StructureListing:
                return <StructureListing />;
            case CONTENTS.CreateStructure:
                return <CreateStructure />;
            case CONTENTS.EditStructure:
                return <EditStructure />;
            case CONTENTS.TheEntityPage:
                return <TheEntityPage />;
            case CONTENTS.Favorites:
                return <div>favorites</div>;
            case CONTENTS.ListUsers:
                return <div>users</div>;
            default:
                return (<div>default</div>);
        }
    }
}

export default Content;