import React from "react";
import { Link } from "react-router-dom"

const MobileNavItem = ({ nav = "/", icon, label }) => (
  <Link to={nav} className="flex items-center gap-3 p-2 rounded-md hover:bg-zinc-200 dark:hover:bg-neutral-800">
    <div className="text-zinc-600 dark:text-zinc-300">
      {React.cloneElement(icon, { size: 20 })}
    </div>
    <span className="text-gray-700 dark:text-gray-300">{label}</span>
  </Link>
);

export default MobileNavItem