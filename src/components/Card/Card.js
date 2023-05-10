import "./Card.scss";
import CardHeader from '../CardHeader/CardHeader';
import CardContent from '../CardContent/CardContent';

import CardFooter from '../CardFooter/CardFooter';
import { useState } from 'react';

function Card() {

    const [step, setStep] = useState(1);
    const [paymentSchedule, setPaymentSchedule] = useState("Monthly");
    const [plan, setPlan] = useState("Arcade");

    return (
        <div>
            <CardHeader />
            <CardContent step={step} paymentSchedule={paymentSchedule} setPaymentSchedule={setPaymentSchedule} plan={plan} setPlan={setPlan} />
            <CardFooter setStep={setStep} step={step} />
        </div>
    )
}

export default Card;