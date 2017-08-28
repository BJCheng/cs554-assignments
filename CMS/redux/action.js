import ActionType from './action-type';
import axios from 'axios';
import $ from 'jquery';

export default {
    changeContent: function (content, structure) {
        return {
            type: ActionType.ChangeContent,
            content: content,
            structure: structure
        }
    },
    newStrcutureOnChange: function (id, value) {
        return {
            type: ActionType.NewStructureOnChange,
            id: id,
            value: value
        }
    },
    newStrcutureFieldsOnChange: function (id, value) {
        return {
            type: ActionType.NewStructureFieldsOnChange,
            id: id,
            value: value
        }
    },
    addStructureField: function () {
        return {
            type: ActionType.AddStructureField
        }
    },
    closeSnackbar: function () {
        return {
            type: ActionType.CloseSnackbar
        }
    },
    createStructure: function (newStructure) {
        return function (dispatch) {
            axios({
                method: 'post',
                url: ___apiUrl___ + '/admin/structures/new',
                data: newStructure
            }).then((result) => {
                dispatch({
                    type: ActionType.StructureCreated
                });
            }).catch((err) => {
                // TODO: dispatch error event
                console.error(err);
            });
        }
    },
    getStructures: function () {
        return function (dispatch) {
            axios.get(___apiUrl___ + '/admin/structures').then((result) => {
                dispatch({
                    type: ActionType.UpdateStructures,
                    structures: result.data
                });
            }).catch((err) => {
                // TODO: dispatch error event
                console.error(err);
            });
        }
    },
    deleteStructure: function (structure) {
        return function (dispatch) {
            axios({
                method: 'post',
                url: ___apiUrl___ + '/admin/structures/delete',
                data: structure
            }).then((result1) => {
                dispatch(function (dispatch) {
                    axios.get(___apiUrl___ + '/admin/structures').then((result) => {
                        dispatch({
                            type: ActionType.UpdateStructures,
                            structures: result.data
                        });
                    }).catch((err) => {
                        // TODO: dispatch error event
                        console.error(err);
                    });
                });
            }).catch((err) => {
                // TODO: dispatch error event
                console.error(err);
            });
        }
    },
    toggleEntryDialog: function (isOpen) {
        return {
            type: ActionType.ToggleEntryDialog,
            isOpen: isOpen
        }
    },
    getEntries: function (structure) {
        return function (dispatch) {
            axios.get(___apiUrl___ + `/admin/structures/${structure.slug}/list`).then((result) => {
                console.log('data from API=>', result.data);
                dispatch({
                    type: ActionType.UpdateEntries, 
                    entries: result.data
                });
            })
            // .catch((err) => {
            //     console.error('get entry list error=>', err)
            // });
        }
    }
}