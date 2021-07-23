import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../hooks';

import { Modal, Tabs, Input, Button } from '../../components';
import { Container, StyledForm } from './auth.styled';

export const Auth = observer(() => {
  const { userStore } = useStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('Войти');

  const login = async () => {
    await userStore.login(email, password);
    userStore.setIsFormVisible(false);
  };

  const registration = async () => {
    await userStore.registration(email, password);
    userStore.setIsFormVisible(false);
  };

  return (
    <Modal
      isVisible={userStore.isFormVisible}
      setIsVisible={(value) => userStore.setIsFormVisible(value)}
    >
      <Container>
        <h3>Войти в приложение</h3>
        <Tabs
          tabs={['Войти', 'Регистрация']}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === 'Войти' ? (
          <StyledForm>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email пользователя"
              type="email"
              autocomplete="on"
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Пароль"
              type="password"
            />
            <Button
              onClick={login}
              style={{ marginTop: '1rem' }}
              primary
              isLoading={userStore.isLoading}
              disabled={userStore.isLoading}
            >
              Войти
            </Button>
          </StyledForm>
        ) : (
          <StyledForm>
            <Input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              label="Email пользователя"
            />
            <Input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              label="Пароль"
            />
            <Input type="password" label="Пароль еще раз" />
            <Button
              onClick={registration}
              style={{ marginTop: '1rem' }}
              primary
              isLoading={userStore.isLoading}
              disabled={userStore.isLoading}
            >
              Регистрация
            </Button>
          </StyledForm>
        )}
      </Container>
    </Modal>
  );
});
