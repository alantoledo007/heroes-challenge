import styled  from 'styled-components';

export const HeaderStayles = styled.header`
    display:flex;
    align-items:center;
    img{
        margin-right: 20px
    }
    button {
        margin-left: auto;
    }

    @media(max-width: 767px){
        display: block;
    }
`;