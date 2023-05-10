import "./Card.scss";
import CardHeader from '../CardHeader/CardHeader';
import CardContent from '../CardContent/CardContent';

import CardFooter from '../CardFooter/CardFooter';
import { useState } from 'react';

function Card() {

    const [step, setStep] = useState(1);
    const [paymentSchedule, setPaymentSchedule] = useState("Monthly");
    const [plan, setPlan] = useState("Arcade");
    const [name, setName] = useState("e.g. Stephen King");
    const [email, setEmail] = useState("e.g. stephenking@lorem.com");
    const [phoneNumber, setPhoneNumber] = useState("e.g. +1 234 567 890");

    return (
        <div>
            <CardHeader />
            <CardContent step={step} paymentSchedule={paymentSchedule}
                setPaymentSchedule={setPaymentSchedule} plan={plan} setPlan={setPlan} name={name} setName={setName}
                email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
            <CardFooter setStep={setStep} step={step} />
        </div>
    )
}

export default Card;