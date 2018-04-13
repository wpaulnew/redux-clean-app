import React, {Component} from 'react';
import {Provider} from 'react-redux';
import TodoList from "./components/TodoList";
import store from './store';

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <TodoList/>
                </Provider>
            </div>
        );
    }
}

export default App;
