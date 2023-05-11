import "./Step5.scss";
import ThankYouIcon from "../../assets/icons/icon-thank-you.svg";

function Step5() {
    return (
        <section className="step5">

            <img alt="icon" src={ThankYouIcon} className="step5__icon" />
            <h1 className="step5__title">Thank You!</h1>
            <span className="step5__text">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</span>
        </section>
    )
}

export default Step5;