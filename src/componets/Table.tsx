import * as React from "react";
import * as Realm from "realm-web";
import {
  GridCellParams,
  GridCellModes,
  GridCellModesModel,
  DataGrid,
  GridRowModel,
  GridSlots,
} from "@mui/x-data-grid";
import { columns } from "./ColumnsDef";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertProps } from "@mui/material/Alert";
import { ToolBar } from "./ToolBar";
import { columns1, grouping } from "./assets/Quartil";
import { defaultVisibility } from "./Visibility";
interface Company {
  _id: string; //maby GridRowId
  name: string;
  legal: string;
}
const Quartil = {
  Quartil1: 0,
  Quartil2: 1,
  Quartil3: 3,
  Quartil4: 4,
};
export default function Table() {
  const [rows, setRows] = React.useState<Company[]>([]);
  const [rowModesModel, setCellModesModel] = React.useState<GridCellModesModel>(
    {}
  );
  const [userType, setUserType] = React.useState(Quartil.Quartil1);
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

  const columnVisibilityModel = React.useMemo(() => {
    let visibilityObject: { [key: string]: any } = {};
    if (userType === Quartil.Quartil1) {
      columns1.forEach((a) => {
        if (a["field"].startsWith("q1")) {
          visibilityObject[a["field"]] = true;
        } else {
          visibilityObject[a["field"]] = false;
        }
      });
      return visibilityObject;
    } else if (userType === Quartil.Quartil2) {
      //SEE not sure how this functioni
      columns1.forEach((a) => {
        if (a["field"].startsWith("q2")) {
          visibilityObject[a["field"]] = true;
        } else {
          visibilityObject[a["field"]] = false;
        }
      });
      return visibilityObject;
    } else if (userType === Quartil.Quartil3) {
      columns1.forEach((a) => {
        if (a["field"].startsWith("q3")) {
          visibilityObject[a["field"]] = true;
        } else {
          visibilityObject[a["field"]] = false;
        }
      });
      return visibilityObject;
    } else if (userType === Quartil.Quartil4) {
      columns1.forEach((a) => {
        if (a["field"].startsWith("q4")) {
          visibilityObject[a["field"]] = true;
        } else {
          visibilityObject[a["field"]] = false;
        }
      });
      return visibilityObject;
    }
    columns1.forEach((a) => {
      /* if (a["field"].startsWith("q4")) */ {
        //   visibilityObject[a["field"]] = true;
        // } else {
        visibilityObject[a["field"]] = false;
      }
    });
    return defaultVisibility;
  }, [userType]);

  const handleCellModesModelChange = (newModel: GridCellModesModel) => {
    setCellModesModel(newModel);
  };

  const app = new Realm.App({ id: "application-1-qmokd" });
  const postCompany = async () => {
    try {
      const user = await app.logIn(credentials);

      let defaultValue: { [key: string]: any } = {};

      columns.forEach((a) => {
        if (a["type"] === "singleSelect") {
          if (a["field"] === "legal") {
            defaultValue[a["field"]] = "DOO";
          } else {
            defaultValue[a["field"]] = "Ne";
          }
        }
      });
      defaultValue;
      const response = await user.functions.addNew(defaultValue);
      const id = response["response"]._id;
      setSnackbar({
        children: "Record with id: " + id + " successfully added",
        severity: "success",
      });
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
        const response = await user.functions.updateCompanies(newRow); //processRowUpdate Assuming postCompany accepts an array of companies
        //TODO rewrite this 
        if (oldRow !== undefined) {
          var id = rows.indexOf(oldRow);
          var newRows = rows.slice();
          newRows[id] = response["response"];
          setRows(newRows);
        }
        setSnackbar({
          children: "Change successfully saved",
          severity: "success",
        });
        return newRow;
      } else {
        return oldRow;
      }
    } catch (error: any) {
      setSnackbar({ children: error.message, severity: "error" });
      throw error; // Rethrow the error to indicate the failure of the row update
    }
  };
  const handleProcessRowUpdateError = (error: Error) => {
    setSnackbar({ children: error.message, severity: "error" });
  };

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
            userType,
            setUserType,
          },
        }}
        cellModesModel={rowModesModel}
        rows={rows}
        getRowId={(row) => row._id}
        columns={columns}
        columnGroupingModel={grouping}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        onCellModesModelChange={handleCellModesModelChange}
        columnVisibilityModel={columnVisibilityModel}
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
