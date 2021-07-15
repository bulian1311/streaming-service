import React, { useState } from "react";

import { Modal, Tabs } from "../../components";
import { Container } from "./auth.styled";

export const Auth = () => {
  const [activeTab, setActiveTab] = useState("Войти");

  return (
    <Modal isVisible>
      <Container>
        <h3>Войти в приложение</h3>
        <Tabs
          tabs={["Войти", "Регистрация"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Container>
    </Modal>
  );
};
