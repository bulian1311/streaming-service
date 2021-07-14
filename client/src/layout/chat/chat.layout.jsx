import React, { useState } from "react";

import { Tag } from "../../components";

import {
  RightArrowIcon,
  LeftArrowIcon,
  UsersIcon,
  SmileIcon,
} from "../../icons";
import {
  Container,
  ChatHeader,
  ChatBody,
  ChatFooter,
  StyledInput,
  StyledMessage,
} from "./";

export const Chat = () => {
  const [isVisible, setIsVisible] = useState(true);

  console.log(isVisible);

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
        <Tag>
          <SmileIcon />
        </Tag>
        <Tag>
          <SmileIcon />
        </Tag>
        <StyledInput />
      </ChatFooter>
    </Container>
  );
};
