import React from "react";
import Statistics from "./Statistics";
import Charts from "./Charts";
import Table from "./Table";

const Dashboard =()=>{

    return(
        <div className="">
           <Statistics></Statistics>
          <Charts/>
          <Table/>
        </div>
    )
}

export default Dashboard