import React, { useContext, useState, useEffect } from 'react';
import THEMES from "./Themes";

const THEME_ID = 'THEME_ID';
const ThemeContext = React.createContext();

export function withTheme(Component) {
    return props => {
        const { themeID, setThemeID } = useContext(ThemeContext);
        console.log("themeID123: ", themeID);
        const getTheme = themeID => THEMES.find(theme => theme.key === themeID);
        const setTheme = themeID => {
            localStorage.setItem(THEME_ID, themeID);
            setThemeID(themeID);
        };
        return <Component
            {...props}
            themeID={themeID}
            theme={getTheme(themeID)}
            setTheme={setTheme} />;
    };
}

export const ThemeContextProvider = ({ children }) => {
    const [themeID, setThemeID] = useState();
    useEffect(() => {
        (() => {
            const storedThemeID = localStorage.getItem(THEME_ID)
            if (storedThemeID) setThemeID(storedThemeID);
            else setThemeID(THEMES[1].key);
        })();
    }, []);

    return (
        <ThemeContext.Provider value={{ themeID, setThemeID }}>
             {!!themeID ? children : null}
        </ThemeContext.Provider>
    );
};