import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.4rem 0.6rem;
  background-color: ${(props) =>
    props.isActive ? 'var(--primary-color)' : 'var(--secondary-color);'};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    background-color: ${(props) =>
      props.isActive ? 'var(--secondary-color);' : 'var(--primary-color)'};
  }
`;
