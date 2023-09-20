import styled from 'styled-components';
const URL = "https://w.wallhaven.cc/full/yj/wallhaven-yjr977.jpg";

export const Container = styled.div`
    background-image: url(${URL});
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
`;