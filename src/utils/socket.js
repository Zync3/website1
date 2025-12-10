import io from 'socket.io-client';

const SERVER_URL = process.env.NODE_ENV === 'production'
  ? (process.env.REACT_APP_BACKEND_URL || window.location.origin)
  : 'http://localhost:3001';

let socket = null;

export const initSocket = () => {
  if (!socket) {
    socket = io(SERVER_URL);
  }
  return socket;
};

export const getSocket = () => {
  if (!socket) {
    socket = initSocket();
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};