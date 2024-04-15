import {
  GridColDef,
  GridColumnGroupingModel
} from "@mui/x-data-grid";
  
  export const columnsQ3: GridColDef[] = [
    { field: "q3pdv" ,type: 'singleSelect', valueOptions: ["Da","Ne"], headerName: "PDV", width: 90, editable:true},
    {
      field: "q3porezNaDobit",
      headerName: "Porez na dobit",
      width: 150,

    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable: true,
    },
    {
      field: "q3ios",
      headerName: "IOS",
      width: 150,

    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable: true,
    },
    {
      field:"q3lpa",
      headerName:"LPA",
      width:150,

    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable: true,
    },
    {
      field: "q3dl1",
      headerName: "dl1",
      width: 110,

    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable: true,
    },
    {
      field: "q3msecni",
      headerName: "Mesecni Izvestaj",
      width: 110,

    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable: true,
    },
  ];
  

  export const columnGroupingQ3: GridColumnGroupingModel = [
    {
      groupId: "Jul",
      headerClassName: "q3jull", //for css
      children: [
        { field: "q3pdv" },
        { field: "q3porezNaDobit" },
        { field: "q3ios" },
        { field: "q3lpa" },
        { field: "q3dl1" },
        { field: "q3msecni" },
      ],
    },
  ];
  