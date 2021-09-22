import { useEffect } from 'react';

import { getPerson, userSession } from '../../auth';
import CustomButton from '../../components/custom-button/CustomButton';
import './HomePage.scss';

const HomePage = () => {
  useEffect(() => {
    console.log(getPerson());
  }, []);

  const handleClick = () => {
    userSession.signUserOut();
    window.location.reload();
  };

  return (
    <div className="home-container">
      <h1>HOME</h1>
      <CustomButton onClick={handleClick}>Disconnect Wallet</CustomButton>
    </div>
  );
};

export default HomePage;
