function ModalWithForm() {
    return (
        <div className="modal">
            <form className="modal__form">
              <h2 className="modal__title">New garment</h2>
              <button type="button" className="modal__close">
                CLOSE
              </button>
              <label htmlFor="" className="modal__label">
                Name <input type="text" className="modal__input" />
              </label>
            </form>
        </div>
    );
}

export default ModalWithForm;