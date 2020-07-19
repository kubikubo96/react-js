import React, {Component} from 'react';
import Title from "./components/Title";
import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import BaseRoute from './components/routes/BaseRoute';
import tasks from "./mocks/tasks";

import {filter, includes, orderBy as funOrderBy, remove, reject} from 'lodash';

const {v4: uuidv4} = require('uuid');

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            isShowForm: false,
            strSearch: '',
            orderBy: 'name',
            orderDir: 'asc',
            itemSelected: null,
        };

        this.handleToogleForm = this.handleToogleForm.bind(this);
        this.closeForm = this.closeForm.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

    }

    componentDidMount() {
        fetch("tasks")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    handleToogleForm() {
        this.setState({
            isShowForm: !this.state.isShowForm,
            itemSelected: null
        });
    }

    closeForm() {
        this.setState({
            isShowForm: false
        });
    }

    handleSearch(value) {
        this.setState({
            strSearch: value
        });
    }

    handleSort(orderBy, orderDir) {
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }

    handleDelete(id) {
        let items = this.state.items;
        remove(items, (item) => {
            return item.id === id;
        });
        this.setState({
            items: items
        });
    }

    handleSubmit(item) {
        let {items} = this.state;
        if (item.id !== '') {
            //EDIT
            //c1 : use lib lodash
            items = reject(items, {id: item.id});
            items.push({
                id: item.id,
                name: item.name,
                level: +item.level // +: ep int
            });
            //c2 : normal
            // items.forEach((elm, key) => {
            //     if(elm.id === item.id){
            //         items[key].name = item.name;
            //         items[key].level = +item.level; // +: ep int
            //     }
            // });
        } else {
            //ADD
            items.push({
                id: uuidv4(),
                name: item.name,
                level: +item.level // + : ep int
            })
        }

        this.setState({
            items: items,
            isShowForm: false
        });

    }

    handleEdit(item) {
        this.setState({
            itemSelected: item,
            isShowForm: true
        });
    }

    render() {
        const {error, isLoaded} = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            let itemsOrigin = [...this.state.items]; //copy this.state.items to itemsOrigin
            let items = [];
            let isShowForm = this.state.isShowForm;
            let elmForm = null;
            const search = this.state.strSearch;
            let {orderBy, orderDir} = this.state;
            let itemSelected = this.state.itemSelected;

            //c1: Search normal
            // if(search.length > 0){
            //     itemsOrigin.forEach((item) => {
            //         if(item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1){
            //             items.push(item);
            //         }
            //     });
            // }else{
            //     items = itemsOrigin;
            // }

            //c2: Search use lib lodash
            items = filter(itemsOrigin, (item) => {
                return includes(item.name.toLowerCase(), search.toLowerCase());
            });

            //Sort use lib lodash
            items = funOrderBy(items, [orderBy], [orderDir]);

            if (isShowForm) {
                elmForm =
                    <Form itemSelected={itemSelected} onClickSubmit={this.handleSubmit}
                          onClickCalcel={this.closeForm}/>;
            }

            return (

                <div className="row">
                    <BaseRoute/>
                    <Title/>

                    <Control
                        onClickAdd={this.handleToogleForm}
                        isShowForm={isShowForm}
                        strSearch={this.props.strSearch}
                        onClickSearchGo={this.handleSearch}
                        orderBy={orderBy}
                        orderDir={orderDir}
                        onClickSort={this.handleSort}
                    />

                    {elmForm}

                    <List
                        items={items}
                        onClickDelete={this.handleDelete}
                        onClickEdit={this.handleEdit}
                    />
                </div>
            )
        }
    }
}

export default TodoList;
