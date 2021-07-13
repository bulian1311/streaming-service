import styled from "styled-components";

import { ReactComponent as Icon } from "./video.svg";

export const LogoWrapper = styled.span`
display: flex;
align-items: center;
font-weight: 700;
font-size: 1.5rem;
color: var(--primary-color);
margin-right: 1rem;
`;

export const LogoIcon = styled(Icon)`
fill: var(--primary-color);
width: 50px;
height: 50px;
margin-right: 0.5rem;
`;