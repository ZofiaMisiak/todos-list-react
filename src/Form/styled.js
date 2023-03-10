import styled from "styled-components";

export const TasksForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;
    @media (max-width: ${({theme}) => theme.breakpoint.phone}px){
        grid-template-columns: 1fr;
        padding-bottom: 20px;
    }
`;

export const Field = styled.input`
    padding: 10px;
    border: 1px solid ${({theme})=> theme.color.silver};
`;

export const Button = styled.button`
    border: none;
    background-color: ${({theme})=>theme.color.teal};
    color: ${({theme})=>theme.color.white};
    padding: 10px;
    transition: 0.7s;
    &:hover {
        filter: brightness(110%);
        transform: scale(1.2);
    }
`;