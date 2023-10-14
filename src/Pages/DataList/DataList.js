import React from "react";
import { Container } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

import "./DataList.css";

import Login from "../Login/Login";
import AppBars from "../Components/AppBar/AppBar";

//Columns
const columns = [
  {
    field: "fullname",
    headerName: "Full Name",
    width: 200,
  },
  { field: "dob", headerName: "DoB", width: 120 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone Number", width: 160 },
  { field: "position", headerName: "Position", width: 200 },
  { field: "gift", headerName: "Gift", width: 200 },
];

//Data Rows
const rows = [
  { id: 1, dob: "10/10/2023", fullname: "Jon", age: 35 },
  { id: 2, dob: "10/10/2023", fullname: "Cersei", age: 42 },
  { id: 3, dob: "10/10/2023", fullname: "Jaime", age: 45 },
  { id: 4, dob: "10/10/2023", fullname: "Arya", age: 16 },
  { id: 5, dob: "10/10/2023", fullname: "Daenerys", age: null },
  { id: 6, dob: "10/10/2023", fullname: null, age: 150 },
  { id: 7, dob: "10/10/2023", fullname: "Ferrara", age: 44 },
  { id: 8, dob: "10/10/2023", fullname: "Rossini", age: 36 },
  { id: 9, dob: "10/10/2023", fullname: "Harvey", age: 65 },
];

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

function DataList() {
  const user = true;
  return (
    <div>
      {user === true ? (
        <>
          <AppBars />
          <Container>
            <br />
            <div style={{ width: "100%" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                slots={{
                  toolbar: CustomToolbar,
                }}
                pageSizeOptions={[5, 10, 25, 100]}
              />
            </div>
          </Container>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default DataList;
