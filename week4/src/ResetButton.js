function ResetButton(properties) {
    function reset() {
        properties.setCount(0)
    }

    return (
        <button onClick={reset}>reset</button>
    )
}

export default ResetButton;