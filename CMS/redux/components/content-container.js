import { connect } from 'react-redux';
import CONTENTS from '../../enums/contents';
import Content from './presentational/content';

function mapStateToProps(state) {
    return {
        content: CONTENTS.StructureListing
    };
}

const ContentContainer = connect(mapStateToProps)(Content);

export default ContentContainer;