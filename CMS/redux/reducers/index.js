import ActionType from '../action-type';
import Contents from '../../enums/contents';

function reducer(state, action) {
    Object.freeze(state);

    switch (action.type) {
        case ActionType.ChangeContent:
            return Object.assign({}, state, { content: action.content });

        case ActionType.NewStructureOnChange:
            let newStructure = Object.assign({}, state.newStructure);
            newStructure[action.id] = action.value;
            return Object.assign({}, state, { newStructure: newStructure });

        case ActionType.NewStructureFieldsOnChange:
            let newStructure2 = JSON.parse(JSON.stringify(state.newStructure)); //Deep Clone
            let index = 0;
            if (action.id.indexOf('Label') > -1) {
                index = action.id.replace('structureFieldLabel', '');
                newStructure2.fields[index].label = action.value;
            } else {
                index = action.id.replace('structureFieldType', '');
                newStructure2.fields[index].type = action.value;
            }
            return Object.assign({}, state, { newStructure: newStructure2 });

        case ActionType.AddStructureField:
            let newStructure1 = Object.assign({}, state.newStructure);
            let newFields = newStructure1.fields.concat({ label: '', type: '' });
            newStructure1.fields = newFields;
            return Object.assign({}, state, { newStructure: newStructure1 });

        case ActionType.StructureCreated:
            let brandNewStructure = {
                structureName: '', structureSlug: '', structureDescription: '',
                structurePageSize: '', fields: [{ label: '', type: '' }], structureCreated: true
            };
            return Object.assign({}, state, { newStructure: brandNewStructure });

        case ActionType.CloseSnackbar:
            let newStructure3 = JSON.parse(JSON.stringify(state.newStructure));
            newStructure3.structureCreated = false;
            return Object.assign({}, state, { newStructure: newStructure3 });

        default:
            return state;
    }
}

export default reducer;