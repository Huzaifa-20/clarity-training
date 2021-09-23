import { useState } from 'react';

import { authenticate } from '../../auth';
import CustomButton from '../../components/custom-button/CustomButton';
import './ConnectPage.scss';

const ConnectPage = () => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    if (!selected) {
      authenticate();
    }
    setSelected(!selected);
  };

  return (
    <div className="button-container">
      <CustomButton onClick={handleClick} selected={selected}>
        Connect to wallet
      </CustomButton>
    </div>
  );
};

export default ConnectPage;
