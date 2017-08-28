import React from 'React';
import { connect } from 'react-redux';
import { TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import { blue300, blue500, blue700, red500 } from 'material-ui/styles/colors';
import Action from '../../action';
import Contents from '../../../enums/contents';

class Structure extends React.Component {
    constructor() {
        super();
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        return (
            <TableRow name={this.props.structure.id} >
                <TableRowColumn>{this.props.structure.name}</TableRowColumn>
                <TableRowColumn>{this.props.structure.slug}</TableRowColumn>
                <TableRowColumn>{this.props.structure.description}</TableRowColumn>
                <TableRowColumn>{this.props.structure.pageSize}</TableRowColumn>
                <TableRowColumn>{this.props.structure.fields.length}</TableRowColumn>
                <TableRowColumn>
                    <RaisedButton label='Entries' backgroundColor={blue500} labelColor={'#fafafa'}
                        onClick={this.onClick.bind(this, this.props.structure)} />
                </TableRowColumn>
                <TableRowColumn>
                    <RaisedButton label='Edit' disabled={true} backgroundColor={blue500} labelColor={'#fafafa'} onClick={this.handleEdit} />
                </TableRowColumn>
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
        structure: ownProps.structure
    }
}

const structureContainer = connect()(Structure);

export default structureContainer;