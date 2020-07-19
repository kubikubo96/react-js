import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from './../actions/index';

class TaskItem extends Component {

    showStatusElement() {
        return (
            <span
                className={this.props.task.status ? 'label label-danger' : 'label label-info'}
                onClick={this.onUpdateStatus}
            >{this.props.task.status === true ? 'Kích Hoạt' : 'Ẩn'}</span>
        );
    }

    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    };

    onDeleteItem = () => {
        this.props.onDeleteTask(this.props.task.id); //dispatch(action.deleteItem)
        this.props.onCloseForm();
    };

    onEditTask = () => {
        this.props.onOpenForm();
        this.props.onEditTask(this.props.task);
    };

    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.task.name}</td>
                <td className="text-center">
                    {this.showStatusElement()}
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-primary" onClick={this.onEditTask}>
                        <span className="fa fa-pencil mr-5"/>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.onDeleteItem}>
                        <span className="fa fa-trash mr-5"/>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(action.updateStatus(id))
        },
        onDeleteTask: (id) => {
            dispatch(action.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(action.closeForm())
        },
        onOpenForm: () => {
            dispatch(action.openForm())
        },
        onEditTask: (task) => {
            dispatch(action.editTask(task));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
