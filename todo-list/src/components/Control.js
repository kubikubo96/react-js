import React, {Component} from 'react';
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        this.props.onClickAdd();
    }

    render() {
        let {orderBy, orderDir} = this.props;

        let elmButton = <button onClick={this.handleAdd} type="button" className="btn btn-info btn-block marginB10">Add
            Item</button>;
        if (this.props.isShowForm === true) {
            elmButton =
                <button onClick={this.handleAdd} type="button" className="btn btn-primary btn-block marginB10">Close
                    Form</button>;
        }

        return (
            <div className="row">

                <Search onClickGo={this.props.onClickSearchGo}/>

                <Sort
                    orderBy={orderBy}
                    orderDir={orderDir}
                    onClickSort={this.props.onClickSort}
                />

                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    {elmButton}
                </div>
            </div>
        )
    }
}

export default Control;