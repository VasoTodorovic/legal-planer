import { GridColDef, GridColumnGroupingModel } from "@mui/x-data-grid";

export const columnsQ3: GridColDef[] = [
  {
    field: "q3pdv",
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    headerName: "PDV",
    width: 90,
    editable: true,
  },
  {
    field: "q3porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,

    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q3ios",
    headerName: "IOS",
    width: 150,

    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q3lpa",
    headerName: "LPA",
    width: 150,

    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q3dl1",
    headerName: "dl1",
    width: 110,

    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q3msecni",
    headerName: "Mesecni Izvestaj",
    width: 110,

    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q32pdv",
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    headerName: "PDV",
    width: 90,
    editable: true,
  },
  {
    field: "q32porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q32ios",
    headerName: "IOS",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q32dl1",
    headerName: "dl1",
    width: 110,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q32lpa",
    headerName: "LPA",
    width: 150,

    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q32mesecni",
    headerName: "Mesecni Izvestaj",
    width: 110,
    type: "string" /* 'singleSelect', valueOptions: ["Da","Ne"], */,
    editable: true,
  },
  {
    field: "q33pdv",
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    headerName: "PDV",
    width: 90,
    editable: true,
  },
  {
    field: "q33porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q33ios",
    headerName: "IOS",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q33dl1",
    headerName: "dl1",
    width: 110,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q33lpa",
    headerName: "LPA",
    width: 150,

    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q33mesecni",
    headerName: "Mesecni Izvestaj",
    width: 110,
    type: "string" /* 'singleSelect', valueOptions: ["Da","Ne"], */,
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
  {
    groupId: "avgust",
    headerClassName: "quartil2-avgust", //for css
    children: [
      { field: "q32porezNaDobit" },
      { field: "q32pdv" },
      { field: "q32ios" },
      { field: "q32dl1" },
      {
        field: "q32otpad",
      },
      {
        field: "q32lpa",
      },
      { field: "q32mesecni" },
    ],
  },
  {
    groupId: "setembar",
    headerClassName: "quartil2-setembar", //for css
    children: [
      { field: "q33porezNaDobit" },
      { field: "q33pdv" },
      { field: "q33ios" },
      { field: "q33dl1" },
      {
        field: "q33lpa",
      },
      {
        field: "q33otpad",
      },
      { field: "q33mesecni" },
    ],
  },
];
