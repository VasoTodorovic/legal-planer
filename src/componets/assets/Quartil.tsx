import { columnsQ1 } from "./Quartil1";
import { columnsQ2 } from "./Quartil2";
import { columnGroupingQ1 } from "./Quartil1";
import { columnGroupingQ2 } from "./Quartil2";
import { GridColumnGroupingModel } from "@mui/x-data-grid";
import { columnGroupingQ3, columnsQ3 } from "./Quarti3";
import { columnsQ4, columnGroupingQ4 } from "./Quartil4";
export const columns1=[...columnsQ1,...columnsQ2,...columnsQ3,...columnsQ4]
export const grouping: GridColumnGroupingModel =[...columnGroupingQ1,...columnGroupingQ2,...columnGroupingQ3,...columnGroupingQ4]