import { Code, Component, Github, HelpCircle, Home, Info, MessageSquareDot, Plus } from 'lucide-react';
import React from 'react';
import NavItem from './NavItem';

const navItems = [
  {
    main: [
      { icon: <Home size={20} />, label: "Home", nav: "/" },
      { icon: <Component size={20} />, label: "Explore" },
      { icon: <MessageSquareDot size={20} />, label: "Updates" },
      { icon: <Plus size={20} />, label: "Create Community", nav: "/create-community" }
    ],
    resources: [
      { icon: <Github size={20} />, label: "GitHub Repo" },
      { icon: <HelpCircle size={20} />, label: "Help" },
      { icon: <Info size={20} />, label: "About CliqueSpace" }
    ]
  }
];

const Sidebar = () => {
  return (
    <aside className="lg:block hidden fixed h-full w-[300px] dark:bg-neutral-900 px-5 border-r border-zinc-300 dark:border-zinc-700">
      <nav className="border-b border-dashed border-zinc-200 dark:border-zinc-700 py-5">
        {navItems[0].main.map((item, index) => (
          <NavItem key={`main-${index}`} icon={item.icon} label={item.label} nav={item.nav} />
        ))}
      </nav>

      <nav className="border-b border-dashed border-zinc-200 dark:border-zinc-700 py-5">
        <p className="text-xs font-host text-zinc-500 dark:text-zinc-400 uppercase mb-3">
          Resources
        </p>
        {navItems[0].resources.map((item, index) => (
          <NavItem key={`resources-${index}`} icon={item.icon} label={item.label} nav={item.nav} />
        ))}
      </nav>
    </aside>
  );
};

export default React.memo(Sidebar);