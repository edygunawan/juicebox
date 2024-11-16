
"use client"

import dynamic from 'next/dynamic';
import Header from './components/Header';
import Content from './home/Content';
const HomeBoxAnnimation = dynamic(() => import('./home/BoxAnnimation'), { ssr: false });

export default function Home() {
  return (
    <div className="w-[390px] h-screen mx-auto">
      <Header step={0} />
      <main className="relative">
        <HomeBoxAnnimation />
        <div className="aria-labels absolute top-0 right-0 left-0 bottom-0 p-5">
          <p className="mb-8">WA businesses feel confident about future growth</p>
          <p className="text-right mb-12 pr-1">AI cant replace creativity</p>
          <p className="mb-12">Sales measure true success</p>
          <p className="text-right mb-12 pr-1">Human connection drives WA business</p>
          <p>The primary barrier to digital<br/>transformation is financial investment</p>
        </div>
        <Content />
      </main>
    </div>
  );
}
