import { Search } from "lucide-react";

const DesktopSearchBar = () => (
  <div className="w-full max-w-xl p-2 rounded-full flex gap-3 items-center bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600">
    <Search size={18} className="text-zinc-600 dark:text-zinc-300 min-w-[18px]" />
    <input
      className="w-full border-0 outline-0 bg-transparent text-gray-600 dark:text-gray-300 placeholder-zinc-400 text-sm"
      type="text"
      placeholder="Search CliqueSpace"
    />
  </div>
);

export default DesktopSearchBar;