import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import './Example.css'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 10px 10px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [ navHeight, setNavHeight ] = React.useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={navHeight && "nav__height"}
      ref={containerRef}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation toggle={() => {
        toggleOpen();
        setNavHeight(!navHeight)
      }}/>
      <MenuToggle toggle={() => {
        toggleOpen();
        setNavHeight(!navHeight)
      }} />
    </motion.nav>
  );
};
