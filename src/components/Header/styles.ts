import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ContainerProps {
  themeColor: string;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    border-radius: 50%;
    padding: 5px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    -webkit-box-shadow: 3px 1px 14px -2px rgba(0, 0, 0, 0.71);
    -moz-box-shadow: 3px 1px 14px -2px rgba(0, 0, 0, 0.71);
    box-shadow: 3px 1px 14px -2px rgba(0, 0, 0, 0.71);
    transition: background-color 0.2s;

    ${(props) =>
      props.themeColor === 'light' &&
      css`
        background: #f4eea9;
        border: 1px solid #312e38;

        &:hover {
          background: ${shade(0.1, '#f4eea9')};
        }
      `}

    ${(props) =>
      props.themeColor === 'dark' &&
      css`
        background: #034078;
        border: 1px solid #ccc;
        color: #ccc;

        &:hover {
          background: ${shade(0.1, '#034078')};
        }
      `}

    &:active {
      background-color: ${shade(0.1, '#f5f5f5')};
      transform: translateY(4px);
    }
  }
`;
