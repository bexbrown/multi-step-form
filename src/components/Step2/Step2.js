import "./Step2.scss";

function Step2() {
    return (
        <section>

            <h1>Select your plan</h1>
            <span>You have the option of monthly or yearly billing.</span>
            <div>
                <div>
                    <img alt="icon" href="" />
                    <div>
                        <h2>Arcade</h2>
                        <span>$9/month</span>
                    </div>
                </div>
                <div>
                    <img alt="icon" href="" />
                    <div>
                        <h2>Advanced</h2>
                        <span>$12/month</span>
                    </div>
                </div>
                <div>
                    <img alt="icon" href="" />
                    <div>
                        <h2>Pro</h2>
                        <span>$15/month</span>
                    </div>
                </div>
                <div>
                    <span>Monthly</span>
                    <span>Yearly</span>
                </div>
            </div>
        </section>
    )
}

export default Step2;