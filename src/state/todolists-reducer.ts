import {TodolistType} from "../App";

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
        default:
            throw new Error("I don't understand this type")
    }
}