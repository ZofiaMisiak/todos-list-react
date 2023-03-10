import styled from "styled-components";

export const ListButtons = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    @media (max-width: ${({theme}) => theme.breakpoint.phone}px){
        grid-template-columns: auto;
        justify-content: center;
        grid-gap: 15px;
    }
`;

export const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${({theme}) => theme.color.teal};
    transition: color 0.8s;
    font-size: 15px;
    &:hover {
        filter: brightness(110%);
    }
    &:disabled {
        color: ${({theme}) => theme.color.silver};
        cursor: default;
    }
`;