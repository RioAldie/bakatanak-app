'use server';

export const postResultConsult = async (result: object) => {
  try {
    const res = await fetch(
      'https://bakatanak-server.vercel.app/consult/save',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(result),
      }
    );

    if (res.status >= 300) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
};
export const getResultByUser = async (userId: string) => {
  try {
    if (userId === '') {
      return [];
    }
    const res = await fetch(
      'https://bakatanak-server.vercel.app/consult/history',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId }),
      }
    );

    const result = await res.json();
    return result.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
export const getResultDetailByID = async (id: string) => {
  try {
    if (id === '') {
      return [];
    }
    const res = await fetch(
      `https://bakatanak-server.vercel.app/consult/result/${id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const result = await res.json();
    return result.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
export const deleteResult = async (id: string) => {
  try {
    const res = await fetch(
      'https://bakatanak-server.vercel.app/consult/',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resultId: id }),
      }
    );
    if (res.status === 200) {
      return true;
    }

    return false;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
