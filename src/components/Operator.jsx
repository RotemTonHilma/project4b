function Operator({ action, isPlaying, operatorClick }) {

    function handleOpeartorClick(action) {
        operatorClick(action);
    }

    return (
        <>
            <button
                onClick={() => handleOpeartorClick(action)}
                disabled={!isPlaying} >{action}</button>
        </>
    );
}

export default Operator;