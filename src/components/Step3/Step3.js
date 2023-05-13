// import { on } from "events";
import { useEffect } from "react";
import "./Step3.scss";

function Step3({ paymentSchedule, addOn1, setAddOn1, addOn2, setAddOn2, addOn3, setAddOn3 }) {


    function handleCheckbox1() {
        if (addOn1 === false) {
            setAddOn1(true);
        } else {
            setAddOn1(false);
        }
    }

    function handleCheckbox2() {
        if (addOn2 === false) {
            setAddOn2(true);
        } else {
            setAddOn2(false);
        }
    }
    function handleCheckbox3() {
        if (addOn3 === false) {
            setAddOn3(true);
        } else {
            setAddOn3(false);
        }
    }
    useEffect(() => {

    }, [addOn1, addOn2, addOn3]);

    return (
        <section className="step3">
            <h1 className="step3__title">Pick add-ons</h1>
            <span className="step3__text">Add-ons help enhance your gaming experience.</span>
            <div className={addOn1 ? "step3__div step3__div--selected" : "step3__div"} onClick={handleCheckbox1}>
                {addOn1 && <input type="checkbox" checked className="step3__checkbox"></input>}
                {!addOn1 && <input type="checkbox" ></input>}
                <section>
                    <h2 className="step3__subtitle">Online Service</h2>
                    <span className="step3__subtext">Access to multiplayer games</span>
                </section>
                {paymentSchedule === "Monthly" && <span className="step3__price">+$1/mo</span>}
                {paymentSchedule === "Yearly" && <span className="step3__price">+$10/yr</span>}
            </div>
            <div className={addOn2 ? "step3__div step3__div--selected" : "step3__div"} onClick={handleCheckbox2}>
                {addOn2 && <input type="checkbox" checked className="step3__checkbox"></input>}
                {!addOn2 && <input type="checkbox"></input>}
                <section>
                    <h2 className="step3__subtitle">Larger Service</h2>
                    <span className="step3__subtext">Extra 1TB of cloud save</span>
                </section>
                {paymentSchedule === "Monthly" && <span className="step3__price">+$2/mo</span>}
                {paymentSchedule === "Yearly" && <span className="step3__price">+$20/yr</span>}
            </div>
            <div className={addOn3 ? "step3__div step3__div--selected" : "step3__div"} onClick={handleCheckbox3}>
                {addOn3 && <input type="checkbox" checked className="step3__checkbox"></input>}
                {!addOn3 && <input type="checkbox"></input>}
                <section>
                    <h2 className="step3__subtitle">Customizable Profile</h2>
                    <span className="step3__subtext">Custom theme on your profile</span>
                </section>
                {paymentSchedule === "Monthly" && <span className="step3__price">+$2/mo</span>}
                {paymentSchedule === "Yearly" && < span className="step3__price"> +$20 / yr</span>}
            </div>
        </section >
    )
}

export default Step3;