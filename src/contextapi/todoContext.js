import { createContext, useContext } from "react";

export const todoContext=createContext({
    todos:[{
        id:1,
        todo:"hi shivam",
        completed:false,

    }],

    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(todo,id)=>{},
    toggleComplete:(id)=>{}
});

export const useTodo=()=>{
    return useContext(todoContext);
}

export const TodoProvider=todoContext.Provider;
