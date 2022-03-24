import React from 'react';
import WelcomeText from '../atoms/welcome-text/WelcomeText';
import './index.css';

const Home = () => {
  return (
    <section className='home'>
      <WelcomeText />
    </section>
  );
};

Home.displayName = 'Home';
export default React.memo(Home);
