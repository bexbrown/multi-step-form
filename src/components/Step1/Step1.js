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
        <section className="step1">

            <h1 className="step1__title">Personal info</h1>
            <span className="step1__text">Please provide your name, email address, and phone number.</span>
            <div className="step1__div">
                <label className="step1__label">Name</label>
                <input type="text" placeholder={name} onChange={handleNameChange} className="step1__input"></input>
            </div>
            <div className="step1__div">
                <label className="step1__label">Email Address</label>
                <input type="text" placeholder={email} onChange={handleEmailChange} className="step1__input"></input>
            </div>
            <div className="step1__div">
                <label className="step1__label">Phone Number</label>
                <input type="text" placeholder={phoneNumber} onChange={handlePhoneNumberChange} className="step1__input"></input>
            </div>
        </section>
    )
}

export default Step1;