import { useState } from 'react';
import CountNumber from './CountNumber';
import Plus10Button from './Plus10Button';
import Plus1Button from './Plus1Button';
import ResetButton from './ResetButton';
import Minus1Button from './Minus1Button';
import Minus10Button from './Minus10Button';

function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div>
        <CountNumber count={count} />

        <Minus10Button setCount={setCount} count={count} />
        <Minus1Button setCount={setCount} count={count} />
        <ResetButton setCount={setCount} />
        <Plus1Button setCount={setCount} count={count} />
        <Plus10Button setCount={setCount} count={count} />
    </div>
    )
}

export default Counter;