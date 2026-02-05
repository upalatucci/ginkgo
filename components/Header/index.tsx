"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import menuData from "./menuData";

const Header = () => {
  const usePathName = usePathname();

  return (
    <>
      <header
        className={
          "header left-0 top-0 z-40 flex w-full items-center absolute bg-transparent"
        }
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="px-4 xl:mr-12">
              <Link href="/" className={"header-logo w-full flex py-8"}>
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <nav
                  className={
                    "navbar w-full bg-defaultBg right-0 z-[100] rounded border-[.5px] border-body-color/50  px-6 py-2 duration-300  md:visible md:static md:w-auto md:border-none md:!bg-transparent md:p-0 md:opacity-100 visibility top-md-full fixed md:block left-0 bottom-0 md:left-auto md:bottom-auto h-20 md:h-auto"
                  }
                >
                  <ul className="flex w-full justify-around md:justify-start md:space-x-12">
                    {menuData.map((menuItem) => (
                      <li key={menuItem.id} className="group relative">
                        <Link
                          href={menuItem.path}
                          className={`flex flex-col py-2 text-[10px] md:mr-0 md:inline-flex md:px-0 md:py-6 md:text-xs ${
                            usePathName === menuItem.path
                              ? "text-primary "
                              : "text-dark hover:text-primary "
                          }`}
                        >
                          <div className="flex h-6 w-6 mb-2 mx-auto  justify-center md:hidden">
                            {menuItem.icon}
                          </div>
                          {menuItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
