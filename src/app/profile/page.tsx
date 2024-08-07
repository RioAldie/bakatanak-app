import Link from 'next/link';
import {
  UserCircleIcon,
  ArchiveBoxIcon,
} from '@heroicons/react/24/solid';
import ListResultConsult from '@/components/profile/listResultConsult';
import { getSession } from '@/lib/action';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { Suspense } from 'react';
import Loading from '@/components/loading';

const ProfilePage = async () => {
  const session = await getSession();
  revalidatePath('/profile');

  if (!session.isLoggedin) {
    redirect('/not-login');
  }

  return (
    <section className="pt-24 px-[6.25%] text-navy h-fit transition-all mb-20 sm:mb-20">
      <div className="border p-4 rounded-lg mt-2 flex justify-between tab:flex-col">
        <div className="flex items-center">
          <UserCircleIcon className="size-9 text-pink-500" />
          <div className="ms-3">
            <div className="font-semibold text-lg">
              {session?.username}
            </div>
            <div className="text-sm">{session?.email}</div>
          </div>
        </div>
        <div className="tab:mt-4 items-center flex gap-3 tab:justify-center">
          <Link
            href="#"
            className=" sm:p-2 bg-white-100 hidden md:flex hover:bg-white-300 rounded-lg text-sm  w-24 h-10 flex-row items-center">
            <ArchiveBoxIcon className="size-6 text-pink-500" />
            <p className="font-medium text-pink-500">Riwayat</p>
          </Link>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <ListResultConsult userId={session.userId} />
      </Suspense>
    </section>
  );
};

export default ProfilePage;
