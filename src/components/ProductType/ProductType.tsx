import { ITableRowProps } from "../../types";
import info_icon from "../../assets/info-icon.svg";
import pen_icon from "../../assets/pen-icon.svg";
import trash_icon from "../../assets/trash-icon.svg";

function ProductType({
  isHeader,
  type,
  index,
  onOpenEditForm,
  onDeleteProductType,
  onInfoToolTipOpened
}: ITableRowProps) {
  function handleDeleteProductTypeClick() {
    onDeleteProductType(id);
  }

  const { id, packsNumber, packageType, isArchived, createdAt } = type;

  return (
    <li
      className={`product-list__row ${isHeader && "product-list__row_header"}`}
      key={id}
    >
      <div
        className={`product-list__cell-container ${
          isHeader && "product-list__cell-container_header"
        }`}
      >
        <p
          className={`product-list__cell ${
            isHeader && "product-list__cell_first-header"
          }`}
        >
          {isHeader ? "" : `${index + 1}`}
        </p>
      </div>
      <div
        className={`product-list__cell-container ${
          isHeader && "product-list__cell-container_header"
        }`}
      >
        <p className="product-list__cell">{isHeader ? `${"Кол-во пачек"}` : `${packsNumber}`}  </p>
      </div>
      <div
        className={`product-list__cell-container ${
          isHeader && "product-list__cell-container_header"
        }`}
      >
        <p className="product-list__cell">{isHeader ? `${"Тип упаковки"}` : `${packageType}`}     </p>
      </div>
      <div
        className={`product-list__cell-container ${
          isHeader && "product-list__cell-container_header"
        }`}
      >
        <p className="product-list__cell">{isHeader ? `${"Дата создания"}` : `${createdAt}`}</p>
      </div>
      <div
        className={`product-list__cell-container ${
          isHeader && "product-list__cell-container_header"
        }`}
      >
        <p className="product-list__cell">{isHeader ? `${"Статус"}` : `${isArchived ? "Архив" : "Активно"}`}</p>
      </div>
      <div
        className={`product-list__cell-container ${
          !isHeader && "product-list__cell-container_info-button-coloumn"
        } ${isHeader && "product-list__cell-container_header"}`}
      >
        {!isHeader && (
          <a className="product-list__button" onClick={onInfoToolTipOpened}>
            <img src={info_icon} />
          </a>
        )}
        {isHeader && <p className="product-list__cell"></p>}
      </div>
      <div
        className={`${
          !isHeader &&
          "product-list__cell product-list__cell_button-container product-list__cell-container_info-button-coloumn product-list__cell-container_edit-button-coloumn"
        } ${
          isHeader &&
          "product-list__cell-container product-list__cell-container_header"
        }`}
      >
        {!isHeader && (
          <>
            <a className="product-list__button" onClick={onOpenEditForm}>
              <img src={pen_icon} />
            </a>
            <a
              className="product-list__button"
              onClick={handleDeleteProductTypeClick}
            >
              <img src={trash_icon} />
            </a>
          </>
        )}
        {isHeader && (
          <p className="product-list__cell product-list__cell_last-header"></p>
        )}
      </div>
    </li>
  );
}

export default ProductType;
