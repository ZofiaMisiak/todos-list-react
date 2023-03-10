import styled from "styled-components";

export const TasksSection = styled.section`
    background: white;
    margin-bottom: 10px 0;
    box-shadow: 0 0 5px ${({theme}) => theme.color.alto};;
    padding: 15px;
    margin-bottom: 10px;
`;

export const Header = styled.header`
    font-size: 20px;
    padding: 20px;
    margin: 0;
    border-bottom: 1px solid ${({theme}) => theme.color.alto};
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Title =styled.h2`
    padding: 0;
    font-size: 20px;
    margin: 0;
`;