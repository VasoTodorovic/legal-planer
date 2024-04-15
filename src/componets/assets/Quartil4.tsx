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
];

