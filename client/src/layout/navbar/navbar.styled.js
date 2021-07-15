import styled from "styled-components";

export const Container = styled.div`
  grid-area: navbar;
  box-shadow: var(--shadow-light);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "nleft nmid nright";
`;

export const Left = styled.div`
  grid-area: nleft;
  width: 100%;
  justify-self: start;
  align-self: center;
  padding-left: 2rem;
  display: flex;
  align-items: center;
`;

export const Mid = styled.div`
  grid-area: nmid;
  justify-self: center;
  align-self: center;
`;

export const Right = styled.div`
  grid-area: nright;
  justify-self: end;
  align-self: center;
  padding-right: 2rem;
`;
