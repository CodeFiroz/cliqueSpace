import { Code, Component, Github, HelpCircle, Home, Info, MessageSquareDot, Plus } from 'lucide-react'
import React from 'react'
import NavItem from './NavItem'

const Sidebar = () => {
  return (
    <div className="w-full h-screen">
      <div className="fixed dark:bg-neutral-900 px-12 pl-5 border-r border-zinc-300 dark:border-zinc-700 h-full">
        <nav className="border-b border-dashed border-zinc-200 py-5">
        <NavItem icon={<Home size={20} />} label="Home" />
        <NavItem icon={<Component size={20} />} label="Explore" />
        <NavItem icon={<MessageSquareDot size={20} />} label="Updates" />
        <NavItem icon={<Plus size={20} />} label="Create Community" />
      </nav>

      <nav className="border-b border-dashed border-zinc-200 py-5">
        <p className="text-xs font-host text-zinc-500 uppercase mb-3">
          Resources
        </p>
        <NavItem icon={<Github size={20} />} label="GitHub Repo" />
        <NavItem icon={<HelpCircle size={20} />} label="Help" />
        <NavItem icon={<Info size={20} />} label="About CliqueSpace" />
      </nav>

      </div>
    </div>
  );
};


export default Sidebar
