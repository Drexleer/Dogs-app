import { Link, useParams } from 'react-router-dom';
import { getDogById } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    Card,
    DivCard,
    Img,
    Ul,
    TextH2,
    TextH1,
    TextH3,
    LearnMoreButton,
    ButtonLink } from './StyledDetail';
import { GiWeight, GiBodyHeight, GiHeartBeats} from 'react-icons/gi';
import {FaTemperatureHigh} from 'react-icons/fa';
import { TiArrowBack } from 'react-icons/ti';

export default function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();

    // Traemos el estado de redux
    const breedDetail = useSelector(state => state.breedDetail);

    useEffect(()=>{
        dispatch(getDogById(id))
    }, [dispatch, id])


  return (
    <DivCard>
        <Link to={'/home'}><LearnMoreButton>Go Back</LearnMoreButton></Link>
        {breedDetail.length ? ( 
        <Card>
            <div>
                <Img src={breedDetail[0].image} alt="breed-detail" width={"400px"}/>
                <h2>Temperaments <FaTemperatureHigh/>:</h2>
                <Ul>
                {breedDetail[0].temperaments
                    ? breedDetail[0].temperaments.map((temperament, index) => (
                    <ButtonLink key={index}>{temperament}</ButtonLink>
                ))
                    : null}
                </Ul>
            </div>
            <div>
                <TextH1>{breedDetail[0].name}</TextH1>
                <TextH2>Weight <GiWeight color='5F5F5F'/>:</TextH2>
                <TextH3>{breedDetail[0].weight.join(' - ')} Kg.</TextH3>
                <TextH2>Height <GiBodyHeight/>:</TextH2>
                <TextH3>{breedDetail[0].height.join(' - ')} Cm.</TextH3>
                <TextH2>Life Span <GiHeartBeats color='red'/>:</TextH2>
                <TextH3>{breedDetail[0].life_span.join(' - ')} Years.</TextH3>
            </div>
        </Card>) 
        : ( 
        <>Bye</>
        )}
    </DivCard>
  )
}
