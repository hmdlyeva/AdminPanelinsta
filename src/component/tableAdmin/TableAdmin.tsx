import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "./table.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsersData, getDeletedData ,DeleteUser } from "./../../redux/slice/userSlice";
import type { RootState } from "./../../redux/store/store";


const TableAdmin = ({ inpValue }: any) => {

  const dispatch = useDispatch();
  

  const Users = useSelector((state: RootState) => state.users.users);
  useEffect(() => {
    dispatch(getUsersData() as any);
  }, [dispatch]);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "First name", width: 130 },
    { field: "surname", headerName: "Last name", width: 100 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "username",
      headerName: "User name",
      width: 130,
    },
    {
      field: "email",
      headerName: "User email",
      width: 160,
    },
    {
      field: "gender",
      headerName: "User gender",
      width: 130,
    },
    {
      field: "country",
      headerName: "User country",
      width: 140,
    },
    {
      field: "ispublic",
      headerName: "User public",
      width: 120,
    },
    {
      field: "block",
      headerName: "Block",
      width: 100,
      renderCell: (params) => (
        <button className="button_block" onClick={() => {}}>
          Block
        </button>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: (params) => (
       
        <button className="button_block" onClick={() => {
          let idim = params.row.id
          dispatch(getDeletedData(idim) as any);
          dispatch(DeleteUser(idim) as any);

          console.log(idim);
        }}>
          Delete
        </button>
      ),
    },
  ];


  // console.log(inpValue);
  let arr = Users.filter((user) => user.name.toLowerCase().includes(inpValue));
  return (
    <section id="table_section" style={{border:"1px solid red"}}>
      {arr ? (
        <div className="table_css" style={{ height: 400, width: "100%" }}>
          <DataGrid
            getRowId={(row) => row.id}
            className="table"
            rows={arr}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      ) : (
        <div className="table_css" style={{ height: 400, width: "100%" }}>
          <DataGrid
           getRowId={(row) => row.id}
            rows={Users}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10, 20, 50, 100]}
            checkboxSelection
          />
        </div>
      )}
    </section>
  );
};

export default TableAdmin;
