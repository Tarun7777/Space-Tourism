import React from 'react';
import Button from '../atoms/button/button';
import WelcomeText from '../atoms/welcome-text/WelcomeText';
import './index.css';

const Home = () => {
  return (
    <section className='home'>
      <WelcomeText />
      <Button />
    </section>
  );
};

Home.displayName = 'Home';
export default React.memo(Home);
