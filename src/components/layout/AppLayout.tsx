import Head from 'next/head';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

import { Footer } from '../nav/Footer';
import { Header } from '../nav/Header';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bridge</title>
      </Head>
      <div
        style={styles.container}
        id="app-content"
        className="relative flex flex-col justify-between h-full min-h-screen w-full min-w-screen bg-cover bg-center bg-back "  >
        
        <div className="hidden md:flex absolute left-[8%] top-[15%]">
          <Image src="/backgrounds/hero-thumb3.png" alt="Planet 1" width={200} height={100} priority={false} quality={50}></Image>
        </div>
        <div className="hidden md:flex absolute right-[8%] bottom-1/4">
          <Image src="/backgrounds/hero-thumb4.png" alt="Planet 2" width={220} height={100} priority={false} quality={50}></Image>
        </div>
        <Header />
        <div className="sm:px-4 mx-auto grow flex items-center max-w-screen-xl">
          <main className="w-full flex-1 my-4 flex items-center justify-center">{children}</main>
        </div>
        <Footer/>
      </div>
    </>
  );
}

const styles = {
  container: {
    backgroundImage: 'url(/backgrounds/hero-bg.png)',
    backgroundSize: '94vw',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 80px',
  },
};
