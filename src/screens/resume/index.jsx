import React, { useEffect } from 'react'
import { withTheme } from '../../theme/ThemeProvider';
import {Container} from './resume.style'
import { LeftSide, RighSide } from '../../components';


const Resume = (props) => {
  const { theme } = props;
  console.log("props: ", props);
  const { leftside, rightside } = theme;

    return (
        <Container theme={leftside}>
          <LeftSide theme={leftside}/>
          <RighSide theme={rightside}/>
        </Container>
    );
}

export default Resume;