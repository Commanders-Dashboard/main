'use client'

import React, { useState } from 'react';

const classNames = (...className) => {
  return className.filter(Boolean).join(' ');
}
const Page = () => {


  const tableStuff = [
    {
      title: "CG",
      header: ['column1', 'column2', 'column3', 'column4',],
      row: [
        ['CG PERSTAT stuff1', 'CG PERSTAT stuff2', 'CG PERSTAT stuff3', 'CG PERSTATstuff4'],
        ['CG PERSTAT stuff1', 'CG PERSTAT stuff2', 'CG PERSTAT stuff3', 'CG PERSTATstuff4'],
        ['CG PERSTAT stuff1', 'CG PERSTAT stuff2', 'CG PERSTAT stuff3', 'CG PERSTATstuff4'],
        ['CG PERSTAT stuff1', 'CG PERSTAT stuff2', 'CG PERSTAT stuff3', 'CG PERSTATstuff4'],
      ]
    },
    {
      title: "SME",
      header: ['column1', 'column2', 'column3', 'column4',],
      row: [
        ['SME stuff1', 'SME stuff2', 'SME stuff3', 'SME stuff4'],
        ['SME stuff1', 'SME stuff2', 'SME stuff3', 'SME stuff4'],
        ['SME stuff1', 'SME stuff2', 'SME stuff3', 'SME stuff4'],
        ['SME stuff1', 'SME stuff2', 'SME stuff3', 'SME stuff4'],
      ]
    },
    {
      title: "TF-E",
      header: ['column1', 'column2', 'column3', 'column4',],
      row: [
        ['TF-E stuff1', 'TF-E stuff2', 'TF-E stuff3', 'TF-E stuff4'],
        ['TF-E stuff1', 'TF-E stuff2', 'TF-E stuff3', 'TF-E stuff4'],
        ['TF-E stuff1', 'TF-E stuff2', 'TF-E stuff3', 'TF-E stuff4'],
        ['TF-E stuff1', 'TF-E stuff2', 'TF-E stuff3', 'TF-E stuff4'],
      ]
    },

  ]


  // const selectedTab = (e) => {
  //   console.log(e);
  // }

  const [selectedTab, setSelectedTab] = useState(0);


  return (
    <div className="container h-screen p-4">
      <div className="text-center font-bold">Mission Driven</div>
      <div className="row">
          <div className="card card-side bg-base-100 shadow-xl h-screen m-2">
            <div className="card-body">
              <h2 className="card-title">CG PERSTAT</h2>
              <p>A nice summary</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl h-screen m-2">
            <div className="card-body">
              <h2 className="card-title">SME</h2>
              <p>SME summary</p>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl h-screen m-2">
            <div className="card-body">
              <h2 className="card-title">TF-E</h2>
              <p>SME summary</p>
            </div>
          </div>
      </div>
      <div className="row mt-5">
        {/*<table className="table">*/}
        {/*  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">*/}
        {/*  <tr>*/}
        {/*    {tableStuff.header.map((e, index) => (*/}
        {/*      <th key={e} scope="col" className={"px-6 py3 text-center"}>{e}</th>*/}
        {/*    ))}*/}
        {/*  </tr>*/}
        {/*  </thead>*/}
        {/*  <tbody>*/}
        {/*  {tableStuff.row.map((row, index) => (*/}
        {/*    <tr key={row} className={classNames(index % 2 === 0 ? "bg-gray-400" : "bg-gray-200",  "border-b dark:bg-gray-800 dark:border-gray-700 text-center text-black")}>*/}
        {/*      {row.map((rowStuff) => (*/}
        {/*        <td key={rowStuff}>{rowStuff}</td>*/}
        {/*      ))}*/}
        {/*    </tr>*/}
        {/*  ))}*/}
        {/*  </tbody>*/}
        {/*</table>*/}

      </div>
    </div>
    // <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 h-screen">
    //   <div className="mx-auto max-w2xl text-center">
    //     Mission
    //     <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
    //       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    //       <tr>
    //         {tableStuff.header.map((e, index) => (
    //           <th key={e} scope="col" className={"px-6 py3 text-center"}>{e}</th>
    //         ))}
    //       </tr>
    //       </thead>
    //       <tbody>
    //       {tableStuff.row.map((row, index) => (
    //         <tr key={row} className={classNames(index % 2 === 0 ? "bg-gray-400" : "bg-gray-200",  "border-b dark:bg-gray-800 dark:border-gray-700 text-center text-black")}>
    //           {row.map((rowStuff) => (
    //             <td key={rowStuff}>{rowStuff}</td>
    //           ))}
    //
    //         </tr>
    //       ))}
    //       </tbody>
    //     </table>
    //
    //   </div>
    // </div>
  );
}

export default Page;
