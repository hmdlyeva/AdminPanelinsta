import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'First name', width: 130 },
    { field: 'surname', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'username',
        headerName: 'User name',
        width: 160,
    },

    {
        field: 'block',
        headerName: "Block",
        width: 100,
        renderCell: (params) => (
            <button
                className="button_block"
                onClick={() => {
                }}
            >
                Block
            </button>
        ),
    },
]


import './table.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

// type Props = {}

const TableAdmin = ({ inpValue }:any) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("https://userapideployda.onrender.com/users")
            .then((res) => setUsers(res.data))
    }, []);

    console.log(users)
    let arr = users.filter((user) => user.name == inpValue)
    console.log(arr)
    return (
        <>

            {
                arr ? (
                     <div className='table_css' style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={arr}
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
                ) : <div className='table_css' style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={users}
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
            }

        </>
    )
}

export default TableAdmin