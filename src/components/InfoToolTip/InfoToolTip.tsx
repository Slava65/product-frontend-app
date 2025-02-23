import { MouseEventHandler } from "react";

interface IInfoTooltipProps {
  isInfoToolTipOpened: boolean;
  onCloseInfoToolTip: MouseEventHandler;
}

function InfoTooltip({
  isInfoToolTipOpened,
  onCloseInfoToolTip,
}: IInfoTooltipProps) {
  return (
    <div
      className={`infotooltip ${isInfoToolTipOpened && "infotooltip_opened"}`}
    >
      <form className="infotooltip__container">
        <div className="infotooltip__field-container">
          <p className="infotooltip__field-name">Кол-во пачек</p>
          <p className="infotooltip__field-name"></p>
        </div>

        <div className="infotooltip__field-container">
          <p className="infotooltip__field-name">Тип упаковки</p>
          <p className="infotooltip__field-name"></p>
        </div>

        <div className="infotooltip__field-container">
          <p className="infotooltip__field-name">Архивировано</p>
          <p className="infotooltip__field-name"></p>
        </div>

        <div className="infotooltip__field-container">
          <p className="infotooltip__field-name">Описание</p>
          <p className="infotooltip__field-name"></p>
        </div>

        <button
          type="button"
          className="infotooltip__close"
          aria-label="Закрыть Окно"
          onClick={onCloseInfoToolTip}
        ></button>
      </form>
    </div>
  );
}

export default InfoTooltip;
