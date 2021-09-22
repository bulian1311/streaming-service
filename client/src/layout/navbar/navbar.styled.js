import styled from 'styled-components';
import { Colors } from 'bulian-ui';

export const Container = styled.div`
  grid-area: navbar;
  box-shadow: ${Colors.shadowLightColor};

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'nleft nmid nright';
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

export const UserContainer = styled.div`
  position: relative;
`;

export const UserImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const UserSettings = styled.div`
  position: absolute;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${Colors.secondaryColor};
  right: 0;
  border-radius: 4px;
  overflow: hidden;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const LinksGroup = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const UserSettingsLink = styled.a`
  padding: 0.6rem;
  color: ${Colors.textColor};
  cursor: pointer;
  border-radius: 4px;

  :hover {
    background-color: ${Colors.primaryColor};
  }
`;
