import React from 'React';
import { TableBody, TableRow, TableRowColumn } from 'material-ui/Table';

function Entry(props) {
    return (
        <TableBody>
            <TableRow>
                <TableRowColumn>{props.title}</TableRowColumn>
                <TableRowColumn>{props.createdDate}</TableRowColumn>
                <TableRowColumn>{props.commentsLength}</TableRowColumn>
            </TableRow>
        </TableBody>
    );
}

export default Entry;