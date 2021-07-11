import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;
  background-color: #392e5c;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "fleft fmid fright";
`;

export const Left = styled.div`
  grid-area: fleft;
  justify-self: start;
  align-self: center;
  padding-left: 2rem;
`;

export const Mid = styled.div`
  grid-area: fmid;
  justify-self: center;
  align-self: center;
`;

export const Right = styled.div`
  grid-area: fright;
  justify-self: end;
  align-self: center;
  padding-right: 2rem;
`;
