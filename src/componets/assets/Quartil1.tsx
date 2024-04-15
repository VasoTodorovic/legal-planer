import {
  GridColDef,
  GridColumnGroupingModel
} from "@mui/x-data-grid";

export const columnsQ1: GridColDef[] = [
  { field: "q1pdv",type: 'singleSelect', valueOptions: ["Da","Ne"], headerName: "PDV", width: 90, editable:true}, 
  {
    field: "q1porezNaDobit",
    headerName: "Porez na dobit",
    width: 150, type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable:true,
  },
  {
    field: "q1ios",
    headerName: "IOS",
    width: 150,
    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable:true,
  },
  {
    field: "q1dl1",
    headerName: "dl1",
    width: 110,type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable:true,
  },
  {
    field: "q1mesecni",
    headerName: "Mesecni Izvestaj",
    width: 110,type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable:true,
  },
  { field: "q12pdv",type: 'singleSelect', valueOptions: ["Da","Ne"], headerName: "PDV", width: 90, editable:true}, 
  {
    field: "q12porezNaDobit",
    headerName: "Porez na dobit",
    width: 150, type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable:true,
  },
  {
    field: "q12ios",
    headerName: "IOS",
    width: 150,
    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable:true,
  },
  {
    field: "q12dl1",
    headerName: "dl1",
    width: 110,type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable:true,
  },
  {
    field:"q12otpad",
    headerName:"Posebni tokovi otpada i porez na imovinu ",
    type:"string",  
    editable:true,
  },
  {
    field: "q12mesecni",
    headerName: "Mesecni Izvestaj",
    width: 110,type: "string", /* 'singleSelect', valueOptions: ["Da","Ne"], */
    editable:true,
  },

  { field: "q13pdv",type: 'singleSelect', valueOptions: ["Da","Ne"], headerName: "PDV", width: 90, editable:true}, 
  {
    field: "q13porezNaDobit",
    headerName: "Porez na dobit",
    width: 150, type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable:true,
  },
  {
    field: "q13ios",
    headerName: "IOS",
    width: 150,
    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable:true,
  },
  {
    field: "q13dl1",
    headerName: "dl1",
    width: 110,type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable:true,
  },
  {
    field: "q13mesecni",
    headerName: "Mesecni Izvestaj",
    width: 110,type: "string", /* 'singleSelect', valueOptions: ["Da","Ne"], */
    editable:true,
  },

  {
    field: "q13transferne",
    headerName: "Transferne cene",
    width: 110,type: "string", /* 'singleSelect', valueOptions: ["Da","Ne"], */
    editable:true,
  },
  {
    field: "q13transferneposlato",
    headerName: "Transferne cene poslato",
    width: 110,type: "string", /* 'singleSelect', valueOptions: ["Da","Ne"], */
    editable:true,
  },
  {
    field: "q13transferneuradjeno",
    headerName: "Transferne cene uradjeno",
    width: 110,type: "string", /* 'singleSelect', valueOptions: ["Da","Ne"], */
    editable:true,
  }
];

export const columnGroupingQ1: GridColumnGroupingModel = [
  {
    groupId: "Januar",
    headerClassName: "quartil1-januar", //for css
    children: [
      { field: "q1porezNaDobit" },
      { field: "q1pdv" },
      { field: "q1ios" },
      { field: "q1dl1" },
      { field: "q1mesecni" },
    ],
  },
{
    groupId: "Februar",
    headerClassName: "quartil1-februar", //for css
    children: [
      { field: "q12porezNaDobit" },
      { field: "q12pdv" },
      { field: "q12ios" },
      { field: "q12dl1" },
    {
      field:"q12otpad",
    },
      { field: "q12mesecni" },
    ],
  },
{
    groupId: "Mart",
    headerClassName: "quartil1-mart", //for css
    children: [
      { field: "q13porezNaDobit" },
      { field: "q13pdv" },
      { field: "q13ios" },
      { field: "q13dl1" },
      { field: "q13mesecni" },
      { field: "q13transferne" },
      { field: "q13transferneposlato" },
      { field: "q13transferneuradjeno" },
    ],
  }
];

        // sx={{
        //   backgroundColor: "white",
        //   "& .quartil1-januar": {
        //     backgroundColor: "rgba(255, 7, 0, 0.55)",
        //   },
        // }}
