// ContextTable.js
import React, { useContext } from "react";
import CellContext from "./cellContext";

const Table = ({ children }) => (
  <table>
    {children}
  </table>
);

const TableHead = ({ children }) => {
  const contextValue = {
    variant: "head",
  };

  return (
    <CellContext.Provider value={contextValue}>
      <thead>
        {children}
      </thead>
    </CellContext.Provider>
  );
};

const TableBody = ({ children }) => {
  const contextValue = {
    variant: "body",
  };
  return (

    <CellContext.Provider value={contextValue}>
      <tbody>
        {children}
      </tbody>
    </CellContext.Provider>
  );
};

const TableRow = ({ children }) => (
  <tr>
    {children}
  </tr>
);

const TableCell = ({ children }) => {
  const ctx = useContext(CellContext);

  return (
    ctx.variant === "head" ? (
      <th>
        {children}
      </th>
    ) : (
      <td>
        {children}
      </td>
    )
  );
};

const ContextTable = () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>No</TableCell>
        <TableCell>이름</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>1</TableCell>
        <TableCell>홍길동</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>2</TableCell>
        <TableCell>아무개</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);

export default ContextTable;
