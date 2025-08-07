import React from "react";
import BootScreen from "../../components/screens/boot-screen";
import DesktopScreen from "../../components/screens/desktop-screen";
import UserSelectorScreen from "../../components/screens/user-selector-screen";

const Home = () => {
  return (
    <div className="bg-black w-full min-h-screen">
      <BootScreen />
      <UserSelectorScreen />
      <DesktopScreen />
      {/* ^^ Actual window screen  */}
    </div>
  );
};

export default Home;
