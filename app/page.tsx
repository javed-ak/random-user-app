"use client"

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function RandomUserApp() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  async function fetchUser () {
    
  }

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
        {/* Left Side: Filter + Contact List */}
        <div>
          <Input
            placeholder="Search by first name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="mb-4"
          />

          <ScrollArea className="h-[500px] border rounded-lg p-2">
            {filteredUsers.map(user => (
              <div
                key={user.login.uuid}
                className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer"
                onClick={() => setSelectedUser(user)}
              >
                <Avatar>
                  <AvatarImage src={user.picture.thumbnail} alt="avatar" />
                </Avatar>
                <span>{user.name.first} {user.name.last}</span>
              </div>
            ))}
          </ScrollArea>
        </div>

        {/* Right Side: User ID Card */}
        <div>
          {selectedUser ? (
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <img
                  src={selectedUser.picture.large}
                  alt="User"
                  className="rounded-full w-32 h-32 mb-4"
                />
                <p className="text-xl font-semibold mb-2">
                  {selectedUser.name.title} {selectedUser.name.first} {selectedUser.name.last}
                </p>
                <p><strong>Gender:</strong> {selectedUser.gender}</p>
                <p><strong>Email:</strong> {selectedUser.email}</p>
                <p><strong>Phone:</strong> {selectedUser.phone}</p>
                <p><strong>Country:</strong> {selectedUser.location.country}</p>
              </CardContent>
            </Card>
          ) : (
            <div className="text-gray-500 text-center mt-16">
              <p>Select a user to view their details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
