import { useEffect } from "react";
import { MouseEventHandler } from "react";
import ProductForm from "../ProductForm/ProductForm";
import { useForm } from "react-hook-form";
import { IProductType } from "../../types";

interface IEditProductFormProps {
  title: string;
  onCloseForms: MouseEventHandler;
  onEditProductType: Function;
  onDeleteProductType: Function;
  selectedType: IProductType | null;
}

function EditProductForm({
  title,
  onCloseForms,
  onEditProductType,
  onDeleteProductType,
  selectedType,
}: IEditProductFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IProductType>({
    defaultValues: {
      packsNumber: selectedType?.packsNumber,
      packageType: selectedType?.packageType,
      isArchived: selectedType?.isArchived,
      description: selectedType?.description,
    },
  });

  useEffect(() => {
    register("packsNumber", {
      required: { value: true, message: "Обязательное поле" },
      min: { value: 0, message: "Минимальное значение равно 0" },
      max: { value: 1000000, message: "Максимальное значение равно 1000000" },
    });
    register("packageType");
    register("isArchived");
    register("description", {
      maxLength: {
        value: 300,
        message: "Превышена длина поля, максимальное значение 300 символов",
      },
    });
  });

  function handleEditProductType(data: IProductType) {
    onEditProductType({ ...data, id: selectedType?.id });
  }

  function handleClickDelete(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    onDeleteProductType(selectedType);
  }

  return (
    <form onSubmit={handleSubmit(handleEditProductType)}>
      <ProductForm
        title={title}
        setValue={setValue}
        isEdit={true}
        selectedType={selectedType}
        watch={watch}
        errors={errors}
      >
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
