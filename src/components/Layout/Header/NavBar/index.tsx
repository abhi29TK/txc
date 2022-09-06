import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar } from "../NavBar/navBar.styles";

type Props = {
  open: boolean;
  onOpen: () => void;
};

const NavBar: React.FC<Props> = ({ open, onOpen }) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={onOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ fontFamily: "Share Tech Mono, monospace" }}
        >
          TXC
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
