import styled from 'styled-components';
const URL = "https://w.wallhaven.cc/full/x1/wallhaven-x1rexv.jpg";

export const Container = styled.div`
    background-image: url(${URL});
    height: 100vh;  
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;