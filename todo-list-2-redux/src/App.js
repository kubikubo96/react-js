import React, {Component} from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import {connect} from 'react-redux';
import * as action from './actions/index';
import * as actions from "./actions";

class App extends Component {

    onToggleForm = () => {
        let {itemEditing} = this.props;
        if(itemEditing && itemEditing.id !== ''){
            this.props.onOpenForm();
        }else{
            this.props.onToggleForm();
        }
        this.props.onClearTask({
            id: '',
            name: '',
            status: false
        });
    };

    render() {
        let {isDisplayForm} = this.props;

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        <TaskForm/>
                    </div>
                    <div
                        className={isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-5"/>Thêm Công Việc
                        </button>
                        <TaskControl/>
                        <TaskList/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing: state.itemEditing
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(action.toggleForm())
        },
        onClearTask: (task) => {
            dispatch(actions.editTask(task));
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
