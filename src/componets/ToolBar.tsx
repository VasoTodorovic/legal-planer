import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  FormControl
} from "@mui/material";
import {
  GridRowsProp,
  GridToolbarContainer,
  GridCellModesModel,
  GridCellModes,
} from "@mui/x-data-grid";
interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridCellModesModel) => GridCellModesModel
  ) => void;
  postCompany: () => void;
  userType:any,
  setUserType: (select:number) => void;
}
const Quartil = {
  Quartil1: 0,
  Quartil2: 1,
  Quartil3: 3,
  Quartil4: 4,
};
export function ToolBar(props: EditToolbarProps) {
  // so this is setting row
  const { setRows, setRowModesModel, postCompany,userType,setUserType } = props; // destruction of object
  const handleClick = async () => {
    const response: any = await postCompany();
    /*   const id =randomId();
    const column="name";
    // [] []  
    setRows((oldRows) => [...oldRows, { id, name: "Some name"}]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: {[column]: {mode:GridCellModes.Edit, fieldToFocus: 'name'} },
    })) */ setRows((oldRows) => [...oldRows, response["response"]]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [response["response"]._id]: {
        ["name"]: { mode: GridCellModes.Edit, fileadFocus: "name" },
      },
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>

      <div>
        <FormControl sx={{ width: "200px", pb: 1 }}>
          <InputLabel id="demo-simple-select-label">Quartil</InputLabel>
          <Select
            labelId="demo-user-type-label"
            id="demo-user-type"
            value={userType}
            label="Quartil"
            onChange={(event: SelectChangeEvent<number>) => {
              setUserType(event.target.value as number);
            }}
          >
            <MenuItem value={Quartil.Quartil1}>I</MenuItem>
            <MenuItem value={Quartil.Quartil2}>II</MenuItem>
            <MenuItem value={Quartil.Quartil3}>III</MenuItem>
            <MenuItem value={Quartil.Quartil4}>IV</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="other"
          />
        </RadioGroup>
      </FormControl> */}
    </GridToolbarContainer>
  );
}
