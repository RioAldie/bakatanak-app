export const getRecomendationCourse = async () => {
  try {
    const response = await fetch(
      'https://bakatanak-server.vercel.app/course',
      {
        method: 'GET',
      }
    );

    const res = await response.json();

    return res.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
