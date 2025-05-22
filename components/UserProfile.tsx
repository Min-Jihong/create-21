tsx
import { useState } from 'react';

type UserProfileProps = {
  userData: { email: string; name: string; },
  onUpdate: (data: { email: string; name: string; }) => Promise<void>;
};

export function UserProfile({ userData, onUpdate }: UserProfileProps) {
  const [email, setEmail] = useState(userData.email);
  const [name, setName] = useState(userData.name);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onUpdate({ email, name });
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-10 p-8 border rounded-lg shadow-sm space-y-4 bg-white'>
      <input className='w-full p-2 border rounded-md' type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
      <input className='w-full p-2 border rounded-md' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
      <button className='w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600'>Update</button>
    </form>
  );
}
