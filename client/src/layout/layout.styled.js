import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 4rem auto auto;
  gap: 0px 0px;
  grid-template-areas:
    "navbar navbar navbar"
    "sidebar body chat";
`;
