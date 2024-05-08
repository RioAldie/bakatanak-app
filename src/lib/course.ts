export const getRecomendationCourse = async () => {
  try {
    const response = await fetch(
      'https://bakatanak-server.vercel.app/course',
      {
        method: 'GET',
      }
    );
    if (response.status > 300) {
      throw new Error('Not found');
    }

    const res = await response.json();

    return res.data;
  } catch (error) {
    throw new Error('something is wrong!');
  }
};
export const getRecomendationCourseByTalent = async (id: string) => {
  try {
    const response = await fetch(
      `https://bakatanak-server.vercel.app/course/${id}`,
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
