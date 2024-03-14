import Link from 'next/link';

function Footer() {
  return (
    <footer className="w-full flex flex-col bg-navy justify-between  items-center bg-pink-950 mt-14 ">
      <div className="flex h-full w-full flex-wrap md:flex-col flex-row items-center justify-between py-[5rem] md:py-12 px-[6.25%]">
        <img src="/icons/nutrify-logo-white.svg" alt="" />
        <div className="text-white flex flex-row  gap-4 items-center justify-center md:mb-5 md:mt-4 ">
          <Link href="/">Home</Link>
          <span className="w-[6px] h-[6px] bg-white rounded-full" />
          <Link href="/advice">Artikel</Link>
          <span className="w-[6px] h-[6px] bg-white rounded-full" />
          <a
            href="https://github.com/Nutrify-Dicoding"
            target="_blank">
            Tentang Kami
          </a>
        </div>
        <div className="flex flex-row items-center justify-center gap-3">
          <a href="#">
            <img src="/icons/facebook.svg" alt="" />
          </a>
          <a href="#">
            <img src="/icons/instagram.svg" alt="" />
          </a>
          <img src="/icons/x-twitter.svg" alt="" />
          <img src="/icons/envelope-regular.svg" alt="" />
        </div>
      </div>
      <div className="text-sm w-full md:flex-col bg-darknavy flex flex-row justify-between px-[6.25%] py-[1.125rem] items-center text-white-400">
        <p className="text-center opacity-80 text-white">
          2023@ All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
