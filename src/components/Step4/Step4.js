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
        <section>
            <h1>Finishing Up</h1>
            <span>Double check everything looks OK before confirming.</span>
            <div>
                <div>
                    <h2>{plan} ({paymentSchedule})</h2>
                    <span onClick={handleChangeClick}>Change</span>
                </div>
                {paymentSchedule === "Monthly" && <span>{price}/mo</span>}
                {paymentSchedule === "Yearly" && <span>{price}/yr</span>}

            </div>
            <div>
                {addOn1 && <div>
                    <span>Online Service</span>
                    <span>{addOn1Price}</span>
                </div>}
                {addOn2 && <div>
                    <span>Larger Service</span>
                    <span>{addOn2Price}</span>
                </div>}
                {addOn3 && <div>
                    <span>Customizable Profile</span>
                    <span>{addOn3Price}</span>
                </div>}
            </div>
            <div>
                {paymentSchedule === "Monthly" && <span>Total (per month)</span>}
                {paymentSchedule === "Yearly" && <span>Total (per year)</span>}
                {paymentSchedule === "Monthly" && <span>{total}/mo</span>}
                {paymentSchedule === "Yearly" && <span>{total}/yr</span>}
            </div>
        </section>
    )
}

export default Step4;