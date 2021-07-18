import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { useStore } from "../../hooks";
import { Tag, Input } from "../../components";

import {
  RightArrowIcon,
  LeftArrowIcon,
  UsersIcon,
  SmileIcon,
} from "../../icons";
import { Container, ChatHeader, ChatBody, ChatFooter, StyledMessage } from "./";

export const Chat = observer(() => {
  const { userStore } = useStore();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Container isVisible={isVisible}>
      {isVisible ? (
        <ChatHeader>
          <Tag onClick={() => setIsVisible(false)}>
            <RightArrowIcon />
          </Tag>
          <h4>Чат трансляции</h4>
          <Tag>
            <UsersIcon />
          </Tag>
        </ChatHeader>
      ) : (
        <ChatHeader>
          <Tag onClick={() => setIsVisible(true)}>
            <LeftArrowIcon />
          </Tag>
        </ChatHeader>
      )}

      <ChatBody isVisible={isVisible}>
        <StyledMessage>
          User: Message one one one one oneone oneone oneone
        </StyledMessage>
        <StyledMessage>User: Message two</StyledMessage>
        <StyledMessage>User: Message three</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
        <StyledMessage>User: message message message</StyledMessage>
      </ChatBody>
      <ChatFooter isVisible={isVisible}>
        <Tag style={{ marginRight: "0.5rem" }}>
          <SmileIcon />
        </Tag>
        <Input disabled={!userStore.isAuth} />
      </ChatFooter>
    </Container>
  );
});
