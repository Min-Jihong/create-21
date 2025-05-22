tsx
import React from 'react';

type SecurePageProps = {
  children: React.ReactNode;
};

export const SecurePage: React.FC<SecurePageProps> = ({ children }) => {
  const isAuthenticated = true; // This should come from auth context

  if (!isAuthenticated) {
    return <div className='p-4 bg-red-100 text-red-700 border-l-4 border-red-500'>Please log in to view this page</div>;
  }

  return <>{children}</>;
};
