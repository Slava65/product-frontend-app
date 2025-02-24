import { MouseEventHandler } from "react";
import ProductForm from "../ProductForm/ProductForm";
import { useForm } from "react-hook-form";
import { IProductType } from "../../types";

interface IEditProductFormProps {
  title: string,
  onCloseForms: MouseEventHandler,
  onEditProductType: Function,
  selectedType: IProductType | null,
  onDeleteToolTipOpen: Function
}

function EditProductForm({
  title,
  onCloseForms,
  onEditProductType,
  selectedType,
  onDeleteToolTipOpen
}: IEditProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductType>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      packsNumber: selectedType?.packsNumber,
      packageType: selectedType?.packageType,
      isArchived: selectedType?.isArchived,
      description: selectedType?.description,
    },
  });

  function handleEditProductType(data: IProductType) {
    onEditProductType({
      ...data,
      packsNumber: Number(data.packsNumber),
      id: selectedType?.id,
    });
  }

  function handleClickDelete(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    onDeleteToolTipOpen(selectedType);
  }


  // function handleClickDelete(event: React.MouseEvent<HTMLElement>) {
  //   event.preventDefault();
  //   onDeleteProductType(selectedType);
  // }

  return (
    <form onSubmit={handleSubmit(handleEditProductType)}>
      <ProductForm title={title} errors={errors} register={register}>
        <div className="button-container">
          <button
            className="button-container__button button-container__button_delete"
            onClick={handleClickDelete}
          >
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
