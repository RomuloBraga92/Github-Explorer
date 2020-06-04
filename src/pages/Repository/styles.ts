import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ThemeProps {
  themeColor: string;
}

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div<ThemeProps>`
  margin-top: 80px;

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
