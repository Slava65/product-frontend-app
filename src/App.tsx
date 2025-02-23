import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import EditProductForm from "./components/EditProductForm/EditProductForm";
import CreateProductForm from "./components/CreateProductForm/CreateProductForm";
import { Routes, Route, useNavigate } from "react-router-dom";
import { api } from "./api/api";
import { useAppDispatch } from "./hooks";
import { addProductType, removeProductType } from "./redux/productTypesSlice";
import { IProductType } from "./types";
import InfoToolTip from "./components/InfoToolTip/InfoToolTip";
function App() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [isInfoToolTipOpened, setIsInfoToolTipOpened] = useState<boolean>(false)
  function handleOpenEditForm() {
    navigate("editproducttype")
  }

  function handleOpenCreateForm() {
    navigate("createproducttype")
  }

  function handleCreateProductType(type: IProductType) {
    console.log('6')
    api.createProductType(type);
    dispatch(addProductType(type));
  }

  function handleDeleteProductType(type: IProductType) {
    
    api.deleteProductType(type.id);
    dispatch(removeProductType(type))
  }

  function handleCloseForms() {
    setIsInfoToolTipOpened(false)
    navigate("/")
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<ProductList onOpenEditForm={handleOpenEditForm} onOpenCreateForm={handleOpenCreateForm} onDeleteProductType={handleDeleteProductType} onCloseForms={handleCloseForms} onInfoToolTipOpened={isInfoToolTipOpened} />}></Route>
        <Route
          path="/editproducttype"
          element={<EditProductForm title={"Редактирование типа продукции"} onCloseForms={handleCloseForms} />}
        ></Route>
        <Route
          path="/createproducttype"
          element={<CreateProductForm title={"Создание типа продукции"}  onAddProductType={handleCreateProductType} onCloseForms={handleCloseForms} />}
        ></Route>
      </Routes>
      <InfoToolTip isInfoToolTipOpened={isInfoToolTipOpened} onCloseInfoToolTip={handleCloseForms} />
    </div>
  );
}

export default App;
