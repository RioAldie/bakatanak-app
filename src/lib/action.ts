'use server';
import { getIronSession } from 'iron-session';
import { SessionData, defaultSession, sessionOption } from './lib';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { error } from 'console';

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
  session.gender = user.data.gender;
  session.age = user.data.age;

  await session.save();

  redirect('/profile');
};

export const register = async (
  prevState: { error: undefined | string },
  formData: FormData
) => {
  const formEmail = formData.get('email') as string;
  const formPassword = formData.get('password') as string;
  const formUsername = formData.get('username') as string;
  const formPassword2 = formData.get('confirm password') as string;
  const formGender = formData.get('gender') as string;
  const formAge = formData.get('age');

  if (formPassword !== formPassword2) {
    return {
      error: 'konfirmasi kata sandi tidak tepat!',
    };
  }

  const res = await fetch(
    'https://bakatanak-server.vercel.app/auth/signup',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: formEmail,
        password: formPassword,
        username: formUsername,
        gender: formGender,
        age: formAge,
      }),
    }
  );

  if (res.status === 306) {
    return { error: 'email sudah digunakan' };
  }

  if (res.status >= 400) {
    return { error: 'login gagal' };
  }

  redirect('/login');
};

export const logout = async () => {
  const session = await getSession();

  session.destroy();
  redirect('/');
};
