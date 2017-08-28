import React from 'react';
import { connect } from 'react-redux';
import Entry from './entry';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

class StructureListing extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {
        // call api to get the entry list of this structure by lug
        // this.props.dispatch
    }

    render() {
        let entryList = this.props.entryList.map((entry) => {
            return <Entry key={entry.title + entry.createdDate}
                title={entry.title} createdDate={entry.createdDate} commentsLength={entry.comments.length} />;
        });

        return (
            <Table style={{ margin: '20px auto 0' }}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn>Entry Title</TableHeaderColumn>
                        <TableHeaderColumn>Created Date</TableHeaderColumn>
                        <TableHeaderColumn>Comments</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {entryList}
                </TableBody>
            </Table>
        );
    };
}

function mapStateToProps(state) {
    console.log('state in structure-listing:', state);
    return {
        entryList: [
            {
                title: 'entry1',
                createdDate: '2017/08/01',
                comments: ['1', '2']
            },
            {
                title: 'entry2',
                createdDate: '2018/08/01',
                comments: ['1', '2', '3']
            },
            {
                title: 'entry3',
                createdDate: '2018/08/01',
                comments: ['1', '2', '3']
            }
        ]
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