import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
  themeColor: string;
}

interface ThemeProps {
  themeColor: string;
}

export const Title = styled.h1`
  font-size: 49px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    border: 2px solid #fff;
    color: #3a3a3a;
    border-right: 0;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    ${(props) =>
      props.themeColor === 'dark' &&
      css`
        background: #312e38;
        color: #fff;
        border: 1px solid #fff;

        &:hover {
          background: ${shade(0.1, '#3a3a3a')};
        }

        &::placeholder {
          color: #fff;
        }
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
`;

export const Button = styled.button<ThemeProps>`
  width: 210px;
  height: 70px;
  border-radius: 0 5px 5px 0;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.2s;

  ${(props) =>
    props.themeColor === 'light' &&
    css`
      background: #04d361;

      &:hover {
        background: ${shade(0.1, '#04d361')};
      }
    `}

  ${(props) =>
    props.themeColor === 'dark' &&
    css`
      background: #034078;
      border: 1px solid #fff;

      &:hover {
        background: ${shade(0.1, '#034078')};
      }
    `}
`;

export const Repository = styled.div<ThemeProps>`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0.2s;

    ${(props) =>
      props.themeColor === 'dark' &&
      css`
        background: #312e38;
        border: 1px solid #fff;

        &:hover {
          background: ${shade(0.1, '#312e38')};
        }
      `}

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      flex: 1;
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;

        ${(props) =>
          props.themeColor === 'dark' &&
          css`
            color: #fff;
          `}
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
