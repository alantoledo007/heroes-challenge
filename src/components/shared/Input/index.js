import styled from 'styled-components';
import { colors } from '../../../styles/theme';

const Input = styled.input`
    width:100%;
    border: 3px solid ${colors.primary};
    border-radius: 10px;
    height: 60px;
    font-size: 1.3rem;
    font-weight: 500;
    padding: 0 15px;
    box-sizing: border-box;
    color: ${colors.primary};
    &:focus {
        outline:none;
    }
`;

export default Input;