import { useState } from "react";

const AspectImg = ({ className, ar, src, alt, loading }) => {
  const [height, setHeight] = useState(10 + "px");
  return (
    <img
      loading={loading}
      src={src}
      alt={alt}
      className={"w-full bg-fixed bg-cover object-cover transition " + className}
      onLoad={(e) => setHeight(e.target.width / ar + "px")}
      style={{ height: height }}
    />
  );
};

export default AspectImg;
