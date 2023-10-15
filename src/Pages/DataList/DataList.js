import React, { useState, useContext } from "react";
import { Container } from "@mui/material";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import "./DataList.css";
import { authContext } from "../Components/contexts/auth.context";
import Login from "../Login/Login";
import AppBars from "../Components/AppBar/AppBar";


// const callFetchData = async () => {
//   try {
//     const data = await fetchData();
//     if(data.success) {
//       return data.forms;
//     } else {
//       console.log(data.message);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

function DataList() {
  var userSession = "";
  if (sessionStorage.getItem("username") == null) {
    window.location.assign("/login")
  } else {
    userSession = sessionStorage.getItem('username');
  }

  const { fetchData } = useContext(authContext);
  // debugger;
  var fetchedData;
  
  // console.log(1);
  const callFetchData = () => {
    try {
      const data = fetchData();
      if(data.success) {
        // fetchedData = data.forms;
        console.log('Data fetched successfully:', data.forms);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  callFetchData();
  // console.log(2);
  // if(fetchedData) console.log(fetchData)
  
  // console.log(fetchedData.forms);

  //Columns
  const columns = [
    { field: "fullname",headerName: "Full Name", width: 200, },
    { field: "dob", headerName: "DoB", width: 120 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone Number", width: 160 },
    { field: "position", headerName: "Position", width: 200 },
    { field: "createdAt", headerName: "Created Date", width: 200 },
    { field: "gift", headerName: "Gift", width: 200 },
  ];

  //Data Rows
  const rows = [
    { id: 1, dob: "11/10/2023", fullname: "Jon", age: 35, email: "jon@gmail.com" },
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
        <GridToolbarExport/>
      </GridToolbarContainer>
    );
  }

  

  const user = true;
  return (
    <div>
      {user === true ? (
        <>
          <AppBars />
          <h2 style={{ padding: '10px 24px 0 24px' }}>Username: {userSession}</h2>
          <Container>
            <br />
            <div style={{ width: "100%" }}>
              <DataGrid
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
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default DataList;
