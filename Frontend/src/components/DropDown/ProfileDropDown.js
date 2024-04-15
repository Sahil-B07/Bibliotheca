import { DropdownMenu, Theme } from "@radix-ui/themes";
import { useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import Circle from "../Spinner/Circle";
import { AnimatePresence, motion } from "framer-motion";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ProfileDropDown = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const logout = (e) => {
    e.preventDefault();
    setLoading(!loading);
    Cookies.remove("authToken");
    toast.success("Logged Out Successfully!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      delay:1500
    });
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  };

  const ExitIcon = () => {
    return (
      <AnimatePresence>
        <motion.div exit={{ opacity: 0 }} transition={{ duration: 1 }}>
          <FiLogOut />
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <Theme accentColor="plum" asChild>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div>
            <PiUserCircleLight className="ml-1 scale-[2] cursor-pointer rounded-full fill-zinc-300 p-[1px] transition-colors duration-500 ease-in-out hover:border-white hover:fill-zinc-500" />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          sideOffset={15}
          align="end"
          variant="soft"
          forceMount={loading}
        >
          <DropdownMenu.Item className="cursor-pointer">
            Profile
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item
            className="cursor-pointer"
            shortcut={!loading ? <ExitIcon /> : <Circle />}
            color="red"
            onClick={logout}
            disabled={loading}
          >
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Theme>
  );
};

export default ProfileDropDown;
