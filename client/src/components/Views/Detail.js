import { Link, useParams } from 'react-router-dom';
import { getDogById } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


export default function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();

    // Traemos el estado de redux
    const breedDetail = useSelector(state => state.breedDetail);

    useEffect(()=>{
        dispatch(getDogById(id))
    }, [dispatch, id])


  return (
    <div>
        <Link to={'/home'}>Volver</Link>
        {breedDetail.length ? ( 
        <div>
            <div>
                <img src={breedDetail[0].image} alt="breed-detail" width={"400px"}/>
            </div>
            <div>
                <h1>{breedDetail[0].name}</h1>
                <h2>Weight:</h2>
                <h3>{breedDetail[0].weight.join(' - ')} Kg.</h3>
                <h2>Height:</h2>
                <h3>{breedDetail[0].height.join(' - ')} Cm.</h3>
                <h2>Life Span:</h2>
                <h3>{breedDetail[0].life_span.join(' - ')} Years.</h3>
                <h2>Temperaments:</h2>
                <div>
                {breedDetail[0].temperaments
                    ? breedDetail[0].temperaments.map((temperament, index) => (
                    <h2 key={index}>{temperament}</h2>
                ))
                    : null}
                </div>
            </div>
        </div>) 
        : (
        <>Bye</>
        )}
    </div>
  )
}
