export interface User {
  username: string;
  socketId: string;
  avatar: string;
  password: string;
  confirmationToken: string | null;
  createdAt: Date;
}

export interface MessageType {
  sentAt: Date;
  sentBy: string;
  text: string;
  image: string;
  emoji: string;
}

export interface ChatRoomType {
  id: string;
  users: string[];
  roomName?: string;
  theme?: string | null;
  message?: MessageType[];
  latestMessage?: string | '';
}

export interface ChatInfo {
  users: string[];
  updatedAt: {
    seconds: number;
    nanoseconds: number;
  };
  theme: string;
}
