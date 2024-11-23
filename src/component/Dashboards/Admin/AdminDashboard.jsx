import { Box } from "@mui/material";
import SidebarComponent from "./Sidebar";

const Dashboard = () => {
  return (
    <Box display="flex">
      {/* Sidebar */}
      <SidebarComponent />
      <Box
        flex="1"
        m="20px"
        bgcolor="#1F2A40"
        color="#ffffff"
        p="20px"
      >
        {/* Header or Content */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          {/* Your content goes here */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
