import ActionType from './action-type';
import axios from 'axios';
import $ from 'jquery';

export default {
    changeContent: function (content) {
        return {
            type: ActionType.ChangeContent,
            content: content
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
        console.log(newStructure);
        return function (dispatch) {
            axios({
                method: 'post',
                url: ___apiUrl___,
                data: newStructure
            }).then((result) => {
                dispatch({
                    type: ActionType.StructureCreated
                });
            }).catch((err) => {
                // TODO: dispatch error event
                console.error(err);
            });
            // $.ajax({
            //     url: ___apiUrl___,
            //     data: newStructure,
            //     success: function (result) {
            //         dispatch({
            //             type: ActionType.StructureCreated
            //         });
            //     },
            //     error: function (err) {
            //         console.error(err.responseText);
            //     }
            // });
        }
    }
}