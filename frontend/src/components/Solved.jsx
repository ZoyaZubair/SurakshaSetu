import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();




function preventDefault(event) {
  event.preventDefault();
}

export default function Solved() {

  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    const token = cookies.get("POLICETOKEN");

    const configuration = {
      method: "get",
      url: "https://surakshasetu-backend.onrender.com/solved",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(configuration)
      .then((result) => {
        setRows(result.data.result);
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  },[])




  return (
    <React.Fragment>
        <br></br>
        <br></br>
        <br></br>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><b>Date</b></TableCell>
            <TableCell><b>Type</b></TableCell>
            <TableCell><b>Subject</b></TableCell>
            <TableCell><b>Description</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((rows) => (
            <TableRow key={rows.id}>
              <TableCell>{rows.date}</TableCell>
              <TableCell>{rows.type}</TableCell>
              <TableCell>{rows.subject}</TableCell>
              <TableCell>{rows.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}