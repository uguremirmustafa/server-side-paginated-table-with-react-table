import Navbar from '@components/layout/Navbar';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div>
      <Link scroll={true} href="/profile">
        profile
      </Link>
    </div>
  );
}
