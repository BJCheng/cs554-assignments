import React from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import NavBarContainer from './nav-bar-container';
import TitleContainer from './title-container';
import ContentContainer from './content-container';
import FooterContainer from './footer-container';

function mapStateToProps(state) {
    return {};
    // TODO: try return a material component!
}

function App(props) {
    return (
        <MuiThemeProvider>
            <div>
                <NavBarContainer/>
                <TitleContainer/>
                <ContentContainer/>
            </div>
        </MuiThemeProvider>
    );
}

const AppContainer = connect()(App);

export default AppContainer;