export type User = {
  username: string;
  socketId: string;
  avatar: string;
  password: string;
  confirmationToken: string | null;
  createdAt: Date;
};

export type MessageType = {
  sentAt: Date;
  sentBy: string;
  messageText: string;
  image: string;
  emoji: string;
};

export type ChatRoomType = {
  id: string;
  users: string[];
  roomName?: string;
  theme?: string | null;
  message?: MessageType[];
  latestMessage?: string | '';
};
