import React from 'react';
import { connect } from 'react-redux';
import Entry from './entry';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

class StructureListing extends React.Component {
    constructor() {
        super();
        this.renderEntryList = this.renderEntryList.bind(this);
    }

    componentWillMount() {
        // call api to get the entry list of this structure by lug
        // this.props.dispatch
    }

    render() {
         {return this.renderEntryList()}
    };

    renderEntryList() {
        let entryList = this.props.entryList.map((entry) => {
            return <Entry title={entry.title} createdDate={entry.createdDate} commentsLength={entry.comments.length} />;
        });
        console.log(entryList);
        return entryList;
        // return (
        //     <Table>
        //         <TableBody>
        //             <TableRow>
        //                 <TableRowColumn>'title'</TableRowColumn>
        //                 <TableRowColumn>'2017/08/01'</TableRowColumn>
        //                 <TableRowColumn>3</TableRowColumn>
        //             </TableRow>
        //         </TableBody>
        //     </Table>
        // );
    }
}

function mapStateToProps(state) {
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