import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import TableAdmin from '../../component/tableAdmin/TableAdmin'
import {  useState } from 'react';
type Props = {}
// props: Props
const Adminpage = () => {
    const [inpValue, setinpValue] = useState("")
    return (
        <>
            <Navbar setinpValue={setinpValue}/>
            <TableAdmin inpValue={inpValue} />
        </>
    )
}

export default Adminpage