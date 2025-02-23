import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import EditProductForm from "./components/EditProductForm/EditProductForm";
import CreateProductForm from "./components/CreateProductForm/CreateProductForm";
import { Routes, Route, useNavigate } from "react-router-dom";
import { api } from "./api/api";
import { useAppDispatch } from "./hooks";
import {
  addProductType,
  removeProductType,
  editProductType,
} from "./redux/productTypesSlice";
import { IProductType } from "./types";
import InfoToolTip from "./components/InfoToolTip/InfoToolTip";
import DeleteToolTip from "./components/DeleteToolTip/DeleteToolTip";
function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isInfoToolTipOpened, setIsInfoToolTipOpened] =
    useState<boolean>(false);
  const [isDeleteToolTipOpened, setIsDeleteToolTipOpened] =
    useState<boolean>(false);
  const [selectedProductType, setSelectedProductType] =
    useState<IProductType | null>(null);
  function handleOpenEditForm(type: IProductType) {
    setSelectedProductType(type);
    navigate("editproducttype");
  }

  function handleOpenCreateForm() {
    navigate("createproducttype");
  }

  async function handleCreateProductType(type: IProductType) {
    try {
      const res = await api.createProductType(type);
      dispatch(addProductType(res.data));
    } catch (err) {
      console.log(err);
    }
    handleCloseForms();
  }

  function handleEditProductType(type: IProductType) {
    console.log(type);
    api
      .editProductType(type)
      .then((res) => {
        dispatch(editProductType(res.data));
      })
      .catch((err) => console.log(err));
    handleCloseForms();
  }

  function handleDeleteProductType(type: IProductType) {
    api
      .deleteProductType(type.id)
      .then(() => {
        dispatch(removeProductType(type));
      })
      .catch((err) => console.log(err));
    handleCloseForms();
  }

  function handleCloseForms() {
    setIsInfoToolTipOpened(false);
    setIsDeleteToolTipOpened(false);
    navigate("/");
  }
  function handleOpenInfoToolTip(selectedType: IProductType) {
    setIsInfoToolTipOpened(true);
    setSelectedProductType(selectedType);
  }

  function handleOpenDeleteToolTip(selectedType: IProductType) {
    setIsDeleteToolTipOpened(true);
    setSelectedProductType(selectedType);
  }

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <ProductList
              onOpenEditForm={handleOpenEditForm}
              onOpenCreateForm={handleOpenCreateForm}
              onCloseForms={handleCloseForms}
              onInfoToolTipOpen={handleOpenInfoToolTip}
              onDeleteToolTipOpen={handleOpenDeleteToolTip}
            />
          }
        ></Route>
        <Route
          path="/editproducttype"
          element={
            <EditProductForm
              title={"Редактирование типа продукции"}
              onEditProductType={handleEditProductType}
              onCloseForms={handleCloseForms}
              onDeleteProductType={handleDeleteProductType}
              selectedType={selectedProductType}
            />
          }
        ></Route>
        <Route
          path="/createproducttype"
          element={
            <CreateProductForm
              title={"Создание типа продукции"}
              onAddProductType={handleCreateProductType}
              onCloseForms={handleCloseForms}
            />
          }
        ></Route>
      </Routes>
      <InfoToolTip
        isInfoToolTipOpened={isInfoToolTipOpened}
        onCloseInfoToolTip={handleCloseForms}
        selectedType={selectedProductType}
      />
      <DeleteToolTip
        onDeleteProductType={handleDeleteProductType}
        isDeleteToolTipOpened={isDeleteToolTipOpened}
        onCloseDeleteToolTip={handleCloseForms}
        selectedType={selectedProductType}
      />
    </div>
  );
}

export default App;
