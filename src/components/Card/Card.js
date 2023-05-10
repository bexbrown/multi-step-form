import "./Card.scss";
import CardHeader from '../CardHeader/CardHeader';
import CardContent from '../CardContent/CardContent';

import CardFooter from '../CardFooter/CardFooter';
import { useState } from 'react';

function Card() {

    const [step, setStep] = useState(1);
    const [paymentSchedule, setPaymentSchedule] = useState("Monthly");
    const [plan, setPlan] = useState("Arcade");
    const [price, setPrice] = useState(9);
    const [name, setName] = useState("e.g. Stephen King");
    const [email, setEmail] = useState("e.g. stephenking@lorem.com");
    const [phoneNumber, setPhoneNumber] = useState("e.g. +1 234 567 890");
    const [addOn1, setAddOn1] = useState(false);
    const [addOn2, setAddOn2] = useState(false);
    const [addOn3, setAddOn3] = useState(false);


    return (
        <div className="card">
            <CardHeader />
            <CardContent step={step} setStep={setStep} paymentSchedule={paymentSchedule}
                setPaymentSchedule={setPaymentSchedule} plan={plan} setPlan={setPlan} price={price} setPrice={setPrice} name={name} setName={setName}
                email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}
                addOn1={addOn1} setAddOn1={setAddOn1} addOn2={addOn2} setAddOn2={setAddOn2} addOn3={addOn3} setAddOn3={setAddOn3} />
            <CardFooter setStep={setStep} step={step} />
        </div>
    )
}

export default Card;