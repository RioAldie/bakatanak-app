import { SessionOptions } from 'iron-session';

export interface SessionData {
  userId?: string;
  username?: string;
  email?: string;
  password?: string;
  isLoggedin?: boolean;
  gender?: string;
  age?: number;
}

export const sessionOption: SessionOptions = {
  password: process.env.AUTH_SECRET!,
  cookieName: 'bakatanak-session',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  },
};
export const defaultSession: SessionData = {
  isLoggedin: false,
};
