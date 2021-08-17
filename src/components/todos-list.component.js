import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
        <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
)

function todoList() {

    const [Todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/todo-zmphz/service/todo/incoming_webhook/todo')
            .then(response => { setTodos(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [Todos]);


    const todoLists = () =>
    {
        return Todos.map(function (currentTodo, i) {
            return <Todo todo={currentTodo} key={i} />
        })
    };


    return (
        <div>
            <h3>Todos List</h3>
            <table className="table table-striped" style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todoLists()}
                </tbody>
            </table>
        </div>

    )
}

export default todoList











// import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Todo = props => (
//     <tr>
//         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_description}</td>
//         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_responsible}</td>
//         <td className={props.todo.todo_completed ? 'completed' : ''}>{props.todo.todo_priority}</td>
//         <td>
//             <Link to={"/edit/"+props.todo._id}>Edit</Link>
//         </td>
//     </tr>
// )

// export default class TodosList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {todos: []};
//     }


//     componentDidMount() {
//         axios.get('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/todo-zmphz/service/todo/incoming_webhook/todo')
//             .then(response => {
//                 this.setState({todos: response.data});
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }

//     componentDidUpdate() {
//         axios.get('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/todo-zmphz/service/todo/incoming_webhook/todo')
//         .then(response => {
//             this.setState({todos: response.data});
//         })
//         .catch(function (error) {
//             console.log(error);
//         })   
//     }

//     todoList() {
//         return this.state.todos.map(function(currentTodo, i) {
//             return <Todo todo={currentTodo} key={i} />;
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h3>Todos List</h3>
//                 <table className="table table-striped" style={{ marginTop: 20 }}>
//                     <thead>
//                         <tr>
//                             <th>Description</th>
//                             <th>Responsible</th>
//                             <th>Priority</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         { this.todoList() }
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }