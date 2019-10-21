import React, {useReducer} from 'react'

interface Todo {
    text: string;
    complete: boolean;
}

type Actions = 
    | {type: 'create'; text: string}
    | {type: 'delete'; idx: number};

type State = Todo[];

const TodoReducer = (state: State, action: Actions)=> {
    switch (action.type) {
        case "create":
            return [...state, {text: action.text, complete: false}];
        case "delete":
            return state.filter((value, index) => index !== action.idx);
        default:
            return state;
    }
}

const ReducerEx: React.FC = () => {
    const [todos, dispatch] = useReducer(TodoReducer, [])

    return (
        <div>
            {todos}
            <button onClick={()=>{
                dispatch({type: "create", text:"newTodo"})
            }}>Add todo</button>
        </div>
    )
}

export default ReducerEx
