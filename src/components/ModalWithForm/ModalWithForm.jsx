import "./ModalWithForm.css";

function ModalWithForm({children, buttonText, title, isOpen, onClose, onSubmit, isValid}) {
    return (
      <div className={`modal  ${isOpen ? "modal_opened" : ""}`}>
        <div className="modal__content">
          <h2 className="modal__title">{title}</h2>
          <button
            onClick={onClose}
            type="button"
            className="modal__close"
          />
          <form className="modal__form" onSubmit={onSubmit}>

            {children}

            <button 
            type="submit" 
            className={'modal__submit ${!isValid && "modal__submit_disabled"}'}
            disabled={!isValid}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    );
}

export default ModalWithForm;