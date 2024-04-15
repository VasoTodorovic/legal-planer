import { GridColDef, GridColumnGroupingModel } from "@mui/x-data-grid";

export const columnsQ2: GridColDef[] = [
  {
    field: "q2pdv",
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    headerName: "PDV",
    width: 90,
    editable: true,
  },
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
  
  {
    field: "q22pdv",
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    headerName: "PDV",
    width: 90,
    editable: true,
  },
  {
    field: "q22porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q22ios",
    headerName: "IOS",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q22dl1",
    headerName: "dl1",
    width: 110,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  
  {
    field: "q22mesecni",
    headerName: "Mesecni Izvestaj",
    width: 110,
    type: "string" /* 'singleSelect', valueOptions: ["Da","Ne"], */,
    editable: true,
  },
  {
    field: "q23pdv",
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    headerName: "PDV",
    width: 90,
    editable: true,
  },
  {
    field: "q23porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q23ios",
    headerName: "IOS",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q23dl1",
    headerName: "dl1",
    width: 110,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  
  {
    field: "q23mesecni",
    headerName: "Mesecni Izvestaj",
    width: 110,
    type: "string" /* 'singleSelect', valueOptions: ["Da","Ne"], */,
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
  {
    groupId: "maj",
    headerClassName: "quartil2-maj", //for css
    children: [
      { field: "q22porezNaDobit" },
      { field: "q22pdv" },
      { field: "q22ios" },
      { field: "q22dl1" },
      {
        field: "q22otpad",
      },
      { field: "q22mesecni" },
    ],
  },
  {
    groupId: "Jun",
    headerClassName: "quartil2-jun", //for css
    children: [
      { field: "q23porezNaDobit" },
      { field: "q23pdv" },
      { field: "q23ios" },
      { field: "q23dl1" },
      {
        field: "q23otpad",
      },
      { field: "q23mesecni" },
    ],
  },
];
