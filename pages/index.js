import Head from 'next/head';

import { Header } from '../components/Header';
import { MainVisual } from '../components/MainVisual';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My portfolio</title>
        <meta name='description' content='My portfolio' />
      </Head>

      <Header />
      <MainVisual />
    </div>
  );
}
