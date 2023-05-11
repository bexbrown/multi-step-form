import "./CardFooter.scss";

function CardFooter({ setStep, step }) {

    function handleBackButton() {
        setStep(step - 1);
    }

    function handleNextButton() {
        setStep(step + 1);
    }

    return (
        <div className="footer">
            {(step > 1 && step < 5) && <button onClick={handleBackButton} className="footer__button footer__button--back" >Go Back</button>}
            {step < 5 && <button onClick={handleNextButton} className="footer__button footer__button--next">Next Step</button>}
        </div>
    )
}

export default CardFooter;