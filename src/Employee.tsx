import React, {useState, useRef} from 'react'

type Person = {
    firstName: string;
    lastName: string
}

type Props = {
    person: Person;
    active?: boolean;
    age: number;
    fullName: (fn: string, ln: string)=> string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
}

type EmployeeState = {
    rate: number;
    currentProject: string;
}

const Employee: React.FC <Props> = ({fullName, person, handleInputChange}) => {
    //useState
    const [log, setLog] = useState<EmployeeState | null>(null)

    //useRef
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget);
        if (inputRef && inputRef.current) {
            inputRef.current.focus();
        }
    }
    return (
        <div>
            <h2>{fullName(person.firstName, person.lastName)}</h2>
            <input onChange={handleInputChange} ref={inputRef} type="text"/>
            <button onClick={handleClick}>Set focus</button>
        </div>
    )
}

export default Employee
