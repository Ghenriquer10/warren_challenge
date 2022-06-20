import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
`;

export const Filters = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;

    input{
        margin-right: 20px;
        height: 30px;
        width: 250px;
        border-radius: 50px;
        text-align: center;
        margin-left: 100px;

    }

    svg{
        position: absolute;
        left: 110px;
    }

    input::placeholder{
        text-align: center;
    }

    select{
        height: 30px;
    }
`;

export const DataTable = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;