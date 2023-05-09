import "./Step1.scss";

function Step1() {
    return (
        <section>

            <h1>Personal Info</h1>
            <span>Please provide your name, email address, and phone number.</span>
            <div>
                <label>Name</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Email Address</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text"></input>
            </div>
        </section>
    )
}

export default Step1;