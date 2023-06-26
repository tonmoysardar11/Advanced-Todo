import React, { useState } from 'react'
import todoContext from './todoContext'


const TodoState = (props) => {
    const [disable, setdisable] = useState(true);
    const [total, settotal] = useState(0);
    const [todo, settodo] = useState({ name: '', checked: false, id: '' });
    const [todolist, settodolist] = useState([]);
    const [completed, setcompleted] = useState(0);
    const [done, setdone] = useState([]);
    const [notdone, setnotdone] = useState([]);

    const changeTodo = (e) => {
        todo.name.length > 1 ? setdisable(false) : setdisable(true)
        let key = Date.now().toString();
        settodo({ ...todo, [e.target.name]: e.target.value, id: key });
    }
    const submit = (e) => {
        e.preventDefault();
        settodolist(todolist.concat(todo))
        settotal(total + 1)
        settodo({ name: '', checked: false, id: '' });
        setnotdone(notdone.concat(todo));
    }
    const remove = (id) => {
        let newlist = todolist.filter((element) =>
            element.id !== id
        )
        let count = 0;
        newlist.forEach(element => {
            if (element.checked === true) {
                count += 1;
            }
        });
        let completedtodo = newlist.filter(element => element.checked === true)
        let pendingtodo = newlist.filter(element => element.checked === false)
        setnotdone(pendingtodo)
        setdone(completedtodo)
        settodolist(newlist)
        setcompleted(count);
        settotal(newlist.length)
    }
    const check = (item) => {
        let newlist = todolist;
        newlist.forEach(element => {
            if (element.id === item.id) {
                element.checked = !item.checked;
            }
        });
        let completedtodo = newlist.filter(element => element.checked === true)
        let pendingtodo = newlist.filter(element => element.checked === false)
        setnotdone(pendingtodo)
        setdone(completedtodo)
        setcompleted(completedtodo.length);
        settodolist(newlist);
    }
    const clearCompleted = () => {
        setdone([]);
        let list = todolist.filter(element => element.checked !== true)
        console.log(list)
        settodolist(list);
        settotal(list.length)
        setcompleted(0)
    }


    return (
        <todoContext.Provider value={{ changeTodo, submit, total, todo, todolist, completed, remove, check, done, notdone, disable, setdisable, clearCompleted }}>
            {props.children}
        </todoContext.Provider>
    )
}

export default TodoState
