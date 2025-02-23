import { MouseEventHandler } from "react";
import { IProductType } from "../../types";

interface IInfoTooltipProps {
  isInfoToolTipOpened: boolean;
  onCloseInfoToolTip: MouseEventHandler;
  selectedType: IProductType | null;
}

function InfoTooltip({
  isInfoToolTipOpened,
  onCloseInfoToolTip,
  selectedType,
}: IInfoTooltipProps) {
  return (
    <div
      className={`infotooltip ${isInfoToolTipOpened && "infotooltip_opened"}`}
    >
      <form className="infotooltip__container">
        <div className="infotooltip__field-container">
          <p className="infotooltip__field-name">Кол-во пачек</p>
          <p className="infotooltip__field-name">{selectedType?.packsNumber}</p>
        </div>

        <div className="infotooltip__field-container">
          <p className="infotooltip__field-name">Тип упаковки</p>
          <p className="infotooltip__field-name">{selectedType?.packageType}</p>
        </div>

        <div className="infotooltip__field-container">
          <p className="infotooltip__field-name">Архивировано</p>
          <p className="infotooltip__field-name">
            {selectedType?.isArchived ? "Архив" : "Активно"}
          </p>
        </div>

        <div className="infotooltip__field-container">
          <p className="infotooltip__field-name">Описание</p>
          <p className="infotooltip__field-name">{selectedType?.description}</p>
        </div>

        <div className="infotooltip__field-container">
          <p className="infotooltip__field-name">Дата создания</p>
          <p className="infotooltip__field-name">{selectedType?.createdAt}</p>
        </div>

        <button
          className="button-container__button button-container__button_cancel"
          onClick={onCloseInfoToolTip}
          aria-label="Закрыть Окно"
        >
          Отмена
        </button>
      </form>
    </div>
  );
}

export default InfoTooltip;
