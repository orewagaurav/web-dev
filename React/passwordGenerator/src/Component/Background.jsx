import React from 'react';

const Background = ({ children }) => {
  return (
    <div 
      style={{
        backgroundImage: "url('https://www.telefocal.com/TAwp/wp-content/uploads/2021/03/An-Overview-of-Cyber-Security.png')",
        backgroundSize: "cover",              
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {children}
    </div>
  );
};

export default Background;