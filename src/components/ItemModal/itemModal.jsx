//ItemModal renders the item image and title. The component accepts the following props:

//onClose (works the same way as the Modal card data that you need to render)




import "./ItemModal.css";

function ItemModal({ activeModal, onClose, card, openConfirmationModal }) {
  return (
    <div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close_type_image"
        ></button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div>
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </div>
          <button className="modal__delete" onClick= {openConfirmationModal}>Delete item</button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;