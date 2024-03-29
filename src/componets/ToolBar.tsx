import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import {
  GridRowsProp,
  GridToolbarContainer,
  GridCellModesModel,
  GridCellModes
} from "@mui/x-data-grid";
import {
  randomId,
} from "@mui/x-data-grid-generator";
interface EditToolbarProps { 
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel:GridCellModesModel) =>GridCellModesModel
  ) => void;
  postCompany:()=>void;
}
export function ToolBar(props: EditToolbarProps) {
// so this is setting row
  const { setRows, setRowModesModel,postCompany} = props; // destruction of object
  const handleClick =async () => {
   const response:any= await postCompany();
   console.log(response["response"]);
  /*   const id =randomId();
    const column="name";
    // [] []  
    setRows((oldRows) => [...oldRows, { id, name: "Some name"}]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: {[column]: {mode:GridCellModes.Edit, fieldToFocus: 'name'} },
    })) */;
    setRows((oldRows)=>[...oldRows,response["response"]])
    setRowModesModel((oldModel)=>({...oldModel, [response["response"]._id]:{['name']:{mode:GridCellModes.Edit, fileadFocus:'name'}}}))
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}