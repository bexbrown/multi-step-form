import "./CardFooter.scss";

function CardFooter({ setStep, step }) {

    function handleBackButton() {
        setStep(step - 1);
    }

    function handleNextButton() {
        setStep(step + 1);
    }

    return (
        <div>
            {(step > 1 && step < 5) && <button onClick={handleBackButton} >Go Back</button>}
            {step < 5 && <button onClick={handleNextButton}>Next Step</button>}
        </div>
    )
}

export default CardFooter;