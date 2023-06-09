import React, { useState } from "react";

import { Button, Input } from "antd";
import styled from "styled-components";

import { ChatProps, setChats, setCurrent } from "@redux/chat/chatSlice";
import { useDispatch, useSelector } from "@utils/hooks";

const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 10px;
  }
`;

const ChatPage = () => {
  const { activity, chat, auth } = useSelector((state) => state);

  const { current, chats } = chat;

  const [draftMessage, setDraftMessage] = useState<string>("");

  const dispatch = useDispatch();

  return (
    <StyledGridContainer>
      <div>
        {activity.joinedActivities.map((item) => (
          <Button
            key={item.name}
            onClick={() => {
              dispatch(setCurrent(item.id));
            }}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <div>
        {current ? (
          <>
            <h4>Group Chat</h4>
            {chats.find((chat) => chat.id === current) !== undefined &&
              chats
                .find((chat) => chat.id === current)
                ?.messages.map((item) => (
                  <div key={item.message}>
                    <b>{item.sender}</b>
                    <p>{item.message}</p>
                  </div>
                ))}
            <Input
              placeholder="message"
              value={draftMessage}
              onChange={(e) => setDraftMessage(e.currentTarget.value)}
              onPressEnter={() => {
                const doesChatExist =
                  chats.find((chat) => chat.id === current) !== undefined;

                if (doesChatExist) {
                  const newMessage = {
                    created_at: new Date().toISOString(),
                    message: draftMessage,
                    sender: auth.username,
                  };

                  dispatch(
                    setChats(
                      chats.map((chat) =>
                        (chat.id === current
                          ? {
                              ...chat,
                              messages: [...chat.messages, newMessage],
                            }
                          : chat),
                      ),
                    ),
                  );
                } else {
                  const newChat: ChatProps = {
                    id: current,
                    members: [auth.username],
                    messages: [
                      {
                        created_at: new Date().toISOString(),
                        message: draftMessage,
                        sender: auth.username,
                      },
                    ],
                    name: (
                      activity.joinedActivities.find(
                        (activity) => activity.id === current,
                      ) as any
                    ).name,
                  };
                  dispatch(setChats([...chats, newChat]));
                }

                setDraftMessage("");
              }}
            />
          </>
        ) : (
          "nothing"
        )}
      </div>
    </StyledGridContainer>
  );
};

export default ChatPage;
