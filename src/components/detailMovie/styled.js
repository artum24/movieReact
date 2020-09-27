import styled from 'styled-components';


export const Banner = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(to bottom right, rgba(48,63,159,0.7),rgba(41,48,59,0.8)), url(${props=>props.bg});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
