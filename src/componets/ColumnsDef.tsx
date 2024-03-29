import { GridColDef } from "@mui/x-data-grid";
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { GridActionsCellItem } from "@mui/x-data-grid";
export const columns: GridColDef[] = [
  { field: "_id", type: "string" },
  { field: "name", editable: true },
  {
    field: "legal",
    type: "singleSelect",
    editable: true,
    valueOptions: ["Pausalac", "DOO"],
  },
 {
   field: 'actions',
        type: 'actions',
        headerName: 'Actions',
        width: 100,
        cellClassName: 'actions',
        getActions: ()=>([
      
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            // onClick={handleDeleteClick(id)}
            color="inherit"
          />,
      
      
      ])
 }
];
