import { create } from "zustand";

interface Message {
  author: string;
  message: string;
}

interface MessageStore {
  messages: Message[];
  appendNewMessage: (message: Message) => void;
}

const useMessageStore = create<MessageStore>((set) => ({
  messages: [],
  appendNewMessage: (message: Message) =>
    set((state: { messages: any }) => ({
      messages: [
        ...state.messages,
        {
          author: message.author,
          message: message.message,
        },
      ],
    })),
}));

export default useMessageStore;
