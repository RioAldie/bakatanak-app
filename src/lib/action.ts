'use server';
import { getIronSession } from 'iron-session';
import { SessionData, defaultSession, sessionOption } from './lib';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const getSession = async () => {
  const session = await getIronSession<SessionData>(
    cookies(),
    sessionOption
  );
  if (!session.isLoggedin) {
    session.isLoggedin = defaultSession.isLoggedin;
  }

  return session;
};

export const login = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const session = await getSession();
  const formEmail = formData.get('email') as string;
  const formPassword = formData.get('password') as string;

  const res = await fetch(
    'https://bakatanak-server.vercel.app/auth/signin',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formEmail,
        password: formPassword,
      }),
    }
  );
  if (res.status === 401) {
    return { error: 'Password salah' };
  }
  if (res.status === 402) {
    return { error: 'email salah' };
  }
  const user = await res.json();

  session.userId = user.data.userId;
  session.username = user.data.username;
  session.isLoggedin = true;
  session.email = user.data.email;

  await session.save();

  redirect('/warning');
};

export const logout = async () => {
  const session = await getSession();

  session.destroy();
  redirect('/');
};
