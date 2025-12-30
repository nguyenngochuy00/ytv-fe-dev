import { useTopSearches } from "@/hooks";
import { useRouter } from "next/navigation";

export function HeaderHotSearches() {
  const { topSearches } = useTopSearches();
  const router = useRouter();

  if (topSearches.length === 0) return null;

  return (
    <div className="flex gap-8 lg:gap-12 mt-1.5">
      {/* Spacer to align with logo area */}
      <div className="w-[160px] shrink-0"></div>

      <div className="flex-1 max-w-2xl px-2">
        <div className="hidden lg:flex gap-4 text-[11px] font-medium text-blue-50/80 overflow-x-auto no-scrollbar">
          {topSearches.map((tag) => (
            <button
              key={tag}
              onClick={() =>
                router.push(`/search?q=${encodeURIComponent(tag)}`)
              }
              className="whitespace-nowrap hover:text-white transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Empty space to match user actions width */}
      <div className="shrink-0 lg:w-[150px] xl:w-[220px]"></div>
    </div>
  );
}
