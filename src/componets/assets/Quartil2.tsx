import {
  GridColDef,
  GridColumnGroupingModel
} from "@mui/x-data-grid";

export const columnsQ2: GridColDef[] = [
  { field: "q2pdv",type: 'singleSelect', valueOptions: ["Da","Ne"], headerName: "PDV", width: 90, editable:true},
  {
    field: "q2porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],

    editable: true,
  },
  {
    field: "q2ios",
    headerName: "IOS",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],

    editable: true,
  },
  {
    field: "q2lpa",
    headerName: "LPA",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],

    editable: true,
  },
  {
    field: "q2dl1",
    headerName: "dl1",
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    width: 110,
    editable: true,
  },
  {
    field: "q2lpaFirm",
    headerName: "LPA firmina",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],

    editable: true,
  },
  {
    field: "q2msecni",
    headerName: "Mesecni Izvestaj",
    width: 110,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],

    editable: true,
  },
];

export const columnGroupingQ2: GridColumnGroupingModel = [
  {
    groupId: "April",
    headerClassName: "q2april", //for css
    children: [
      { field: "q2porezNaDobit" },
      { field: "q2pdv" },
      { field: "q2ios" },
      { field: "q2dl1" },
      { field: "q2msecni" },
      { field: "q2lpa" },
      { field: "q2lpaFirm" },
    ],
  },
];
