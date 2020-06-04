import React, { useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import logo from '../../assets/logo.svg';

interface HeaderProps {
  toggleTheme(): void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return (
    <Container themeColor={title}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <button type="button" onClick={toggleTheme}>
        {title === 'dark' ? <FiMoon size={25} /> : <FiSun size={25} />}
      </button>
    </Container>
  );
};

export default Header;
