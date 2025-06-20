import { Moon } from "lucide-react";

const ThemeToggleButton = ({ mobile = false }) => (
  <button 
    className={`inline-flex gap-2 ${
      mobile ? 'justify-between items-center px-3 py-2' : 'size-10  justify-center items-center'
    } bg-zinc-200 dark:bg-gray-800 cursor-pointer rounded-full border border-gray-300 dark:border-zinc-500 text-gray-600 dark:text-gray-300 transition-all hover:scale-95 active:scale-90`}
    aria-label="Toggle dark mode"
  >
    <Moon size={20} className="stroke-[1.5]" />
    {mobile && <span className="text-sm">Dark Mode</span>}
  </button>
);


export default ThemeToggleButton