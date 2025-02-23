interface IProductFormProps {
  title: string;
  setValue: Function;
}
function ProductForm({
  children,
  title,
  setValue,
}: React.PropsWithChildren<IProductFormProps>) {
  return (
    <div className="edit-form">
      <h2 className="form-title">{title}</h2>
      <div className="input-container">
        <label htmlFor="packsNumber" className="input-container__name">
          Кол-во пачек <span className="input-container__asterisk">*</span>
        </label>
        <input
          id="packsNumber"
 
          className="input-container__field input-container__field_numberPacks"
          name="packsNumber"
          onChange={(e) => setValue("packsNumber", e.target.value)}
        />
      </div>
      <div className="input-container">
        <label htmlFor="packageType" className="input-container__name">
          Тип упаковки <span className="input-container__asterisk">*</span>
        </label>
        <select
          id="packageType"
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
          id="isArchived"
          type="checkbox"
          onChange={(e) => setValue("isArchived", e.target.value)}
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
          id="description"
          onChange={(e) => setValue("description", e.target.value)}
          className="input-container__field input-container__field_description"
        ></textarea>
      </div>
      {children}
    </div>
  );
}

export default ProductForm;
