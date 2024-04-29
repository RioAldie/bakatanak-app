export const postResultConsult = async (result: object) => {
  try {
    console.log('resultArgs: ', result);
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
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('something is wrong!');
  }
};
