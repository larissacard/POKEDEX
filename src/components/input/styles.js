import styled from "styled-components";

export const Input = styled.input `
    width: 365px;
    height: 54px;

    border: 1px solid var(--grey300);

    ::placeholder {
        color: var(--grey300);

        font-size: 12px;
        line-height: 18px;
        font-weight: 400;

        padding: 18px 26px 18px 69px;
    }
`;