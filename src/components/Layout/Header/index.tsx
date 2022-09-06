import * as React from "react";
import styles from "./header.module.css";
import SideDrawer from "./SideDrawer";
import NavBar from "./NavBar";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const EmptySpace = <div style={{height: '64px'}}></div>
  return (
    <div className={styles.root}>
      <NavBar open={open} onOpen={handleDrawerOpen} />
      {EmptySpace}
      {/* <SideDrawer open={open} onClose={handleDrawerClose} /> */}
    </div>
  );
};

export default Header;
