import React, { useState , useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../Data"; // Replace this with actual data or API fetch
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "./Header";
import SidebarComponent from "./Sidebar";

const Team = () => {
  const [rows, setRows] = useState(mockDataTeam);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

    // Fetch data on component mount
    useEffect(() => {
      fetch("http://localhost:3300/users")
        .then((response) => response.json())
        .then((data) => setRows(data))
        .catch((error) => console.error(error));
    }, []);

  // DELETE LOGIC
  const handleDelete = (id) => {
    const updatedData = rows.filter((user) => user.id !== id);
    setRows(updatedData);

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

  // OPEN UPDATE DIALOG
  const handleUpdate = (id) => {
    const userToUpdate = rows.find((user) => user.id === id);
    setSelectedUser(userToUpdate);
    setOpen(true);
  };

  // HANDLE SAVE
  const handleSave = () => {
    const updatedData = rows.map((user) =>
      user.id === selectedUser.id ? selectedUser : user
    );
    setRows(updatedData);

    fetch(`http://localhost:5000/users/${selectedUser.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(selectedUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user");
        }
        console.log("User updated successfully");
        setOpen(false);
        setSelectedUser(null);
      })
      .catch((error) => console.error(error));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100, cellClassName: "color--cell" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
 
    {
      field: "lastName",
      headerName: "LastName",
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
              ? "#626464"
              : access === "manager"
              ? "#3F51B5"
              : "#4CAF50"
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
    <Box display="flex" sx={{ minHeight: "100vh" }}>
      <SidebarComponent />
      <Box flex="1" p="20px">
        <Header title="TEAM" subtitle="Managing the Team Members" />
        <Box
          m="40px 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": { border: "none" },
            "& .MuiDataGrid-cell": { borderBottom: "none" },
            "& .name-column--cell": { color: "#3F51B5" },
            "& .color--cell": { color: "#000000" },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#1E293B",
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": { backgroundColor: "#e7ebea" },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: "#3e4396",
            },
            "& .MuiCheckbox-root": { color: "#3F51B5 !important" },
          }}
        >
          <DataGrid checkboxSelection rows={rows} columns={columns} />
        </Box>

        {/* Update Dialog */}
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogTitle>Update User</DialogTitle>
          <DialogContent>
            <TextField
              label="Name"
              value={selectedUser?.name || ""}
              onChange={(e) =>
                setSelectedUser((prev) => ({ ...prev, name: e.target.value }))
              }
              fullWidth
              margin="normal"
            />

            <TextField
              label="LastName"
              value={selectedUser?.lastName || ""}
              onChange={(e) =>
                setSelectedUser((prev) => ({ ...prev, lastName: e.target.value }))
              }
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              value={selectedUser?.email || ""}
              onChange={(e) =>
                setSelectedUser((prev) => ({ ...prev, email: e.target.value }))
              }
              fullWidth
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleSave} color="primary" variant="contained">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Team;
