tsx
import React from 'react';

type ResponsiveWrapperProps = {
  children: React.ReactNode;
};

export const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({ children }) => {
  return <div className='responsive container mx-auto p-4'>{children}</div>;
};
