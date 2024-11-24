import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../Data"; // Replace this with actual data or API fetch
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "./Header";
import SidebarComponent from "./Sidebar";

const Team = () => {
  const [rows, setRows] = useState(mockDataTeam);

  // DELETE LOGIC
  const handleDelete = (id) => {
    // Remove user locally
    const updatedData = rows.filter((user) => user.id !== id);
    setRows(updatedData);

    // Backend API call for deletion
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete user");
        }
        console.log("User deleted successfully");
      })
      .catch((error) => console.error(error));
  };

  // UPDATE LOGIC
  const handleUpdate = (id) => {
    const userToUpdate = rows.find((user) => user.id === id);

    // Prompt user for new data (replace with a modal/form in a real app)
    const updatedName = window.prompt("Enter new name:", userToUpdate.name);
    const updatedEmail = window.prompt("Enter new email:", userToUpdate.email);

    if (!updatedName || !updatedEmail) return; // Cancel if no input

    // Update user locally
    const updatedData = rows.map((user) =>
      user.id === id ? { ...user, name: updatedName, email: updatedEmail } : user
    );
    setRows(updatedData);

    // Backend API call for updating user
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: updatedName, email: updatedEmail }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user");
        }
        console.log("User updated successfully");
      })
      .catch((error) => console.error(error));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      cellClassName: "color--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      cellClassName: "color--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      cellClassName: "color--cell",
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          bgcolor={
            access === "admin"
              ? "#3da58a"
              : access === "manager"
              ? "#2e7c67"
              : "#4caf50"
          }
          borderRadius="4px"
        >
          {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          {access === "manager" && <SecurityOutlinedIcon />}
          {access === "user" && <LockOpenOutlinedIcon />}
          <Typography color={"#e0e0e0"} sx={{ ml: "5px" }}>
            {access}
          </Typography>
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => (
        <Box display="flex" justifyContent="space-around" width="100%">
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleUpdate(row.id)}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box
      display="flex"
      sx={{ backgroundColor: "#1F2A40", minHeight: "100vh" }}
    >
      {/* Sidebar */}
      <SidebarComponent />
      <Box flex="1" p="20px">
        {/* Header */}
        <Header title="TEAM" subtitle="Managing the Team Members" />

        {/* DataGrid */}
        <Box
          m="40px 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: "#94e2cd",
            },
            "& .color--cell": {
              color: "#ffffff",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#222447",
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: "#1F2A40",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: "#3e4396",
            },
            "& .MuiCheckbox-root": {
              color: "#b7ebde !important",
            },
          }}
        >
          <DataGrid checkboxSelection rows={rows} columns={columns} />
        </Box>
      </Box>
    </Box>
  );
};

export default Team;
