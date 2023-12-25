import React from "react";
import Navbar from "../../component/navbar/Navbar";
import TableAdmin from "../../component/tableAdmin/TableAdmin";
import { useState } from "react";
import AdminPage from "../../component/adminPage/AdminPage";
type Props = {};
// props: Props
const Adminpage = () => {
  const [inpValue, setinpValue] = useState("");
  return (
    <>
      <Navbar setinpValue={setinpValue} />
      <div className="container">
      <AdminPage inpValue={inpValue}/>
        {/* <TableAdmin inpValue={inpValue} /> */}
      </div>
    </>
  )
}

export default Adminpage;
