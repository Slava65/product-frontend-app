import ProductForm from "../ProductForm/ProductForm";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IProductType } from "../../types";
import { MouseEventHandler } from "react";

interface ICreateProductFormProps {
  title: string;
  onAddProductType: Function;
  onCloseForms: MouseEventHandler;
}

function CreateProductForm({
  title,
  onAddProductType,
  onCloseForms
}: ICreateProductFormProps) {
  const { register, handleSubmit, setValue, setError } = useForm<IProductType>(
    
  );

  useEffect(() => {
    register("packsNumber", { required: true });
    register("packageType", { required: true });
    register("isArchived", { required: true });
    register("description", { required: true });
  });

  function submitHandler(data: IProductType) {
    console.log("7");
    onAddProductType(data);
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <ProductForm title={title} setValue={setValue}>
        <div className="button-container">
          <button className="button-container__button button-container__button_cancel" onClick={onCloseForms}>
            Отмена
          </button>
          <button
            className="button-container__button button-container__button_create"
            type="submit"
          >
            Создать
          </button>
        </div>
      </ProductForm>
    </form>
  );
}

export default CreateProductForm;
