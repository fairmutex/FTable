export class FTable {

  pageSizes: number[]; // Page sizes available
  pageSizeIndex: number; // current page size index
  columns: FColumn[];  // column definitions

  dataModifier: FTableDataModifier; // Data Modifier Object
  result: FTableResult;  // Result Data from datamodifier object

  constructor() {
    this.dataModifier = new FTableDataModifier()

  }
}

// Properties that modify the current page
export class FTableDataModifier {
  pageSize: number; // Page size
  currentPage: number;  // Current Page
  search: FSearch;  // global Search
  orders: FOrder[];  // sortings
  filters: FFilter[];  // filters

  constructor() {
    this.filters = [];
    this.currentPage = 0;
  }
}

export class FTableResult {
  totalRows: number;          // Total rows of data
  totalRowsAfterModifications: number; // Total rows after After Searching/filtering
  page: any[]; // Current Page 
  filterData: any[];

  constructor(page: any[], totalRows: number, totalRowsAfterModifications: number, filterData: any[]) {
    this.page = page;
    this.totalRows = totalRows;
    this.totalRowsAfterModifications = totalRowsAfterModifications;
    this, filterData = filterData;
  }

}

export class FColumn {
  title: string;     // Column Title
  name: string;      // Name to be used for references
  type: string;      // datatype
  filterData: any[]; // Extra data used for filtering 
  format: (arg: any) => string; // display formatting function

  constructor(
    title: string,
    name: string,
    type: string,
    format: (arg: any) => string
  ) {
    this.title = title;
    this.name = name;
    this.type = type;
    this.filterData = [];

    this.format = (typeof format === "function" ? format : (x) => x);
  }
}

export class FSearch {
  value: any;
  constructor(value: any) {
    this.value = value;
  }
}

export class FFilter {
  type: string;
  columnName: string;
  apply: any;//(arg: any[]) => any[];

  constructor(columnName: string, type: string, apply: any) {// (arg: any[]) => any[]) {
    this.type = type;
    this.columnName = columnName;
    this.apply = apply;
  }
}

export class FOrder {
  columnName: string;
  direction: FDirection; // Asc/Desc

  constructor(columnName: string, direction: FDirection) {
    this.columnName = columnName;
    this.direction = direction;
  }
}

type FDirection = 'Asc' | 'Desc';
