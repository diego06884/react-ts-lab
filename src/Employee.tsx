import React from 'react'

type Person = {
    firstName: string;
    lastName: string
}

type Props = {
    person: Person;
    active?: boolean;
    age: number;
    fullName: (fn: string, ln: string)=> string;
}

const Employee: React.FC <Props> = ({fullName, person}) => {
    return (
        <div>
            <h2>{fullName(person.firstName, person.lastName)}</h2>
        </div>
    )
}

export default Employee
