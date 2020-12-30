import {TodolistType} from "../App";
import {v1} from "uuid";

type ActionType = {
    type: string
    [key: string]: any
}

export const todolistReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case "REMOVE-TODOLIST":
            let copyState = [...state]
            copyState = copyState.filter(t => t.id != action.id)
            return copyState
        case "ADD-TODOLIST":
            return [
                ...state,
                {id: v1(), title: action.title, filter: "all"}
            ]
        case "CHANGE-TODOLIST-TITLE":
            let copysState = [
                ...state
            ]
            copysState.filter(a => a.id === action.id){
                 a.title = action.title
        }
        default:
            throw new Error("I don't understand this type")
    }
}