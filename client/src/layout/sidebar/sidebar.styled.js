import styled from 'styled-components';
import { Colors } from 'bulian-ui';

export const Container = styled.div`
  grid-area: sidebar;
  box-shadow: ${Colors.shadowLightColor};

  display: grid;
  grid-template-columns: ${(props) => (props.isVisible ? '12rem' : '4rem')};
  grid-template-rows: 4rem 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    'sidebar-header'
    'sidebar-one'
    'sidebar-two';
`;

export const SidebarHeader = styled.div`
  grid-area: sidebar-header;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const SidebarOne = styled.div`
  grid-area: sidebar-one;
  display: ${(props) => (props.isVisible ? 'block' : 'none')};
`;

export const SidebarTwo = styled.div`
  grid-area: sidebar-two;
  ${(props) => (props.isVisible ? 'block' : 'none')}
`;

export const LinksGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SidebarLink = styled.a`
  padding: 1rem;
  color: ${Colors.textColor};
  cursor: pointer;

  :hover {
    background-color: ${Colors.secondaryColor};
  }
`;
