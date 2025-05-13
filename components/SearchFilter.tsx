import { Input } from '@/components/ui/input';

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchFilter({ value, onChange }: Props) {
  return (
    <Input
      placeholder="Search by first name..."
      value={value}
      onChange={e => onChange(e.target.value)}
      className="mb-4"
    />
  );
}
