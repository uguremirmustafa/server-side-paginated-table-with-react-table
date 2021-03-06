import Link from 'next/link';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';
import { ActiveLink } from './ActiveLink';

function Navbar() {
  const [session, loading] = useSession();

  const protectedRoutes = [
    { route: '/profile', label: 'Profil' },
    { route: '/dashboard', label: 'dashboard' },
  ];
  const normalRoutes = [
    { route: '/', label: 'Home' },
    { route: '/blog', label: 'Blog' },
  ];

  const protectedLinks = protectedRoutes.map((i) => (
    <ActiveLink href={i.route} key={i.route}>
      <a className="nav-btn">{i.label}</a>
    </ActiveLink>
  ));

  const normalLinks = normalRoutes.map((i) => (
    <ActiveLink href={i.route} key={i.route}>
      <a className="nav-btn">{i.label}</a>
    </ActiveLink>
  ));
  return (
    <nav className="bg-gray-100 shadow-sm h-16 font-bold fixed w-full flex z-index-20">
      <div className="w-full max-w-4xl mx-auto flex justify-between flex-row items-center">
        <Link href="/">
          <a>Mongo Tailwind Starter</a>
        </Link>
        <div className="flex">
          {normalLinks}
          {session && protectedLinks}
          {loading ? (
            <span className="nav-btn">...</span>
          ) : (
            <>
              {!session && (
                <a className="nav-btn bg-green-400" onClick={() => signIn()}>
                  Login
                </a>
              )}
              {session && (
                <a className="nav-btn hover:bg-red-400" onClick={() => signOut()}>
                  Logout
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
