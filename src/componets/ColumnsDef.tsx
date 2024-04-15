import { GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { columns1 } from "./assets/Quartil";

const columnsb: GridColDef[] = [
  { field: "_id", type: "string" },
  { field: "name", editable: true },
  //SEE
  {
    field: "id",
    headerName: "maticni broj",
    type: "number",
    editable: true,
    valueGetter: (
      value: number,
     
    ) => {
      // Custom logic to generate the value to display in the cell
      return `${value}`;
    },
  },

  {
    field: "employee",
    headerName: "broj zaposlenih",
    type: "number",
    editable: true,
    valueGetter: (
      value: number
    ) => {
      // Custom logic to generate the value to display in the cell
      return `${value}`;
    },
  },
  {
    field: "legal",
    type: "singleSelect",
    editable: true,
    valueOptions: ["Pausalac", "DOO"],
  },
  {
    field: "actions",
    type: "actions",
    headerName: "Actions",
    width: 100,
    cellClassName: "actions",
    getActions: () => [
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete"
        // onClick={handleDeleteClick(id)}
        color="inherit"
      />,
    ],
  },
];
export const columns = [...columnsb, ...columns1];
