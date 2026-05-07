function Minus10Button(properties) {
    function decrement10() {
        properties.setCount(properties.count - 10)
    }

    return (
        <button onClick={decrement10}>-10</button>
    )
}

export default Minus10Button;