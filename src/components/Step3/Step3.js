import "./Step3.scss";

function Step3() {
    return (
        <section>


            <h1>Pick add-ons</h1>
            <span>Add-ons help enhance your gaming experience.</span>
            <div>
                <input type="checkbox"></input>
                <section>
                    <h2>Online Service</h2>
                    <span>Access to multiplayer games</span>
                </section>
                <span>+$1/mo</span>
            </div>
            <div>
                <input type="checkbox"></input>
                <section>
                    <h2>Larger Service</h2>
                    <span>Extra 1TB of cloud save</span>
                </section>
                <span>+$2/mo</span>
            </div>
            <div>
                <input type="checkbox"></input>
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