import styled, {css} from 'styled-components';
import {colors} from '../../../styles/theme';

const Button = styled.button`
    padding: 10px 20px;
    font-weight: 500;
    border-radius: 3px;
    box-sizing: border-box;
    color: #aaa;
    border: none;
    background-color: ${colors.white};
    box-shadow: 0 0 0 1px #aaa;
    transition: all .4s ease-in-out;
    cursor: pointer;

    ${({variant}) => variant === 'blue' && css`
        background-color: ${colors.blue};
        color: ${colors.white};
    `}

    &:hover {
        ${({variant}) => variant === 'danger' && css`
            background-color: ${colors.danger};
            color: ${colors.white};
            box-shadow: 0 0 10px ${colors.dangerLight};
        `}

        ${({variant}) => variant === 'blue' && css`
            background-color: ${colors.blueLight};
            box-shadow: 0 0 10px ${colors.blue};
        `}
    }

    &:focus {
        outline: none;
    }

    @media(max-width: 400px) {
        ${({toDelete}) => toDelete && css`
            position:absolute;
            right: -17px;
            top: -17px;
            padding: 0;
            width: 25px;
            height: 25px;
        `}
    }

    @media(min-width: 993px) {
        ${({toDelete}) => toDelete && css`
            &::after {
                content: ' BORRAR'
            }
        `}
    }
`;

export default Button;