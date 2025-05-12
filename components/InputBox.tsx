import { useState } from "react";
import { Input } from "./ui/input";

export default function () {
    const [search, setSearch] = useState('');
    return (
        <Input
            placeholder="Search by first name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="mb-4"
        />
    )
}