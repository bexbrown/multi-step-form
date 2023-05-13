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
            {step < 4 && <button onClick={handleNextButton} className="footer__button footer__button--next">Next Step</button>}
            {step === 4 && <button onClick={handleNextButton} className="footer__button footer__button--next">Confirm</button>}
            {step === 5 && <div className="footer__hidden"></div>}
        </div>
    )
}

export default CardFooter;