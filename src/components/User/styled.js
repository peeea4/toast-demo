import styled from "styled-components";

import { FONT_SIZE } from "@/constants/styles";

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    width: 100%;
`;

export const UserName = styled.span`
    font-size: ${FONT_SIZE.titleSmall};
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`;
