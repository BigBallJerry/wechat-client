interface User {
  username: string;
  socketId: string;
  avatar: string;
  password: string;
  confirmationToken: string | null;
  createdAt: Date;
}

interface Room {
  roomId: string;
  roomName: string | null;
  groupChat: boolean;
  hostAvatar: string | null;
  hostUsername: string | null;
  theme: string | null;
}
