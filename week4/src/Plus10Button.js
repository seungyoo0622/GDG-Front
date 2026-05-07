function Plus10Button(properties) {
    function increment10() {
        properties.setCount(properties.count + 10)
    }

    return (
        <button onClick={increment10}>+10</button>
    )
}

export default Plus10Button;