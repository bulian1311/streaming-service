import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Icons } from 'bulian-ui';
import { useStore } from '../../hooks';

import { Search } from '../search';
import { NavLink, Logo } from '../../components';

import {
  Container,
  Left,
  Mid,
  Right,
  UserImg,
  UserContainer,
  UserSettings,
  UserSettingsLink,
  UserInfo,
  LinksGroup,
} from './navbar.styled';

export const Navbar = observer(() => {
  const { userStore } = useStore();
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const logout = async () => {
    await userStore.logout();
    setIsSettingsVisible(false);
  };

  return (
    <Container>
      <Left>
        <Logo />
        <NavLink to="/" style={{ marginRight: 10 }}>
          Ссылка раз
        </NavLink>
        <NavLink to="/">Ссылка два</NavLink>
      </Left>
      <Mid>
        <Search />
      </Mid>
      <Right>
        {userStore.isAuth ? (
          <UserContainer>
            <UserImg
              onClick={() => setIsSettingsVisible(!isSettingsVisible)}
              src="/auth/uploads/jam.jpg"
            />

            <UserSettings isVisible={isSettingsVisible}>
              <UserInfo>
                <UserImg
                  style={{ marginRight: '0.6rem' }}
                  src="/auth/uploads/jam.jpg"
                />
                <span>{userStore.user && userStore.user.username}</span>
              </UserInfo>
              <LinksGroup>
                <UserSettingsLink>
                  <Icons.SettingsIcon style={{ marginRight: '0.6rem' }} />
                  Настройки
                </UserSettingsLink>
                <UserSettingsLink onClick={logout}>
                  <Icons.LogoutIcon style={{ marginRight: '0.6rem' }} />
                  Выход
                </UserSettingsLink>
              </LinksGroup>
            </UserSettings>
          </UserContainer>
        ) : (
          <Button onClick={() => userStore.setIsFormVisible(true)} primary>
            <Icons.LoginIcon style={{ marginRight: '0.6rem' }} />
            Авторизация
          </Button>
        )}
      </Right>
    </Container>
  );
});
