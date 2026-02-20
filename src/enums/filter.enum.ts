export enum SORT {
  DEFAULT = 'Default',
  NAME_ASC = 'Name (A - Z)',
  NAME_DESC = 'Name (Z - A)',
  PRICE_ASC = 'Price (Low > High)',
  PRICE_DESC = 'Price (High > Low)',
  RATING_HIGHEST = 'Rating (Highest)',
  RATING_LOWEST = 'Rating (Lowest)',
  MODEL_ASC = 'Model (A - Z)',
  MODEL_DESC = 'Model (Z - A)',
}

export enum LIMIT {
  SHOW_20 = '20',
  SHOW_25 = '25',
  SHOW_50 = '50',
  SHOW_75 = '75',
  SHOW_100 = '100',
}

export type SortKey = keyof typeof SORT;
export type LimitKey = keyof typeof LIMIT;

export type SortOption = (typeof SORT)[keyof typeof SORT];
export type LimitOption = (typeof LIMIT)[keyof typeof LIMIT];
