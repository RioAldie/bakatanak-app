import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface navLinkProps {
  path: string;
  name: string;
  setActive: (active: boolean) => void;
}
const Navlink = (props: navLinkProps) => {
  const router = usePathname();
  const { path, name, setActive } = props;

  const linkStyle = {
    active:
      'block py-2 px-4 text-white bg-pink-700 rounded md:bg-pink-600 md:text-white ',
    notActive:
      'block py-2 px-4 text-gray-800  rounded hover:bg-pink-800 hover:text-white',
  };
  return (
    <li>
      <Link
        href={path}
        onClick={() => setActive(false)}
        className={
          router === path ? linkStyle.active : linkStyle.notActive
        }
        aria-current="page">
        {name}
      </Link>
    </li>
  );
};

export default Navlink;
