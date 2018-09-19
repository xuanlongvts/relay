import React, {PureComponent} from 'react';
import {createFragmentContainer, graphql} from 'react-relay';

import TodoTextInput from './TodoTextInput';

class TodoApp extends PureComponent {
    _handleTextInputSave = text => {
        AddTodoMutation.commit(
            this.props.relay.environment,
            text,
            this.props.viewer,
        );
    };

    render() {
        return (
            <div>
                <section className="todoapp">
                    <header className="header">
                        <h1>todos</h1>
                        <TodoTextInput
                            autoFocus={true}
                            className="new-todo"
                            onSave={this._handleTextInputSave}
                            placeholder="What needs to be done?"
                        />
                    </header>
                </section>
                <footer className="info">
                    <p>Double-click to edit a todo</p>
                    <p>
                        Created by the{' '}
                        <a href="https://facebook.github.io/relay/">
                            Relay team
                        </a>
                    </p>
                    <p>
                        Part of <a href="http://todomvc.com">TodoMVC</a>
                    </p>
                </footer>
            </div>
        );
    }
}

export default createFragmentContainer(TodoApp, {
    viewer: graphql`
        fragment TodoApp_viewer on User {
            id
            totalCount
        }
    `,
});
