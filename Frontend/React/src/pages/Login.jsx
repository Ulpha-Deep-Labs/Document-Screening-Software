import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { img1 } from "../assets/img";
import MotionDiv from "../components/utils/MotionDiv";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
  };
  useEffect(() => {
    document.title = "MSM - Login";
  }, []);
  return (
    <MotionDiv className={"lg:px-0 grid grid-cols-1 lg:grid-cols-3"}>
      <div
        style={{ background: `url('${img1}') fixed`, backgroundSize: "contain" }}
        className={"hidden lg:block h-full w-full bg-fixed "}
      ></div>
      <section className="px-6 lg:col-span-2 py-20">
        <div className=" mb-12">
          <h1 className="lg:py-6 text-3xl lg:text-4xl font-bold text-center">
            Sign in to MSM <br />
            <small className="text-sm text-rose-400">Welcome back, login to continue</small>
          </h1>
        </div>
        <form
          className=" max-w-md mx-auto my-12"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label
            className="text-sm font-semibold text-zinc-600"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="rounded-lg transition w-full border-2 focus:invalid:border-orange-500 focus:border-rose-500 outline-none p-2 mt-2 mb-8"
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
            Password
          </label>
          <input
            className="rounded-lg transition w-full border-2 focus:invalid:border-orange-500 focus:border-rose-500 outline-none p-2  mt-2"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full flex justify-center items-center bg-rose-500 text-rose-50 font-bold text-lg rounded-full py-3 mb-8 mt-12 px-6">
            {!loading && "Login"}
            {loading && <ArrowPathIcon className="h-7 animate-spin" />}
          </button>
          <div className="flex flex-col md:flex-row gap-4 font-medium text-zinc-800">
            <Link
              to="/signup"
              className="w-full text-center border text-lg font-bold rounded-full py-3 transition hover:border-zinc-800"
            >
              Create Account
            </Link>
            <Link
              to="/"
              className="w-full text-center text-lg py-3 underline hover:text-rose-500 transition"
            >
              Forgot Password
            </Link>
          </div>
        </form>
      </section>
    </MotionDiv>
  );
};

export default Login;
