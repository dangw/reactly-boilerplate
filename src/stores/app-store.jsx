import Reactly from 'reactly';

export default class AppStore extends Reactly.Store {

    initialize(context) {
        this.state = {
            title: context.data.title
        }
    }

    getTitle() {
        return this.state.title;
    }

}