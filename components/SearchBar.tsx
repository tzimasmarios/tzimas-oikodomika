'use client';
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const q = searchParams.get('q') || '';

  function onChange(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) params.set('q', value); else params.delete('q');
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <input
      placeholder="Αναζήτηση…"
      defaultValue={q}
      onChange={(e)=> onChange(e.target.value)}
      className="border rounded-lg px-3 py-2 bg-white min-w-[220px]"
    />
  );
}
