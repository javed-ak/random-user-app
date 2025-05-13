"use client";

import { useEffect, useState } from 'react';
import { User } from '@/types/User';
import SearchFilter from '@/components/SearchFilter';
import UserList from '@/components/UserList';
import UserCard from '@/components/UserCard';

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(res => res.json())
      .then(data => setUsers(data.results))
      .catch(err => console.error(err));
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.first.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Random User Contacts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <SearchFilter value={search} onChange={setSearch} />
          <UserList users={filteredUsers} onSelect={setSelectedUser} />
        </div>
        <div className='flex justify-center items-center'>
          <UserCard user={selectedUser} />
        </div>
      </div>
    </div>
  );
}