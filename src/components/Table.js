import React from "react"

import DataTable from 'react-data-table-component';
const Table = ()=>{

    return(
        <div className="mb-5   p-2">
        <TableCompnent />
        </div>
    )
}

export default Table



const TableCompnent = () => {
  const data = [
    { id: 1, name: 'John Doe', age: 28, country: 'USA' },
    { id: 2, name: 'Jane Smith', age: 34, country: 'Canada' },
    { id: 3, name: 'Sam Brown', age: 22, country: 'Australia' },
  ];

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Age',
      selector: row => row.age,
      sortable: true,
    },
    {
      name: 'Country',
      selector: row => row.country,
    },
  ];

  const customStyles = {
    table: {
      style: {
        backgroundColor: 'transparent',
        color:"gray", // تخصيص خلفية الجدول
      },
    },
      header: {
        style: {
          backgroundColor: 'transparent', // Footer background color
          // Footer text color
          fontSize: '14px', // Footer text size
          padding: '10px', // Padding for footer
          textAlign: 'center',
          color:"gray", // Align text to the center
        },
    },
    rows: {
      style: {
        backgroundColor: "transparent", 
        color:"gray",// لون خلفية الصفوف
      },
    },
    headCells: {
      style: {
        backgroundColor: "transparent", // لون خلفية رؤوس الأعمدة
        color:"gray", // لون النص في رؤوس الأعمدة
      },
    },
    cells: {
      style: {
        backgroundColor: "transparent",
        color:"gray", // لون خلفية الخلايا
      },
    },
  };
  return (
    <div className="dark:bg-slate-500/10 p-5">
      <h1>Data Table</h1>
      <DataTable
        customStyles={customStyles}
        title="User Data"
        columns={columns}
        data={data}
        striped
      />
    </div>
  );
};

