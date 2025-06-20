import { Link } from "react-router-dom";

const UserProfileButton = ({ mobile = false }) => (
  <Link to={"/profile"} className={`inline-flex items-center gap-2 bg-zinc-200 dark:bg-gray-800 ${
    mobile ? 'p-1.5' : 'pl-1 pr-5'
  } cursor-pointer rounded-full border border-gray-300 dark:border-zinc-700 transition-all hover:scale-95 active:scale-90`}>
    <div className="size-7 sm:size-8 bg-orange-500 text-white font-bold flex justify-center items-center rounded-full">F</div>
    {!mobile && <span className="dark:text-zinc-200 text-sm">u/firoz</span>}
  </Link>
);


export default UserProfileButton;