import { MouseEventHandler } from "react";
import ProductForm from "../ProductForm/ProductForm";
import { useForm } from "react-hook-form";
import { IProductType } from "../../types";
interface IEditProductFormProps {
  title: string, 
  onCloseForms: MouseEventHandler
}

function EditProductForm({title, onCloseForms}: IEditProductFormProps) {

    const { register, handleSubmit, setValue, setError } = useForm<IProductType>(
      {}
    );
  return (
    <ProductForm title={title} setValue={setValue}>
      
      <div className="button-container">
        <button className="button-container__button button-container__button_delete">
          Удалить
        </button>
        <button className="button-container__button button-container__button_cancel" onClick={onCloseForms}>Отмена</button>
        <button className="button-container__button button-container__button_save">Сохранить</button>
      </div>
      
    </ProductForm>
  );
}

export default EditProductForm;
