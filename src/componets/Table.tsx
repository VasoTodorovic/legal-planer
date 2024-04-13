import * as React from "react";
import * as Realm from "realm-web";
import {
  GridCellParams,
  GridCellModes,
  GridCellModesModel,
  DataGrid,
  GridRowModel,
  GridColDef,
  GridSlots,
} from "@mui/x-data-grid";
import { columns } from "./ColumnsDef";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertProps } from "@mui/material/Alert";
import { ToolBar } from "./ToolBar";
interface Company {
  _id: string; //maby GridRowId
  name: string;
  legal: string;
}

export default function Table() {
  const [rows, setRows] = React.useState<Company[]>([]);
  const [rowModesModel, setCellModesModel] = React.useState<GridCellModesModel>(
    {}
  );
  //TODO: delte all conosle.log
  //so this handleCellClick is wrap with Callback then I have to delet it 
  const handleCellClick = (params: GridCellParams, event: React.MouseEvent) => {
    if (params.colDef.type === "actions") {
      deleteCompany((rows as Company[]).find((row) => row._id === params.id));

      return;
    }
    if (!params.isEditable) {
      return;
    }

    // Ignore portal
    if (
      (event.target as any).nodeType === 1 &&
      !event.currentTarget.contains(event.target as Element)
    ) {
      return;
    }

    setCellModesModel((prevModel) => {
      return {
        // Revert the mode of the other cells from other rows
        ...Object.keys(prevModel).reduce(
          (acc, id) => ({
            ...acc,
            [id]: Object.keys(prevModel[id]).reduce(
              (acc2, field) => ({
                ...acc2,
                [field]: { mode: GridCellModes.View },
              }),
              {}
            ),
          }),
          {}
        ),
        [params.id]: {
          // Revert the mode of other cells in the same row
          ...Object.keys(prevModel[params.id] || {}).reduce(
            (acc, field) => ({
              ...acc,
              [field]: { mode: GridCellModes.View },
            }),
            {}
          ),
          [params.field]: { mode: GridCellModes.Edit },
        },
      };
    });
  };

  const handleCellModesModelChange = 
    (newModel: GridCellModesModel) => {
      setCellModesModel(newModel);
    }

  const app = new Realm.App({ id: "application-1-qmokd" });
  const postCompany = async () => {
    try {
      const user = await app.logIn(credentials);
      const response = await user.functions.addNewCompany();

      return response;
    } catch (err) {
      console.error("Failed to log in", err);
    }
  };

  const deleteCompany = async (company: any) => {
    try {
      const user = await app.logIn(credentials);
      const response = await user.functions.companyDelete(company);

      const filteredRows = (rows as Company[]).filter(
        (row) => row._id !== company._id
      );
      setRows(filteredRows);
      return response;
    } catch (err) {
      console.error("Failed to log in", err);
    }
  };
  const [snackbar, setSnackbar] = React.useState<Pick<
    AlertProps,
    "children" | "severity"
  > | null>(null);

  const credentials = Realm.Credentials.anonymous();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await app.logIn(credentials);
        const response = await user.functions.getAllCompany();
        const maped = response.map((element: Company) => {
          return { ...element, _id: element._id.toString() };
        });
        setRows(maped);
      } catch (err) {
        console.error("Failed to log in", err);
      }
    };
    fetchData();
  }, []);
  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = async (newRow: GridRowModel) => {
      try {
        const user = await app.logIn(credentials);
        const oldRow = rows.find((m) => m._id === newRow._id);
        if (JSON.stringify(oldRow) !== JSON.stringify(newRow)) {
          await user.functions.updateCompanies(newRow); //processRowUpdate Assuming postCompany accepts an array of companies
          setSnackbar({
            children: "Change successfully saved",
            severity: "success",
          });
          return newRow;
        } else {
          return newRow;
        }
      } catch (error: any) {
        setSnackbar({ children: error.message, severity: "error" });
        throw error; // Rethrow the error to indicate the failure of the row update
      }
    }
  const handleProcessRowUpdateError = (error: Error) => {
    setSnackbar({ children: error.message, severity: "error" });
  }

  return (
    <div>
      <DataGrid
        slots={{
          toolbar: ToolBar as GridSlots["toolbar"],
        }}
        slotProps={{
          toolbar: {
            setRows,
            setRowModesModel: setCellModesModel,
            postCompany,
          },
        }}
        cellModesModel={rowModesModel}
        rows={rows}
        getRowId={(row) => row._id}
        columns={columns}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        onCellModesModelChange={handleCellModesModelChange}
        onCellClick={handleCellClick}
      />
      {!!snackbar && (
        <Snackbar
          open
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </div>
  );
}
