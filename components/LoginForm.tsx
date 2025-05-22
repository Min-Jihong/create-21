tsx
import { useState } from 'react';

type LoginFormProps = {
  onLogin: (email: string, password: string) => Promise<void>;
};

export function LoginForm({ onLogin }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-10 p-8 border rounded-lg shadow-sm space-y-4 bg-white'>
      <input className='w-full p-2 border rounded-md' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <input className='w-full p-2 border rounded-md' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      <button className='w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'>Login</button>
    </form>
  );
}
