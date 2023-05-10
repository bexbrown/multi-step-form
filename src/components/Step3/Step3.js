import { useEffect } from "react";
import "./Step3.scss";

function Step3({ addOn1, setAddOn1, addOn2, setAddOn2, addOn3, setAddOn3 }) {


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
        <section>
            <h1>Pick add-ons</h1>
            <span>Add-ons help enhance your gaming experience.</span>
            <div>
                <input type="checkbox" onClick={handleCheckbox1}></input>
                <section>
                    <h2>Online Service</h2>
                    <span>Access to multiplayer games</span>
                </section>
                <span>+$1/mo</span>
            </div>
            <div>
                <input type="checkbox" onClick={handleCheckbox2}></input>
                <section>
                    <h2>Larger Service</h2>
                    <span>Extra 1TB of cloud save</span>
                </section>
                <span>+$2/mo</span>
            </div>
            <div>
                <input type="checkbox" onClick={handleCheckbox3}></input>
                <section>
                    <h2>Customizable Profile</h2>
                    <span>Custom theme on your profile</span>
                </section>
                <span>+$2/mo</span>
            </div>
        </section>
    )
}

export default Step3;