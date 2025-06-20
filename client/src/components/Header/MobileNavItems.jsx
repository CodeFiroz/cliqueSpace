import { Component, Github, HelpCircle, Home, InfoIcon, MessageSquareDot, Plus } from "lucide-react";
import MobileNavItem from "./MobileNavItem";

const MobileNavItems = () => (
  <nav className="flex flex-col gap-2">
    <MobileNavItem icon={<Home size={20} />} label="Home" />
    <MobileNavItem icon={<Component size={20} />} label="Explore" />
    <MobileNavItem icon={<MessageSquareDot size={20} />} label="Updates" />
    <MobileNavItem icon={<Plus size={20} />} label="Create Community" />
    <MobileNavItem icon={<HelpCircle size={20} />} label="Help" />
    <MobileNavItem icon={<InfoIcon size={20} />} label="About App" />
    <MobileNavItem icon={<Github size={20} />} label="Github Repo" />
  </nav>
);

export default MobileNavItems