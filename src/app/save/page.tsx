import SaveFrom from '@/components/save/saveFrom';
import { getSession } from '@/lib/action';
import { redirect } from 'next/navigation';

const SavePage = async () => {
  const session = await getSession();

  if (!session.isLoggedin) {
    redirect('/not-login');
  }

  return (
    <div className="w-full min-h-screen flex items-center flex-col mt-28">
      <div className="w-96 h-96 md:p-0 p-10">
        <SaveFrom userId={session?.userId} />
      </div>
    </div>
  );
};

export default SavePage;
