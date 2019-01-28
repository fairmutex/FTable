export class FTable {
  pageSizes: number[];
  pageSizeIndex: number;
  currentPage: number;
  totalRows: number;
  data: any[];
  columns: FColumn[];
  search: FSearch;
  orders: FOrder[];
  filters: FFilter[];
  filteredRows: number;
  url: string;

  constructor() {
    this.filters = [];
    this.currentPage = 0;
  }
}

export class FColumn {
  title: string;     // Column Title
  name: string;      // Name to be used for references
  type: string;      // datatype
  filterData: any[];
  format: (arg: any) => string; // display formatting function

  // prefix: string;
  // postfix: string;

  isFilterable: Boolean;
  isOrderable: Boolean;
  isSearchable: Boolean;

  constructor(
    title: string,
    name: string,
    type: string,
    format: (arg: any) => string 
    // ,
    // prefix: string,
    // postfix: string
  ) {
    this.title = title;
    this.name = name;
    this.type = type;
    this.filterData = [];

    this.format = (typeof  format  === "function" ? format : (x) => x);
    // this.prefix = prefix;
    // this.postfix = postfix;
  }
}

export class FSearch {
  value: any;
  isRegex: boolean;   // Regular Expression/Not Regular Expression
  isInverse: boolean; // Containing/Not containing

  constructor(value: any) {
    this.value = value;
    this.isRegex = false;
    this.isInverse = false;
  }
}

export class FFilter {
  // search: FSearch;
  columnName: string;
  apply: (arg: any[]) => any[];

  constructor(columnName: string, apply: (arg: any[]) => any[]) {
    // this.search = new FSearch(value);
    this.columnName = columnName;
    this.apply = apply;
  }
}

export class FOrder {
  columnIndex: number;
  direction: FDirection; // Asc/Desc

  constructor(columnIndex: number, direction: FDirection) {
    this.columnIndex = columnIndex;
    this.direction = direction;
  }
}

type FDirection = 'Asc' | 'Desc';
