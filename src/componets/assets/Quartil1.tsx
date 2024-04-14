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
];
export const rows = [
  { id: 1, "quartil1.pdv": "da", "q1poreznadobit": "ne", "q1ios": "da", "q1dl1": "ne", "q1mesecni": "da" },
  { id: 2, "q1pdv": "ne", "q1poreznadobit": "da", "q1ios": "ne", "q1dl1": "da", "q1mesecni": "ne" },
  // add more dummy rows as needed
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
];

        // sx={{
        //   backgroundColor: "white",
        //   "& .quartil1-januar": {
        //     backgroundColor: "rgba(255, 7, 0, 0.55)",
        //   },
        // }}
