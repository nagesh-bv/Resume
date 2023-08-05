import './App.css';
import { ThemeContextProvider }  from './theme/ThemeProvider';
import { Home } from './screens';


function App() {
  return (
    <ThemeContextProvider>
     <Home/>
    </ThemeContextProvider>
  );
}

export default App;
