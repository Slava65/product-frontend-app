import { IProductType } from "../../types";
import { FieldErrors } from "react-hook-form";
interface IProductFormProps {
  title: string;
  errors: FieldErrors<IProductType>;
  register: Function;
}
function ProductForm({
  children,
  title,
  errors,
  register,
}: React.PropsWithChildren<IProductFormProps>) {
  return (
    <div className="edit-form">
      <h2 className="form-title">{title}</h2>
      <div
        className={`input-container ${
          errors.packsNumber && "input-container_error"
        }`}
      >
        <label htmlFor="packsNumber" className="input-container__name">
          Кол-во пачек <span className="input-container__asterisk">*</span>
        </label>
        <div>
          <input
            type="number"
            name="packsNumber"
            className="input-container__field input-container__field_numberPacks"
            {...register("packsNumber", {
              required: { value: true, message: "Обязательное поле" },
              min: { value: 0, message: "Минимальное значение равно 0" },
              max: {
                value: 1000000,
                message: "Максимальное значение равно 1000000",
              },
            })}
          />
        </div>
      </div>
      {errors.packsNumber && (
        <p className="input-container__error">{errors.packsNumber.message}</p>
      )}
      <div className="input-container">
        <label htmlFor="packageType" className="input-container__name">
          Тип упаковки <span className="input-container__asterisk">*</span>
        </label>
        <select
          name="packageType"
          {...register("packageType")}
          className="input-container__field"
        >
          <option value="компрессия">компрессия</option>
          <option value="некомпрессия">некомпрессия</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="isArchived" className="input-container__name">
          Архивировано
        </label>
        <input
          name="isArchived"
          type="checkbox"
          {...register("isArchived")}
          className="input-container__check-box"
        ></input>
      </div>
      <div
        className={`input-container ${
          errors.description && "input-container_error"
        }`}
      >
        <label
          htmlFor="description"
          className="input-container__name input-container__name_description"
        >
          Описание
        </label>
        <div>
          <textarea
            name="description"
            {...register("description", {
              maxLength: {
                value: 300,
                message:
                  "Превышена длина поля, максимальное значение 300 символов",
              },
            })}
            className="input-container__field input-container__field_description"
          ></textarea>
          {errors.description && (
            <p className="input-container__error input-container__error_description">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

export default ProductForm;
