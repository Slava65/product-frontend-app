import { EventHandler, MouseEventHandler, useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { selectProductTypes } from "../../redux/productTypesSlice";

import { IProductType } from "../../types";
import { fetchProductTypes } from "../../redux/productTypesSlice";
import ProductType from "../ProductType/ProductType";

interface IProps {
  onOpenEditForm: MouseEventHandler;
  onOpenCreateForm: MouseEventHandler;
  onDeleteProductType: Function;
  onCloseForms: MouseEventHandler;
  onInfoToolTipOpen: Function;
}

function ProductList({
  onOpenEditForm,
  onOpenCreateForm,
  onDeleteProductType,
  onInfoToolTipOpen
}: IProps) {
  const dispatch = useAppDispatch();
  const currentProductTypes = useAppSelector(selectProductTypes);

  useEffect(() => {
    dispatch(fetchProductTypes());
  }, []);



  return (
    <>
      <div className="title-container">
        <h1 className="title-container__title">Список выпускаемой продукции</h1>
        <button
          className="title-container__create-button"
          onClick={onOpenCreateForm}
        >
          Создать тип продукции
        </button>
      </div>
      <ul className="product-list-table">
        <ProductType
          key={0}
          isHeader={true}
          type={{
            id: "0",
            packsNumber: 0,
            packageType: "0",
            isArchived: true,
            description: "0",
            createdAt: "0",
          }}
          index={0}
          onOpenEditForm={onOpenEditForm}
          onDeleteProductType={onDeleteProductType}
          onInfoToolTipOpen={onInfoToolTipOpen}
        />
        {(currentProductTypes as unknown as IProductType).map(
          (type: IProductType, index: number) => (
            <ProductType
              key={type.id}
              isHeader={false}
              type={type}
              index={index}
              onOpenEditForm={onOpenEditForm}
              onDeleteProductType={onDeleteProductType}
              onInfoToolTipOpen={onInfoToolTipOpen}
            />
          )
        )}
      </ul>
    </>
  );
}

export default ProductList;