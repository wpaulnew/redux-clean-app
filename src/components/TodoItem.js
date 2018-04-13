import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        );
    }
}

TodoItem.propTypes = {};

export default TodoItem;
