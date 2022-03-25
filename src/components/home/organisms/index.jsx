import React from 'react';
import Button from '../atoms/button/button';
import WelcomeText from '../atoms/welcome-text/WelcomeText';
import './index.css';

const Home = () => {
  return (
    <section className='home'>
      <div className='home--left-panel'>
        <WelcomeText />
      </div>
      <div className='home--right-panel'>
        <Button />
      </div>
    </section>
  );
};

Home.displayName = 'Home';
export default React.memo(Home);
