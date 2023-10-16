/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import { Container } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import "./DataList.css";
import { authContext } from "../Components/contexts/auth.context";
import AppBars from "../Components/AppBar/AppBar";

function DataList() {
  let fetchedData;
  var userSession = "";
  const { fetchData } = useContext(authContext);
  const [rows, setRows] = useState([]);

  if (sessionStorage.getItem("username") == null) {
    window.location.assign("/login");
  } else {
    userSession = sessionStorage.getItem("username");
  }

  //Fetch the data
  useEffect(() => {
    const callFetchData = async () => {
      fetchedData = await fetchData();
      try {
        if (fetchedData.success) {
          console.log("Data fetched successfully:", fetchedData.forms);
          return setRows(fetchedData.forms);
        } else {
          console.log(fetchedData.message);
        }
      } catch (error) {
        console.log(error);
      }
    };
    callFetchData();
    setRows(fetchedData);
  }, []);

  //Columns
  const columns = [
    { field: "fullName", headerName: "Full Name", width: 200 },
    { field: "dob", headerName: "DoB", width: 120 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone Number", width: 160 },
    { field: "position", headerName: "Position", width: 200 },
    { field: "createdAt", headerName: "Created Date", width: 200 },
    { field: "gift", headerName: "Gift", width: 200 },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  return (
    <div>
      <AppBars />
      <h2 style={{ padding: "10px 24px 0 24px" }}>Username: {userSession}</h2>
      <Container>
        <br />
        <div style={{ width: "100%" }}>
          <DataGrid
            getRowId={(rows) => rows._id}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            slots={{
              toolbar: CustomToolbar,
            }}
            pageSizeOptions={[5, 10, 25, 100]}
          />
        </div>
      </Container>
    </div>
  );
}

export default DataList;
