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

    if (!res.ok) {
      throw new Error('something is wrong!');
      return false;
    }
    const data = await res.json();
    return true;
  } catch (error) {
    console.log(error);
    throw new Error('something is wrong!');
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
