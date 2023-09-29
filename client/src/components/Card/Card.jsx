import { Link } from 'react-router-dom';
import {CardContainer, Img, Head, TextBox, Span} from './StyledCard'


function Card({ id, name, image, temperaments, weight }) {

    return (
        <CardContainer>
            <Img src={image} alt="dog"/>
            <TextBox>
            <Link to={`/home/${id}`}>
            <Head>{name}</Head>
            </Link>
            <Span>{temperaments.join(', ')}</Span>
            <Span>{weight.join(' - ')} Kg</Span>
            </TextBox>
        </CardContainer>
    )
};

export default Card;