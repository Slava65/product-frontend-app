import { IProductType } from "../../types";

interface IInfoTooltipProps {
  isInfoToolTipOpened: boolean;
  onCloseInfoToolTip: Function;
  selectedType: IProductType | null;
}

function InfoTooltip({
  isInfoToolTipOpened,
  onCloseInfoToolTip,
  selectedType,
}: IInfoTooltipProps) {
  function handleCloseClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onCloseInfoToolTip();
  }
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
          <p className="infotooltip__field-name">Статус</p>
          <p className="infotooltip__field-name">
            {selectedType?.isArchived ? "Архив" : "Активно"}
          </p>
        </div>
        <div className="infotooltip__field-container">
          <p className="infotooltip__field-name">Описание</p>
          <textarea
            className="infotooltip__field-name infotooltip__field-name_description"
            value={selectedType?.description}
          ></textarea>
        </div>
        <div className="infotooltip__field-container">
          <p className="infotooltip__field-name">Дата создания</p>
          <p className="infotooltip__field-name">{selectedType?.createdAt}</p>
        </div>
        <button
          className="button-container__button button-container__button_cancel"
          onClick={handleCloseClick}
          aria-label="Закрыть Окно"
        >
          Выход
        </button>
      </form>
    </div>
  );
}

export default InfoTooltip;
