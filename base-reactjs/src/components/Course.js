import React, {Component} from 'react';
import Lesson from "./Lesson";
import $ from 'jquery'

class Course extends Component {

    constructor(props){
        super(props);

        this.state = {
            isShowOutline: false
        };

        this.handleClickThree = this.handleClickThree.bind(this);
        this.registerCourse = this.registerCourse.bind(this);
        this.handleToogleOutline = this.handleToogleOutline.bind(this);
    }

    handleClickOne(){
        alert("view success");
    }

    handleClickTwo(content){
        alert(content);
    }

    handleClickThree(){
        alert(this.props.name)
    }

    registerCourse(){
        alert(this.refs.username.value);
    }

    handleToogleOutline(){
        this.setState({
            isShowOutline: !this.state.isShowOutline
        });
    }

    showButtonFree(){
        const isFree = this.props.free;
        if(isFree === true){
            return (
                <div className="card">
                    <div className="btn-group">
                        <button onClick={this.handleClickOne} type="button" className="btn btn-success">Success</button>
                        <button onClick={() => this.handleClickTwo("view warning")} type="button" className="btn btn-warning">Warning</button>
                        <button onClick={this.handleClickThree} type="button" className="btn btn-danger">Danger</button>
                    </div>
                </div>
            )
        }else{
            return (
                <div className="card-footer">
                    <div className="input-group">
                        <button onClick={this.registerCourse} className="btn btn-info" type="button">register</button>
                        <input type="text" className="form-control" placeholder="username..." ref="username"/>
                    </div>
                </div>
            )
        }
    }
    render() {
        let elmOutline = null;
        if(this.state.isShowOutline){
            elmOutline = (
                <ul className="list-group">
                    <Lesson/>
                    <Lesson/>
                    <Lesson/>
                </ul>
            )
        }

        return (
            <div className="col-md-4">
                <div className="card">
                    <h3>
                        <div className="card-header">{this.props.name}</div>
                    </h3>
                    <p>{this.props.time}</p>
                    <p>{this.props.children}</p>
                    <p><button onClick={this.handleToogleOutline} type="button" className="btn btn-success">Toogle Outline</button></p>
                    {elmOutline}
                </div>
                {this.showButtonFree()}
            </div>
        );
    }
}

export default Course;