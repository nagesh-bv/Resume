import React, { createRef, useRef } from 'react'
import Resume from '../resume';
import ReactToPrint from 'react-to-print';
import { withTheme } from '../../theme/ThemeProvider';
import THEMES from '../../theme/Themes';

const Home = (props) => {
  let resumeR = {};
  
    THEMES.forEach(t => {
      resumeR = {
        ...resumeR,
        [t.key]: createRef()
      }
    }
  )
  
  const resumeRef = useRef(resumeR);
  const { theme, setTheme } = props;
  
  const changeTheme = (color) => {
    setTheme(color);
  }
  
  return (
    <div>
      {THEMES.map((t) => {
        return (
        <div style={{marginBottom: '16px', borderWidth: '2px', borderColor : 'red', border: 'solid'}}>
          <ReactToPrint
            content={() => resumeRef.current[t.key].current}
            trigger={() => <button style={{ color: t.leftside.primary, backgroundColor: t.leftside.secondary }}>Print {t.key} to PDF!</button>}
          // pageStyle=''
          />

          <div id={t.key} ref={resumeRef.current[t.key]}> <Resume theme={t} /> </div>
        </div>
      )})}

    </div>
  );
}

export default withTheme(Home);