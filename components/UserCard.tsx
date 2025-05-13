import { Card, CardContent } from '@/components/ui/card';
import { User } from '@/types/User';
import { Mail, Phone, Globe, User as UserIcon } from 'lucide-react';

type Props = {
  user: User | null;
};

export default function UserCard({ user }: Props) {
  if (!user) {
    return (
      <div className="text-gray-500 text-center mt-16 border shadow-lg p-26 rounded-lg">
        <p>Select a user to view their details</p>
      </div>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto rounded-2xl shadow-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200">
      <CardContent className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">

        <div className="shrink-0">
          <img
            src={user.picture.large}
            alt="User"
            className="rounded-xl w-32 h-32 object-cover border-2 border-gray-300"
          />
        </div>

        <div className="text-left w-full">
          <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <UserIcon className="w-5 h-5 text-gray-500" />
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
            <Mail className="w-4 h-4 text-gray-500" />
            {user.email}
          </p>
          <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
            <Phone className="w-4 h-4 text-gray-500" />
            {user.phone}
          </p>
          <p className="text-sm text-gray-600 mb-1 flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-500" />
            {user.location.country}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            <strong>Gender:</strong> {user.gender}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
