import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TableAdmin from "../tableAdmin/TableAdmin";
import AddUser from "../addUserPage/AddUser";
import PosterUsers from "../posterUsers/PosterUsers";
import { colors } from "@mui/material";
import NnotificationPage from "../notificationPage/NnotificationPage";
import BottomNav from "../bottomNav/BottomNav";
import './adminPage.css'
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const AdminPage = ({inpValue}:any) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
    <div className="adminpage" style={{ overflow: "hidden"}} >

    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height:600,
        
      }}
    >
      <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Users" {...a11yProps(0)} style={{marginTop:"15px", color:"orange" }} />
        <Tab label="Add User" {...a11yProps(1)}style={{marginTop:"10px", color:"orange" }} />
        <Tab label="Posts" {...a11yProps(2)} style={{marginTop:"10px", color:"orange" }}/>
        <Tab label="Notification" {...a11yProps(3)} style={{marginTop:"10px", color:"orange" }}/>
      
      </Tabs>
      <TabPanel value={value} index={0} >

        <TableAdmin inpValue={inpValue}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AddUser/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <PosterUsers/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NnotificationPage/>
      </TabPanel>
   
    </Box>



     </div>
     <div className="bottomnav">

    <BottomNav/>
     </div>
    </>
  );
};

export default AdminPage;
