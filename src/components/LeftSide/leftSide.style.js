import styled from 'styled-components';

export const Container = styled.div`
width: 35%;
height: 100%;
min-height: 2244px;
background-color: ${({theme}) => theme.primary};
// background-color: #CFDFE4;
`
export const Row = styled.div`
display: flex;
flex-direction: row;
align-items:center;
margin-right:40px;
    margin-left:18px;
`

export const Contact = styled.div`
    height: 100%;
    width: 100%;
    margin-top:16px;
`

export const ProfileImage = styled.img`
    width: 100%;
    object-fit: cover;
`