import React, {useState, Children} from 'react'

type Props = {
    children: (count: number, setCount: React.Dispatch<React.SetStateAction<number>>) => JSX.Element | null;
}

const Counter: React.FC<Props> = ({children}) => {
    const [count, setCount] = useState(5);
    return (
        <div>
            {children(count, setCount)}
        </div>
    )
}

export default Counter;
