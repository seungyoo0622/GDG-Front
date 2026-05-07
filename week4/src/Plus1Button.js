function Plus1Button(properties) {
    function increment1() {
        properties.setCount(properties.count + 1)
    }

    return (
        <button onClick={increment1}>+1</button>
    )
}

export default Plus1Button;