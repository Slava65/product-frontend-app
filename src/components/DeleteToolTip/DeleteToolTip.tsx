import { MouseEventHandler } from "react";
import { IProductType } from "../../types";

interface DeleteToolTip {
  isDeleteToolTipOpened: boolean;
  onCloseDeleteToolTip: Function;
  selectedType: IProductType | null;
  onDeleteProductType: Function;
}

function DeleteToolTip({
  isDeleteToolTipOpened,
  onCloseDeleteToolTip,
  selectedType,
  onDeleteProductType,
}: DeleteToolTip) {
  function handleClickDelete(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    onDeleteProductType(selectedType);
  }

  function handleCloseToolTip(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    onCloseDeleteToolTip();
  }

  return (
    <div
      className={`deletetooltip ${
        isDeleteToolTipOpened && "deletetooltip_opened"
      }`}
    >
      <form className="deletetooltip__container">
        <p className="deletetooltip__text">Удалить выбранный тип продукции?</p>
        <div>
          <button
            className="button-container__button button-container__button_delete"
            onClick={handleClickDelete}
            aria-label="Закрыть Окно"
          >
            Да
          </button>
          <button
            className="button-container__button button-container__button_cancel"
            onClick={handleCloseToolTip}
            aria-label="Закрыть Окно"
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteToolTip;
