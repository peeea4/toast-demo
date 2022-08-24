import styled from "styled-components";

import { BORDER, COLOR, FONT_SIZE } from "@/constants/styles";

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;
    background-color: ${COLOR.header};
    border-bottom: ${BORDER.default}; ;
`;

export const Title = styled.h1`
    font-size: ${FONT_SIZE.heading};
`;
