import React from 'react';
import Reactly from 'reactly';
import assign from 'object-assign';

import AppStore from '../stores/app-store';

export default class TitleView extends Reactly.Component {

    static get contextTypes() {
        return Reactly.Component.contextTypes;
    }

    static get storeListeners() {
        return {
            onAppStoreChange: [AppStore]
        };
    }

    onAppStoreChange() {
        this.setState({
            title: this.getStore(AppStore).getTitle()
        });
    }

    render() {
        return (
            <h1>{this.state.title}...</h1>
        );
    }

}
