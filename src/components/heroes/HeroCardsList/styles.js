import styled  from 'styled-components';

export const Container = styled.div`
    overflow-y: auto;
    max-height: 350px;
    padding: 0 20px;
    box-sizing:border-box;
    @media(max-width: 992px) {
        max-height: 250px;
    }
`;