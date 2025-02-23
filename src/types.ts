import { MouseEventHandler } from "react";

export interface IProductType extends Record<string, any> {
  id: string;
  packsNumber: number;
  packageType: string;
  isArchived: boolean;
  description: string;
  createdAt: string;
}

export interface IApi {
  _url: string;
  _headers: {
    authorization: string;
    "Content-Type": string;
  };
}

export interface ITableRowProps {
  isHeader: boolean;
  type: IProductType;
  index: number;
  onOpenEditForm: MouseEventHandler;
  onDeleteProductType: Function;
  onInfoToolTipOpen: Function;
}


