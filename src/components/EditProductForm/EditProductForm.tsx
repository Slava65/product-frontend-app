import { useEffect } from "react";
import { MouseEventHandler } from "react";
import ProductForm from "../ProductForm/ProductForm";
import { useForm } from "react-hook-form";
import { IProductType } from "../../types";

interface IEditProductFormProps {
  title: string;
  onCloseForms: MouseEventHandler;
  onEditProductType: Function;
  onDeleteProductType: Function,
  selectedType: IProductType | null
}

function EditProductForm({
  title,
  onCloseForms,
  onEditProductType,
  onDeleteProductType,
  selectedType
}: IEditProductFormProps) {
  const { register, handleSubmit, setValue } = useForm<IProductType>({
    defaultValues: {
      packsNumber: 0,
      packageType: "компрессия",
      isArchived: false,
      description: "",
    },
  });

  useEffect(() => {
    register("packsNumber", { required: true });
    register("packageType");
    register("isArchived");
    register("description", { required: true });
  });

  function handleEditProductType(data: IProductType) {
    console.log(data, selectedType)
    onEditProductType({...data, id:selectedType?.id});
  }

  function handleClickDelete(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    onDeleteProductType(selectedType);
  }
  
  return (
    <form onSubmit={handleSubmit(handleEditProductType)}>
      <ProductForm title={title} setValue={setValue}>
        <div className="button-container">
          <button className="button-container__button button-container__button_delete" onClick={handleClickDelete} >
            Удалить
          </button>
          <button
            className="button-container__button button-container__button_cancel"
            onClick={onCloseForms}
          >
            Отмена
          </button>
          <button
            className="button-container__button button-container__button_save"
            type="submit"
          >
            Сохранить
          </button>
        </div>
      </ProductForm>
    </form>
  );
}

export default EditProductForm;
