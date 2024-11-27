import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import "../index.css";

export const MobileNav = () => {
  const routes = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));

  return (
    <div ref={ref} className="lg:hidden">
      <div className="fixed top-4 right-4 z-[1000]">
        <Hamburger
          toggled={isOpen}
          size={30}
          toggle={setOpen}
          color="#64FFDA"
          label="Show menu"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 top-0 w-screen h-screen z-[900] p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
          >
            <ul className="grid gap-2 mt-20">
              {routes.map((route, idx) => (
                <motion.li
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.1 + idx / 10,
                  }}
                  key={route.title}
                  className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                >
                  <a
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950"
                    href={route.href}
                  >
                    <span className="flex gap-1 text-lg abc">
                      {route.title}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
