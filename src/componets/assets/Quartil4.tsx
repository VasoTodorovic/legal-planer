import {
  GridColDef,
  GridColumnGroupingModel,
} from "@mui/x-data-grid";

export const columnsQ4: GridColDef[] = [
  { field: "q4pdv",type: 'singleSelect', valueOptions: ["Da","Ne"], headerName: "PDV", width: 90, editable:true},
  {
    field: "q4porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,
    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable: true,
  },
  {
    field: "q4ios",
    headerName: "IOS",
    width: 150,
    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable: true,
  },
  {
    field: "q4lpa",
    headerName: "LPA",
    width: 150,
    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable: true,
  },
  {
    field: "q4dl1",
    headerName: "dl1",
    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable: true,
    width: 110,
  },
  {
    field: "q4msecni",
    headerName: "Mesecni Izvestaj",
    width: 110,
    type: 'singleSelect', valueOptions: ["Da","Ne"],
    editable: true,
  },
 {
    field: "q42pdv",
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    headerName: "PDV",
    width: 90,
    editable: true,
  },
  {
    field: "q42porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q42ios",
    headerName: "IOS",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q42dl1",
    headerName: "dl1",
    width: 110,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  
  {
    field: "q42mesecni",
    headerName: "Mesecni Izvestaj",
    width: 110,
    type: "string" /* 'singleSelect', valueOptions: ["Da","Ne"], */,
    editable: true,
  },
  {
    field: "q43pdv",
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    headerName: "PDV",
    width: 90,
    editable: true,
  },
  {
    field: "q43porezNaDobit",
    headerName: "Porez na dobit",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q43poreski",
    headerName: "Poreski bilans za firme koje imaju razlicitu fiskalnu godinu",
    width: 150,

    type: "singleSelect",
    valueOptions: ["Da", "Ne","ne koristi se"],
    editable: true,
  },
  {
    field: "q43ios",
    headerName: "IOS",
    width: 150,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q43lpa",
    headerName: "LPA",
    width: 150,

    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  {
    field: "q43dl1",
    headerName: "dl1",
    width: 110,
    type: "singleSelect",
    valueOptions: ["Da", "Ne"],
    editable: true,
  },
  
  {
    field: "q43mesecni",
    headerName: "Mesecni Izvestaj",
    width: 110,
    type: "string" /* 'singleSelect', valueOptions: ["Da","Ne"], */,
    editable: true,
  }
];

export const columnGroupingQ4: GridColumnGroupingModel = [
  {
    groupId: "Oktobar",
    headerClassName: "q4oktobar", //for css
    children: [
      { field: "q4pdv" },
      { field: "q4porezNaDobit" },
      { field: "q4ios" },
      { field: "q4lpa" },
      { field: "q4dl1" },
      { field: "q4msecni" },
    ],
  },
  {
    groupId: "novembar",
    headerClassName: "quartil2-novembar", //for css
    children: [
      { field: "q42porezNaDobit" },
      { field: "q42pdv" },
      { field: "q42ios" },
      { field: "q42dl1" },
      {
        field: "q42otpad",
      },
      { field: "q42mesecni" },
    ],
  },
  {
    groupId: "decembar",
    headerClassName: "quartil2-decembar", //for css
    children: [
      { field: "q43porezNaDobit" },
      { field: "q43pdv" },
      { field: "q43ios" },
      { field: "q43dl1" },
      { field: "q43lpa" },
      {field:"q43poreski"},
      {
        field: "q43otpad",
      },
      { field: "q43mesecni" },
    ],
  },
];

