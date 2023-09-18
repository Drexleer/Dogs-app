//import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {CardContainer, CardImage, CardGrid} from './StyledCard'

function Card({ id, name, image, temperaments, weight }) {
    return (
        <CardGrid>
            <CardContainer>
            <h1>{name}</h1>
            <CardImage src={image} alt="dog" />
            <h3>{temperaments.join(', ')}</h3>
            <h3>{weight.join(' - ')} Kg</h3>
            <Link to={`/home/${id}`}>
                <button>More Info</button>
            </Link>
            </CardContainer>
        </CardGrid>
    )
};

export default Card;