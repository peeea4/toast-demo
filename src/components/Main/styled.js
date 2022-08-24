import styled from "styled-components";

import { BORDER, RADIUS } from "@/constants/styles";

export const MainWrapper = styled.main`
    display: flex;
    padding: 20px 40px;
`;

export const Button = styled.button`
    padding: 10px 40px;
    border-radius: ${RADIUS.border};
    background-color: transparent;
    border: ${BORDER.default};
    cursor: pointer;
`;
