// import React from 'react'
import Menu_NavBar from "./MenuNavbar";
import Table from "./Table";

export default function DataScreen() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className=" bg-gray-900">
        <Menu_NavBar />
      </div>
      <div className=" ">
        <Table />
      </div>
    </div>
  );
}
