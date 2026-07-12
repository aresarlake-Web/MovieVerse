export function SkeletonCard() {
  return (
    <div className="flex flex-col animate-pulse">
      {/* Poster placeholder */}
      <div className="relative aspect-[2/3] w-full rounded-2xl bg-zinc-200" />
      {/* Meta placeholder */}
      <div className="mt-3 px-1 flex flex-col gap-2">
        <div className="h-4 bg-zinc-200 rounded-sm w-3/4" />
        <div className="flex justify-between items-center mt-1">
          <div className="h-3 bg-zinc-150 rounded-sm w-1/5" />
          <div className="h-3 bg-zinc-150 rounded-sm w-1/4" />
        </div>
      </div>
    </div>
  );
}
