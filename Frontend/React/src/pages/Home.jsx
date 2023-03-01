// init framer
import MotionDiv from "../components/utils/MotionDiv";
import AspectImg from "../components/utils/AspectImg";

// components

import { useEffect } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ClockIcon,
  FireIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { img1 } from "../assets/img";

const Home = () => {
  useEffect(() => {
    document.title = "MSM - Home";
  }, []);
  return <MotionDiv></MotionDiv>;
};

export default Home;
