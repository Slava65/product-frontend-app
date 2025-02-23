import { MouseEventHandler } from "react";
import { IProductType } from "../../types";

interface DeleteToolTip {
  isDeleteToolTipOpened: boolean;
  onCloseDeleteToolTip: MouseEventHandler;
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
  
  return (
    <div
      className={`deletetooltip ${
        isDeleteToolTipOpened && "deletetooltip_opened"
      }`}
    >
      <form className="deletetooltip__container">
        <p>Удалить выбранный тип продукции?</p>
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
            onClick={onCloseDeleteToolTip}
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
