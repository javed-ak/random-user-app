import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { User } from '@/types/User';

type Props = {
  users: User[];
  onSelect: (user: User) => void;
};

export default function UserList({ users, onSelect }: Props) {
  return (
    <ScrollArea className="h-[500px] border rounded-lg p-2">
      {users.map(user => (
        <div
          key={user.login.uuid}
          className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded cursor-pointer"
          onClick={() => onSelect(user)}
        >
          <Avatar>
            <AvatarImage src={user.picture.thumbnail} alt="avatar" />
          </Avatar>
          <span>{user.name.first} {user.name.last}</span>
        </div>
      ))}
    </ScrollArea>
  );
}
