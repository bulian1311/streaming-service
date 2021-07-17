import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks";

import { Modal, Tabs, Input, Button } from "../../components";
import { Container, StyledForm } from "./auth.styled";

export const Auth = observer(() => {
  const { userStore } = useStore();
  const [activeTab, setActiveTab] = useState("Войти");

  return (
    <Modal
      isVisible={userStore.isFormVisible}
      setIsVisible={(value) => userStore.setIsFormVisible(value)}
    >
      <Container>
        <h3>Войти в приложение</h3>
        <Tabs
          tabs={["Войти", "Регистрация"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {activeTab === "Войти" ? (
          <StyledForm>
            <Input label="Email пользователя" />
            <Input label="Пароль" />
            <Button style={{ marginTop: "1rem" }} primary>
              Войти
            </Button>
          </StyledForm>
        ) : (
          <StyledForm>
            <Input label="Email пользователя" />
            <Input label="Пароль" />
            <Input label="Пароль еще раз" />
            <Button style={{ marginTop: "1rem" }} primary>
              Регистрация
            </Button>
          </StyledForm>
        )}
      </Container>
    </Modal>
  );
});
