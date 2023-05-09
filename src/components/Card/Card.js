import "./Card.scss";
import CardHeader from '../CardHeader/CardHeader';
import CardContent from '../CardContent/CardContent';
import CardFooter from '../CardFooter/CardFooter';
import { useState } from 'react';

function Card() {

    const [step, setStep] = useState(1);
    return (
        <div>
            <CardHeader />
            <CardContent step={step} />
            <CardFooter setStep={setStep} step={step} />
        </div>
    )
}

export default Card;