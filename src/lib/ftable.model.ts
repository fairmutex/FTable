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
    title: string;
    name: string;
    type: string;
    filterData: any[];
    format: any;

    prefix: string;
    postfix: string;

    isFilterable: Boolean;
    isOrderable: Boolean;
    isSearchable: Boolean;

    constructor(
      title: string,
      name: string,
      type: string,
      prefix: string,
      postfix: string
    ) {
      this.title = title;
      this.name = name;
      this.type = type;
      this.filterData = [];
      this.prefix = prefix;
      this.postfix = postfix;
    }
  }

  export class FSearch {
    value: any;
    isRegex: boolean;
    isInverse: boolean;

    constructor(value: any) {
      this.value = value;
      this.isRegex = false;
      this.isInverse = false;
    }
  }

  export class FFilter {
    search: FSearch;
    columnIndex: number;

    constructor(columnIndex: number, value: any) {
      this.search = new FSearch(value);
      this.columnIndex = columnIndex;
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