import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            task_id: '',
            task_name: '',
            task_level: 0
        };

        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // setState when add
    componentWillMount() {
        this.updateItem(this.props.itemSelected);
    }

    // setState when edit
    componentWillReceiveProps(nextProps, nextContext) {
        this.updateItem(nextProps.itemSelected);
    }

    updateItem(item) {
        if (item !== null) {
            this.setState({
                task_id: item.id,
                task_name: item.name,
                task_level: item.level
            });
        }
    }

    handleCancel() {
        this.props.onClickCalcel();
    }

    handleChange(event) {

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let item = {
            id: this.state.task_id,
            name: this.state.task_name,
            level: this.state.task_level,
        };

        this.props.onClickSubmit(item);
        event.preventDefault();
    }

    render() {
        return (
            <div className="row marginB10">
                <div className="col-md-offset-7 col-md-5">
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <input onChange={this.handleChange} value={this.state.task_name} name={"task_name"}
                                   type="text" className="form-control" placeholder="Item Name"/>
                        </div>
                        <div className="form-group">
                            <select onChange={this.handleChange} value={this.state.task_level} name={"task_level"}
                                    className="form-control">
                                <option value={0}>Small</option>
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                        <button onClick={this.handleCancel} type="button" className="btn btn-default">Cancel</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;