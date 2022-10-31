import styled from "styled-components";
import { Search } from "../../styles/Icons";

export const SearchWrapper = styled.div`

`;

export const SearchInput = styled.input`
    width: 765px;
    height: 54px;

    border: 1px solid #DEE0E3;
    background-color: white;
    border-radius: 8px;

    margin-top: 29px;

    padding-left: 20px;
`;

export const SearchIcon = styled(Search)`
    width: 27px;
    height: 27px;

    fill: var(--grey300);

    position: absolute;
    right: 500px;
    top: 92px;
`;