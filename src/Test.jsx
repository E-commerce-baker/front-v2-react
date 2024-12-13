import { motion } from "framer-motion";
import "../index.css";
import { useState } from "react";

function Test() {
  const [doIt, setDoIt] = useState(false);
  return (
    <div className="  relative  h-20 w-20   bg-green-600 ">
      <motion.div
        animate={{
          // x: doIt ? 1000 : 0,
          // y: doIt ? 1000 : 0,
          // opacity: doIt ? 0 : 100,
          transform: doIt ? "translate(1000px, -1000px)" : "translate(0, 0)",
        }}
        transition={{ delay: 0, type: "tween", duration: 6.2 }}
        onClick={() => {
          setDoIt(!doIt);
        }}
        className=" w-10 h-10 bg-red-900 absolute"
      >
        h
      </motion.div>
      <p className=" absolute right-0 bottom-0">U</p>

      {/* <motion.div
        animate={{
          rotate: [0, 200, 200, 0],
          x: [0, 200, 200, 0],
          opacity: [0, 100, 100, 0],
        }}
        transition={{
          //  repeat: 2,
          repeat: Infinity,
          duration: 1,
        }}
        className=" w-10 h-10 bg-red-900"
      >
        h
      </motion.div>{" "} */}
    </div>
  );
}

export default Test;

{
  /* <motion.div
drag
// drag="y"
whileHover={{ scale: 2 }}
className=" w-10 h-10 bg-red-900"
>
h
</motion.div> */
}

{
  //   /* <motion.div
  // animate={{ x: 100, scale: 1 }}
  // initial={{ scale: 0 }}
  // className=" w-10 h-10 bg-red-900"
  // >
  // h
  // </motion.div> */
}

{
  /* <motion.div
animate={{ rotate: doIt ? 360 : 0 }}
transition={{ delay: 1, type: "tween", duration: 5 }}
onClick={() => {
  setDoIt(!doIt);
}}
className=" w-10 h-10 bg-red-900"
>
h
</motion.div> */
}

{
  /* <motion.div
animate={{
  rotate: [0, 200, 200, 0],
  x: [0, 200, 200, 0],
}}
transition={{
  //  repeat: 2,
  repeat: Infinity,
  duration: 1,
}}
className=" w-10 h-10 bg-red-900"
>
h
</motion.div> */
}
