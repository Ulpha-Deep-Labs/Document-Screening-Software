import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from "firebase/firestore";
import { motion } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { img4 } from "../assets/img";
import MotionDiv from "../components/utils/MotionDiv";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const notifForm = useRef(null);

  useEffect(() => {
    document.title = "TraderOne - Sign up";
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [accept, setAccept] = useState(true);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password == repeatPassword) {
      setLoading(true);
    }
  };

  return (
    <MotionDiv className={"lg:px-0 grid grid-cols-1 lg:grid-cols-3"}>
      <div
        style={{ background: `url('${img4}') fixed`, backgroundSize: "contain", backgroundPosition:'-50%' }}
        className={"hidden lg:block h-full w-full bg-fixed "}
      ></div>
      <section className="px-6 col-span-2 py-24">
        <h1 className="lg:py-6 text-3xl lg:text-4xl text-center font-bold">
          Create Account<br />
            <small className="text-sm text-rose-400">Welcome to My School Manager, sign up to continue</small>
        </h1>
        <form
          className=" max-w-md mx-auto my-12"
          X
          onSubmit={(e) => handleSubmit(e)}
        >
          <label
            className="text-sm font-semibold text-zinc-600"
            htmlFor="email"
          >
            First Name
          </label>
          <input
            className="rounded-lg w-full transition border-2 focus:invalid:border-orange-500 focus:border-rose-500 outline-none p-2 mt-2 mb-8"
            id="first"
            type="text"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label className="text-sm font-semibold text-zinc-600" htmlFor="last">
            Last Name
          </label>
          <input
            className="rounded-lg w-full transition border-2 focus:invalid:border-orange-500 focus:border-rose-500 outline-none p-2 mt-2 mb-8"
            id="last"
            type="text"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label
            className="text-sm font-semibold text-zinc-600"
            htmlFor="email"
          >
            Phone Number
          </label>
          <input
            className="rounded-lg w-full transition border-2 focus:invalid:border-orange-500 focus:border-rose-500 outline-none p-2 mt-2 mb-8"
            id="phone"
            type="tel"
            placeholder="+0-123-456-789"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label
            className="text-sm font-semibold text-zinc-600"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="rounded-lg w-full transition border-2 focus:invalid:border-orange-500 focus:border-rose-500 outline-none p-2 mt-2 mb-8"
            id="email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label
            className="text-sm font-semibold text-zinc-600"
            htmlFor="password"
          >
            Create Password
          </label>
          <input
            className="rounded-lg w-full transition border-2 focus:invalid:border-orange-500 focus:border-rose-500 outline-none p-2  mt-2 mb-8"
            id="password"
            type="password"
            placeholder="Password"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label
            className="text-sm font-semibold text-zinc-600"
            htmlFor="repeatpassword"
          >
            Repeat Password
          </label>
          <input
            className="rounded-lg w-full transition border-2 focus:invalid:border-orange-500 focus:border-rose-500 outline-none p-2  mt-2"
            id="repeatpassword"
            type="password"
            placeholder="Password"
            minLength={6}
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
          <div className="flex my-10 text-lg gap-4 items-center">
            <div className="w-8">
              <div
                onClick={() => setAccept(!accept)}
                className={`h-8 w-8 rounded-full  flex justify-center items-center cursor-pointer ${
                  accept ? "bg-rose-500" : "bg-zinc-300"
                } hover:bg-rose-400`}
              >
                <motion.div
                  animate={{
                    height: accept ? "16px" : "24px",
                    width: accept ? "16px" : "24px",
                  }}
                  className=" rounded-full bg-white"
                ></motion.div>
              </div>
            </div>
            <span className="text-base">
              I have read and agree to the{" "}
              <Link to={"/terms"} className="underline font-semibold">
                terms & conditions
              </Link>
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-8 font-medium text-zinc-800">
            <button className="w-full text-center flex justify-center items-center bg-rose-500 text-rose-50 font-bold text-lg rounded-full py-3">
              {!loading && "Create Account"}
              {loading && <ArrowPathIcon className="h-7 animate-spin" />}
            </button>
            <Link
              to="/login"
              className="w-full text-center border text-lg font-bold rounded-full py-3 transition hover:border-zinc-800"
            >
              Login
            </Link>
          </div>
        </form>
      </section>
    </MotionDiv>
  );
};

export default SignUp;
