"use client";

import { ArrowRight, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

interface MobileNavProps {
  isAuth: boolean;
}

const MobileNav: FC<MobileNavProps> = ({ isAuth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      toggleOpen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
      toggleOpen();
    }
  };

  return (
    <div className="sm:hidden">
      <MenuIcon
        className="relative z-50 h-5 w-5 text-zinc-700"
        onClick={toggleOpen}
      />

      {isOpen ? (
        <div className="fixed animate-in slide-in-from-top-5 fade-in-20 z-0 inset-0 w-full">
          <ul className="absolute bg-white border-b border-zinc-200 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8">
            {!isAuth ? (
              <>
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/register")}
                    href="/register"
                    className="flex items-center w-full font-semibold text-green-600"
                  >
                    Get started <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </li>
                <li className="mt-3 h-px w-full bg-gray-300" />
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/login")}
                    href="/login"
                    className="flex items-center w-full font-semibold "
                  >
                    Sign in <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </li>
                <li className="mt-3 h-px w-full bg-gray-300" />
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/pricing")}
                    href="/pricing"
                    className="flex items-center w-full font-semibold "
                  >
                    Pricing <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/dashboard")}
                    href="/dashboard"
                    className="flex items-center w-full font-semibold "
                  >
                    Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </li>
                <li className="mt-3 h-px w-full bg-gray-300" />
                <li>
                  <Link
                    onClick={() => closeOnCurrent("/logout")}
                    href="/logout"
                    className="flex items-center w-full font-semibold "
                  >
                    Sign out <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MobileNav;
