// Admin Page Layout

import React from 'react';
import Sidebar from './sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-3">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;