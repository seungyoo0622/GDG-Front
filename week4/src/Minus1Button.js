function Minus1Button(properties) {
    function decrement1() {
        properties.setCount(properties.count - 1)
    }

    return (
        <button onClick={decrement1}>-1</button>
    )
}

export default Minus1Button;