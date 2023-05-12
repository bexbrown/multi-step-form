import "./Step4.scss";

function Step4({ paymentSchedule, plan, price, addOn1, addOn2, addOn3, setStep }) {

    let addOn1Price = 0;
    let addOn2Price = 0;
    let addOn3Price = 0;

    function handleChangeClick() {
        setStep(2);
    }

    if (paymentSchedule === "Monthly") {
        if (addOn1 === true) {
            addOn1Price = 1;
        }
        if (addOn2 === true) {
            addOn2Price = 2;
        }
        if (addOn3 === true) {
            addOn3Price = 2;
        }
    }
    if (paymentSchedule === "Yearly") {
        if (addOn1 === true) {
            addOn1Price = 10;
        }
        if (addOn2 === true) {
            addOn2Price = 20;
        }
        if (addOn3 === true) {
            addOn3Price = 20;
        }
    }

    let total = price + addOn1Price + addOn2Price + addOn3Price;

    return (
        <section className="step4">
            <h1 className="step4__title">Finishing Up</h1>
            <span className="step4__text">Double check everything looks OK before confirming.</span>
            <div className="step4__div">
                <div>
                    <h2 className="step4__subtitle">{plan} ({paymentSchedule})</h2>
                    <span onClick={handleChangeClick} className="step4__change">Change</span>
                </div>
                {paymentSchedule === "Monthly" && <span className="step4__price">{price}/mo</span>}
                {paymentSchedule === "Yearly" && <span className="step4__price">{price}/yr</span>}

            </div>
            <div className="step4__addons">
                {addOn1 && <div className="step4__addon--div">
                    <span className="step4__addon">Online Service</span>
                    {paymentSchedule === "Monthly" && <span className="step4__addon--price">+{addOn1Price}/mo</span>}
                    {paymentSchedule === "Yearly" && <span className="step4__addon--price">+{addOn1Price}/yr</span>}
                </div>}
                {addOn2 && <div className="step4__addon--div">
                    <span className="step4__addon">Larger Storage</span>
                    {paymentSchedule === "Monthly" && <span className="step4__addon--price">+{addOn2Price}/mo</span>}
                    {paymentSchedule === "Yearly" && <span className="step4__addon--price">+{addOn2Price}/yr</span>}

                </div>}
                {addOn3 && <div className="step4__addon--div">
                    <span className="step4__addon">Customizable Profile</span>
                    {paymentSchedule === "Monthly" && <span className="step4__addon--price">+{addOn3Price}/mo</span>}
                    {paymentSchedule === "Yearly" && <span className="step4__addon--price">+{addOn3Price}/yr</span>}

                </div>}
            </div>
            <div className="step4__totals">
                {paymentSchedule === "Monthly" && <span className="step4__total">Total (per month)</span>}
                {paymentSchedule === "Yearly" && <span className="step4__total">Total (per year)</span>}
                {paymentSchedule === "Monthly" && <span className="step4__total--price">+{total}/mo</span>}
                {paymentSchedule === "Yearly" && <span className="step4__total--price">+{total}/yr</span>}
            </div>
        </section >
    )
}

export default Step4;