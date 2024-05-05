export const getRecomendationCourse = async () => {
  try {
    const response = await fetch(
      'https://bakatanak-server.vercel.app/course',
      {
        caches: 'no-store',
      }
    );

    const res = await response.json();

    return res.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
export const getRecomendationCourseByTalent = async (id) => {
  try {
    const response = await fetch(
      `https://bakatanak-server.vercel.app/course/${id}`,
      {
        caches: 'no-store',
      }
    );
    const res = await response.json();

    return res.data;
  } catch (error) {
    throw new Error('something is wrong!', error);
  }
};
