tsx
import React from 'react';

type FormInputProps = {
  type: string;
  value: string;
  onChange: (value: string) => void;
};

export const FormInput: React.FC<FormInputProps> = ({ type, value, onChange }) => {
  return (
    <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className='w-full p-2 border rounded-md' />
  );
};
