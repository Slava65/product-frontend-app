import { IProductType } from "../../types";
import { FieldErrors } from "react-hook-form";
interface IProductFormProps {
  title: string;
  setValue: Function;
  isEdit: boolean;
  selectedType: IProductType | null;
  watch: Function;
  errors: FieldErrors<IProductType>;
}
function ProductForm({
  children,
  title,
  setValue,
  isEdit,
  selectedType,
  watch,
  errors,
}: React.PropsWithChildren<IProductFormProps>) {
  return (
    <div className="edit-form">
      <h2 className="form-title">{title}</h2>
      <div className="input-container">
        <label htmlFor="packsNumber" className="input-container__name">
          Кол-во пачек <span className="input-container__asterisk">*</span>
        </label>
        <input
          type="number"
          name="packsNumber"
          className="input-container__field input-container__field_numberPacks"
          onChange={(e) => setValue("packsNumber", Number(e.target.value))}
        />
      </div>
      {errors.packsNumber && <p>{errors.packsNumber.message}</p>}
      <div className="input-container">
        <label htmlFor="packageType" className="input-container__name">
          Тип упаковки <span className="input-container__asterisk">*</span>
        </label>
        <select
          name="packageType"
          onChange={(e) => setValue("packageType", e.target.value)}
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
          onChange={(e) => setValue("isArchived", e.target.checked)}
          className="input-container__check-box"
        ></input>
      </div>
      <div className="input-container">
        <label
          htmlFor="description"
          className="input-container__name input-container__name_description"
        >
          Описание
        </label>
        <textarea
          name="description"
          onChange={(e) => setValue("description", e.target.value)}
          className="input-container__field input-container__field_description"
        ></textarea>
      </div>
      {errors.description && <p>{errors.description.message}</p>}
      {children}
    </div>
  );
}

export default ProductForm;
