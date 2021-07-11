import styled from "styled-components";

export const Container = styled.div`
  grid-area: navbar;
  height: 3rem;
  box-shadow: 0 3px 21px rgb(117 117 117 / 8%);

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "nleft nmid nright";
`;

export const Left = styled.div`
  grid-area: nleft;
  justify-self: start;
  align-self: center;
  padding-left: 2rem;
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
