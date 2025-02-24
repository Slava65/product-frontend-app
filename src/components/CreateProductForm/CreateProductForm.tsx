import ProductForm from "../ProductForm/ProductForm";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IProductType } from "../../types";
import { MouseEventHandler } from "react";

interface ICreateProductFormProps {
  title: string;
  onAddProductType: Function;
  onCloseForms: MouseEventHandler;
  selectedType: IProductType | null;
}

function CreateProductForm({
  title,
  onAddProductType,
  onCloseForms,
  selectedType,
}: ICreateProductFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<IProductType>({
    defaultValues: {
      packsNumber: undefined,
      packageType: "компрессия",
      isArchived: false,
      description: "",
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

  function HandleAddProductForm(data: IProductType) {
    onAddProductType(data);
  }
  return (
    <form onSubmit={handleSubmit(HandleAddProductForm)}>
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
            className="button-container__button button-container__button_cancel"
            onClick={onCloseForms}
          >
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
