tsx
import React from 'react';

type SessionIndicatorProps = {
  isLoggedIn: boolean;
};

export const SessionIndicator: React.FC<SessionIndicatorProps> = ({ isLoggedIn }) => {
  return <div className={`p-4 text-center ${isLoggedIn ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>{isLoggedIn ? 'Logged In' : 'Logged Out'}</div>;
};
