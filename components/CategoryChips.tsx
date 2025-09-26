'use client';
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function CategoryChips({ categories }: { categories: {id:string,label:string}[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const active = searchParams.get('cat');

  function setCat(id?: string) {
    const params = new URLSearchParams(searchParams);
    if (!id) params.delete('cat'); else params.set('cat', id);
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-wrap gap-2">
      <button onClick={()=>setCat(undefined)} className={`px-3 py-2 rounded-full border ${!active?'bg-black text-white':''}`}>Όλα</button>
      {categories.map(c => (
        <button key={c.id} onClick={()=>setCat(c.id)} className={`px-3 py-2 rounded-full border ${active===c.id?'bg-black text-white':''}`}>{c.label}</button>
      ))}
    </div>
  );
}
