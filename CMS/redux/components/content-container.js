import { connect } from 'react-redux';
import CONTENTS from '../../enums/contents';
import Content from './presentational/content';
import Actions from '../action';

function mapStateToProps(state) {
    return {
        content: state.content
    };
}

function mapDispatchToProps(dispatch){
    return {
        changeContent: function(content){
            dispatch(Actions.changeContent(content));
        }
    };
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;