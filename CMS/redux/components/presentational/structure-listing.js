import React from 'react';
import { connect } from 'react-redux';
import Structure from './structure';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import Action from '../../action';
import CircularProgress from 'material-ui/CircularProgress';

class StructureListing extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        // call api to get the entry list of this structure by lug
        this.props.dispatch(Action.getStructures());
    }

    render() {
        let structureList = this.props.structures.map((structure) => {
            return <Structure key={structure.name + structure.slug} structure={structure} />;
        });

        return (
            <div>
                {/* <CircularProgress style={{ display: 'none' }} /> */}
                <Table style={{ margin: '20px auto 0' }}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Slug</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Page Size</TableHeaderColumn>
                            <TableHeaderColumn>Fields Number</TableHeaderColumn>
                            <TableHeaderColumn></TableHeaderColumn>
                            <TableHeaderColumn></TableHeaderColumn>
                            <TableHeaderColumn></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {structureList}
                    </TableBody>
                </Table>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        structures: state.structures
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // updateEntryList: function(entryList){
        //     dispatch(Actions.updateEntryList(entryList));
        // }
    }
}

const StructureListingContainer = connect(mapStateToProps)(StructureListing);

export default StructureListingContainer;