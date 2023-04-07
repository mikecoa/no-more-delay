import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { activityData } from "@utils/data";

export interface ChatProps {
  members: string[];
  messages: {
    message: string;
    created_at: string;
    sender: string;
  }[];
  id: number;
  name: string
}

const initialState: { current?: number; chats: ChatProps[] } = {
  chats: [
    {
      id: 1,
      members: ["Spongebob", "Sandy"],
      messages: [
        {
          created_at: new Date().toISOString(),
          message: "Hey guys, when do we go?",
          sender: "Spongebob",
        },
        {
          created_at: new Date().toISOString(),
          message: "Probably tomorrow!",
          sender: "Sandy",
        },
      ],
      name: activityData[0].name,
    },
  ],
};

export const chatSlice = createSlice({
  initialState,
  name: "chat",
  reducers: {
    clearChat: () => initialState,
    setChats: (state, action: PayloadAction<ChatProps[]>) => ({
      ...state,
      chats: action.payload,
    }),
    setCurrent: (state, action: PayloadAction<number>) => ({
      ...state,
      current: action.payload,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { clearChat, setChats, setCurrent } = chatSlice.actions;

export default chatSlice.reducer;
