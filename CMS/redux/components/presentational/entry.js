import React from 'React';
import { connect } from 'react-redux';
import { TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import { blue300, blue500, blue700, red500 } from 'material-ui/styles/colors';
import Action from '../../action';
import Contents from '../../../enums/contents';

class Entry extends React.Component {
    constructor() {
        super();
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        let rowColumns = Object.keys(this.props.entry).map((property, index) => {
            return (
                <TableRowColumn key={`entryRowColumn${index}`}>{this.props.entry[property]}</TableRowColumn>
            );
        });
        return (
            <TableRow >
                {rowColumns}
                <TableRowColumn>
                    <RaisedButton label='Delete' backgroundColor={red500} labelColor={'#fafafa'} onClick={this.handleDelete} />
                </TableRowColumn>
            </TableRow>
        );
    }

    handleEdit() {

    }

    handleDelete() {
        console.log(this.props.structure.id);
        this.props.dispatch(Action.deleteStructure(this.props.structure));
    }

    onClick(structure, e) {
        // TODO: change content
        this.props.dispatch(Action.changeContent(Contents.EntryListing, structure));
    }
}

function mapStateToProps(state, ownProps) {
    return {
        structure: ownProps.structure,
        entry: ownProps.entry
    }
}

const entryContainer = connect(mapStateToProps)(Entry);

export default entryContainer;