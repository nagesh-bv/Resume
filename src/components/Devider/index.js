import React from 'react'
import { Container } from './devider.style';
import { withTheme } from '../../theme/ThemeProvider';

const Devider = ({theme}) => {
    console.log("theme; ", theme);
    return (
        <Container theme={theme}/>
    );
}

export default Devider;