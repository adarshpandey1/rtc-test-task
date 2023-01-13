import React from 'react';
import { AppBar } from '@mui/material';
import { StyledLogo } from './Styled';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <AppBar sx={{ width: '100%', height: '70px', backgroundColor: '#1976d2' }}>
        <StyledLogo
          src="https://moodle.rtctek.com/pluginfile.php/1/core_admin/logocompact/300x300/1670219114/RTC_NewLogo.jpeg"
          onClick={() => navigate('/')}
        />
      </AppBar>
    </>
  );
};

export default Header;
