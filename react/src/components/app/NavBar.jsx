import { Link } from "react-router-dom";
import MotionDiv from "../utils/MotionDiv";

const NavBar = ({ setIsOpen }) => {
  const links = [
    { title: "home", to: "/" },
    { title: "about", to: "/about" },
    { title: "contact", to: "/contact" },
    { title: "terms & conditions", to: "/terms" },
  ];

  return (
    <MotionDiv className="bg-white text-zinc-500 font-semibold pt-10">
      <ul className={`text-2xl h-full flex flex-col gap-8 capitalize px-10`}>
        {links.map((link) => (
          <li>
            <Link
            to={link.to}
              className=" hover:text-zinc-800"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex fixed text-sm font-medium bottom-0 left-0 gap-4 w-full p-10">
        <Link
          to={"/signup"}
          className="rounded-full py-2 w-full text-center bg-rose-500 text-rose-50"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Sign up
        </Link>
        <Link
          to={"/login"}
          className="rounded-full py-2 w-full text-center border border-zinc-500"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Login
        </Link>
      </div>
    </MotionDiv>
  );
};

export default NavBar;
