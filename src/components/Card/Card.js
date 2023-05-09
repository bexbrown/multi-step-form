import "./Card.scss";
import CardNav from '../CardNav/CardNav';
import CardContent from '../CardContent/CardContent';
import CardFooter from '../CardFooter/CardFooter';

function Card() {
    return (
        <div>
            <CardNav />
            <CardContent />
            <CardFooter />
        </div>
    )
}

export default Card;