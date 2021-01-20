import styled from 'styled-components';
import { colors } from '../../../styles/theme';

export const InputLabel = styled.div`

    position:relative;

    label {
        display: inline-block;
        box-sizing: border-box;
        padding: 5px 10px;
        background-color: ${colors.white};
        position: absolute;
        top: -12px;
        left: 20px;
        font-weight:900;
        text-transform:uppercase;
    }
`;