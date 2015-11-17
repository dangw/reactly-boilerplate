import React from 'react';
import Reactly from 'reactly';
import assign from 'object-assign';

import AppStore from './stores/app-store';
import TitleView from './views/title-view';

export default class App extends Reactly.Module {

    static get childContextTypes() {
        return assign(Reactly.Module.childContextTypes, {
            data: React.PropTypes.object.isRequired
        });
    }

    getChildContext() {
        return assign(super.getChildContext(), {
            data: this.props.data
        });
    }

    static get stores() {
        return [AppStore];
    }

    static get actions() {
        return [];
    }

    render() {
        return (
            <TitleView />
        );
    }

}
