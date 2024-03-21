// components/Header.js

import Link from "next/link";
import { useUserAuth } from "../app/_utils/auth-context";

const Header = () => {
  const { firebaseSignOut } = useUserAuth();

  const signout = async () => {
    await firebaseSignOut();
  };
  return (
    <header className="bg-green-700 p-4">
      <nav className="flex items-center justify-between">
        <div>
          <Link href="/">
            <div className="text-white font-bold text-xl">Your Logo/Brand</div>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            {" "}
            <div className="text-white">Home</div>
          </Link>
          <Link href="/livestock">
            <div className="text-white">Livestock</div>
          </Link>
          <Link href="/about">
            <div className="text-white">About</div>
          </Link>
          <Link href="/data">
            <div className="text-white">Data</div>
          </Link>
          <Link href="/contact">
            <div className="text-white">Contact</div>
          </Link>
        </div>
        <button
          onClick={() => {
            signout();
          }}
        >
          Sign out
        </button>
      </nav>
    </header>
  );
};

export default Header;
