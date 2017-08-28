import React from 'react';
import { connect } from 'react-redux';
import Entry from './entry';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import Action from '../../action';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { red500, blue500 } from 'material-ui/styles/colors';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class EntryListing extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.onRequestClose = this.onRequestClose.bind(this);
    }
    componentWillMount() {
        // call api to get the entry list of this structure by lug
        this.props.dispatch(Action.getEntries(this.props.structure));
    }
    render() {
        const style = {
            margin: 0, top: 'auto', right: 80, bottom: 40, left: 'auto', position: 'fixed'
        };
        if (this.props.entries.length == 0) {
            // no entry then stop here
            return (
                <div>
                    <div>no entries for this structure</div>
                    <FloatingActionButton backgroundColor={red500} style={style} onClick={this.handleClick}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            );
        }

        const actions = [
            <RaisedButton backgroundColor={blue500} labelColor={'#fafafa'} label="Submit" style={{ margin: 20 }} />,
            <FlatButton label="Cancel" onClick={this.onRequestClose} />,
        ];
        let entryList = this.props.entries.map((entry, index) => {
            return <Entry key={`entry${index}`} entry={entry} />
        });
        let tableHeaderColumns = Object.keys(this.props.entries[0]).map((entryProperty, index) => {
            return <TableHeaderColumn key={`headerColumn${index}`}>{entryProperty}</TableHeaderColumn>
        });
        return (
            <div style={{ margin: 10, width: '80%' }}>
                <Table style={{ margin: '20px auto 0' }}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            {tableHeaderColumns}
                            <TableHeaderColumn></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {entryList}
                    </TableBody>
                </Table>
                <FloatingActionButton backgroundColor={red500} style={style} onClick={this.handleClick}>
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog title="Create Entry" open={this.props.toggleEntryDialog} onRequestClose={this.onRequestClose} actions={actions}>

                    Create Entry
                </Dialog>
            </div>
        );
    }

    handleClick() {
        this.props.dispatch(Action.toggleEntryDialog(true));
    }
    onRequestClose() {
        this.props.dispatch(Action.toggleEntryDialog(false));
    }
}

function mapStateToProps(state, ownProps) {
    return {
        structure: ownProps.structure,
        toggleEntryDialog: state.toggleEntryDialog,
        entries: state.entries
    };
}

const EntryListingContainer = connect(mapStateToProps)(EntryListing);

export default EntryListingContainer;