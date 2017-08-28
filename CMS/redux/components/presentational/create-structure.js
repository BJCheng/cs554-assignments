import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/ToolBar';
import { blue300, blue500, blue700, red500 } from 'material-ui/styles/colors';
import TextField from 'material-ui/TextField';
import Action from '../../action';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';

class CreateStructure extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFieldsChange = this.handleFieldsChange.bind(this);
        this.addField = this.addField.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSnackBarClose = this.handleSnackBarClose.bind(this);
        // this.fields = [];
    }

    render() {
        // console.log(this.props.fields);
        let toolbarStyle = {
            // margin: 10,
            backgroundColor: blue500,
        };
        let fieldsDiv = this.props.fields.map((field, index) => {
            return (
                <div key={`fieldDiv${index}`} style={{ margin: '0px 20px' }}>
                    <TextField id={`structureFieldLabel${index}`} key={`structureFieldLabel${index}`} style={{ margin: '0px 10px' }}
                        hintText={'The field label of this structure'} floatingLabelText={'Field Label'}
                        value={field.label} onChange={this.handleFieldsChange} />
                    <TextField id={`structureFieldType${index}`} key={`structureFieldType${index}`}
                        hintText={'The field type of this structure'} floatingLabelText={'Field Type'}
                        value={field.type} onChange={this.handleFieldsChange} />
                </div>
            );
        })
        return (
            <Paper zDepth={3} style={{ margin: 10, width: '80%' }}>
                <Toolbar style={toolbarStyle}>
                    <ToolbarGroup>
                        <ToolbarTitle text={'Create Structure'} style={{ color: '#fafafa' }} />
                    </ToolbarGroup>
                </Toolbar>
                <div style={{ margin: '0px 20px' }}>
                    <div>
                        <TextField id="structureName" value={this.props.name} type='text'
                            hintText={'The name of this structure'} floatingLabelText={'Structure Name'} onChange={this.handleChange} />
                    </div>
                    <div>
                        <TextField id="structureSlug" value={this.props.slug} type='text'
                            hintText={'The slug of this structure'} floatingLabelText={'Structure Slug'} onChange={this.handleChange} />
                    </div>
                    <div>
                        <TextField id="structureDescription" value={this.props.description} hintText={'The description of this structure'}
                            floatingLabelText={'Structure Description'} onChange={this.handleChange} />
                    </div>
                    <div>
                        <TextField id="structurePageSize" value={this.props.pageSize}
                            hintText={'The page size of this structure'} floatingLabelText={'Page Size'} onChange={this.handleChange} />
                    </div>
                    {fieldsDiv}
                    <div>
                        <FlatButton label="Add Field" labelStyle={{ color: "#252525" }}
                            style={{ margin: '20px 0px', color: '#fafafa' }} onClick={this.addField} />
                    </div>
                    <Divider />
                    <RaisedButton label="Create Structure" backgroundColor={red500} labelColor={'#fafafa'}
                        style={{ margin: '20px 0px' }} onClick={this.handleClick} />
                </div>

                <Snackbar open={this.props.structureCreated} message="Structure Created" bodyStyle={{ backgroundColor: blue300 }}
                    autoHideDuration={4000} onRequestClose={this.handleSnackBarClose} />
            </Paper>
        );
    }

    handleChange(e) {
        this.props.dispatch(Action.newStrcutureOnChange(e.target.id, e.target.value));
    }

    handleFieldsChange(e) {
        this.props.dispatch(Action.newStrcutureFieldsOnChange(e.target.id, e.target.value));
    }

    addField() {
        this.props.dispatch(Action.addStructureField());
    }

    handleClick() {
        this.props.dispatch(Action.createStructure(this.props));
    }

    handleSnackBarClose() {
        this.props.dispatch(Action.closeSnackbar());
    }
}

function mapStateToProps(state) {
    // console.log('state in create-structure:', state);
    return {
        name: state.newStructure.structureName,
        slug: state.newStructure.structureSlug,
        description: state.newStructure.structureDescription,
        pageSize: state.newStructure.structurePageSize,
        fields: state.newStructure.fields,
        structureCreated: state.newStructure.structureCreated
    };
}

const CreateStructureContainer = connect(mapStateToProps)(CreateStructure);

export default CreateStructureContainer;