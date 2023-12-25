import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TableAdmin from "../tableAdmin/TableAdmin";
import AddUser from "../addUserPage/AddUser";
import PosterUsers from "../posterUsers/PosterUsers";
import NnotificationPage from "../notificationPage/NnotificationPage";

type Props = {};

const BottomNav = (props: Props) => {
  const [value, setValue] = React.useState("users");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      {/* {value && value == "users" ? (
        <TableAdmin />
      ) : value == "adduser" ? (
        <AddUser />
      ) : value == "posts" ? (
        <PosterUsers />
      ) : (
        <NnotificationPage />
      )} */}

      {value === "users" && <TableAdmin />}
      {value === "adduser" && <AddUser />}
      {value === "posts" && <PosterUsers />}
      {value === "notification" && <NnotificationPage />}
      <BottomNavigation
        sx={{ width: 500 }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label="Users"
          value="users"
            icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label="Add User"
          value="adduser"
            icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label="Posts"
          value="posts"
            icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label="Notification"
          value="notification"
          icon={<FavoriteIcon />}
        />
      </BottomNavigation>
    </>
  );
};

export default BottomNav;
