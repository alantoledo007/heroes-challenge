import styled from 'styled-components';
import {colors} from '../../../styles/theme';

const Card = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    border-radius: 5px;
    border: 4px solid ${colors.primary};
    box-shadow: 3px 3px 0 ${colors.primaryLight};
    margin-bottom: 25px;
    transition: all ease-in-out .4s;
    box-sizing: border-box;
    padding: 20px;
    background-color: ${colors.white};
    &:hover {
        transform: scale(1.01);
        box-shadow: 3px 3px 0 ${colors.primary};
    }
`;

export const CardTitle = styled.h4`
    font-size: 1.5rem;
    line-height:1.5;
    font-weight: 900;
    color:${colors.primary};
`;

export const CardContent = styled.div`
    
`;

export const CardHeader = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:relative;
`;

export default Card;