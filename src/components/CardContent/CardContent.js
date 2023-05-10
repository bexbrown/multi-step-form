import './CardContent.scss';
import Step1 from "../Step1/Step1";
import Step2 from "../Step2/Step2";
import Step3 from "../Step3/Step3";
import Step4 from "../Step4/Step4";
import Step5 from "../Step5/Step5";

function CardContent({ step, paymentSchedule, setPaymentSchedule, plan, setPlan, name, setName, email, setEmail, phoneNumber, setPhoneNumber, addOn1, setAddOn1, addOn2, setAddOn2, addOn3, setAddOn3 }) {
    return (
        <section>
            {step === 1 && <Step1 name={name} setName={setName} email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />}
            {step === 2 && <Step2 paymentSchedule={paymentSchedule} setPaymentSchedule={setPaymentSchedule} plan={plan} setPlan={setPlan} />}
            {step === 3 && <Step3 addOn1={addOn1} setAddOn1={setAddOn1} addOn2={addOn2} setAddOn2={setAddOn2} addOn3={addOn3} setAddOn3={setAddOn3} />}
            {step === 4 && <Step4 />}
            {step === 5 && <Step5 />}
        </section>
    )
}

export default CardContent;