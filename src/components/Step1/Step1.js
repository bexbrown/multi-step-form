import "./Step1.scss";

function Step1({ name, setName, email, setEmail, phoneNumber, setPhoneNumber }) {

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePhoneNumberChange(event) {
        setPhoneNumber(event.target.value);
    }



    return (
        <section>

            <h1>Personal Info</h1>
            <span>Please provide your name, email address, and phone number.</span>
            <div>
                <label>Name</label>
                <input type="text" placeholder={name} onChange={handleNameChange}></input>
            </div>
            <div>
                <label>Email Address</label>
                <input type="text" placeholder={email} onChange={handleEmailChange}></input>
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" placeholder={phoneNumber} onChange={handlePhoneNumberChange}></input>
            </div>
        </section>
    )
}

export default Step1;