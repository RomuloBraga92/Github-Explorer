import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import usePersistedState from './utils/usePersistedState';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header toggleTheme={toggleTheme} />
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};

export default App;
