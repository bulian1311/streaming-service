import styled from "styled-components";

export const Container = styled.div`
  grid-area: chat;
  height: calc(100vh - 4rem);

  display: grid;
  grid-template-columns: ${(props) => (props.isVisible ? "20rem" : "4rem")};
  grid-template-rows: 0.3fr 2.4fr 0.3fr;
  gap: 0px 0px;
  grid-template-areas:
    "chat-header"
    "chat-body"
    "chat-footer";
`;

export const ChatHeader = styled.div`
  grid-area: chat-header;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const ChatBody = styled.div`
  grid-area: chat-body;
  padding: 0 1rem;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  overflow-y: auto;
  flex-direction: column;
  flex-flow: column-reverse;
`;

export const ChatFooter = styled.div`
  grid-area: chat-footer;
  align-self: center;
  position: relative;
  align-self: center;
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const StyledInput = styled.input`
  padding: 0.4rem 0.5rem;
  background-color: var(--bg-color);
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  color: var(--text-color);

  :focus {
    border: 1px solid var(--primary-color);
  }
`;

export const StyledMessage = styled.span`
  font-size: 14px;
  margin-top: 0.5rem;
`;
