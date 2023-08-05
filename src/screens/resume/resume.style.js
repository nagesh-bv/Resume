import styled from 'styled-components';

export const RightSide = styled.div`
width: 70%;
height: 100%;
background-color: ${({ theme }) => theme.buttonColor};
`

export const Container = styled.div`
background-color: ${({ theme }) => theme.white};
display: flex;
flex-direction: row;
`
