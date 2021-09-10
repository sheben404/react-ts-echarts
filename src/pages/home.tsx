import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png';
import {Chart1} from '../components/chart-1';
import {Chart2} from '../components/chart-2';
import {Chart3} from '../components/chart-3';
import { Chart4 } from '../components/chart-4';

const px = (n: number) => n / 2420 * (window as any).pageWidth;

export const Home = () => {
  return (
    <div className={'home'}>
      <header style={{backgroundImage: `url(${headerBg})`, filter: `blur(50px)`}}></header>
      <div className={'home-header-name'}>可视化项目</div>
      <main>
        <section className="section1">
          <Chart1/>
          <Chart2/>
        </section>
        <section className={'section2'}>
          <Chart3/>
          <Chart4/>
        </section>
        <section className={'bordered section3'}></section>
        <section className={'bordered section4'}></section>
        <section className={'bordered section5'}></section>
      </main>
      <footer>sheben</footer>
    </div>
  );
};
