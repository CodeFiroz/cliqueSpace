import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ icon, label, nav = "/" }) => {
  return (
    <Link
      to={nav}
      className="flex items-center gap-3 w-full p-2 hover:bg-zinc-200 dark:hover:bg-neutral-800 rounded transition-colors duration-200"
    >
      <div className="text-zinc-600 dark:text-zinc-400">
        {React.cloneElement(icon, { className: "min-w-[20px]" })}
      </div>
      <span className="text-gray-700 dark:text-zinc-300 text-sm font-medium">
        {label}
      </span>
    </Link>
  );
};

export default React.memo(NavItem);