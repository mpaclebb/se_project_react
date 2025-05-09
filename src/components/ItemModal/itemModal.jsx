//ItemModal renders the item image and title. The component accepts the following props:

//onClose (works the same way as the Modal card data that you need to render)




import "./itemModal.css";

function ItemModal({ activeModal, onClose, card}) {
    return (
<div className={`modal ${activeModal === "preview" && "modal_opened"}`}>
    <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
        CLOSE
        </button>
        <img src={card.link} alt="" className="modal__image" />
        <div className="modal__footer">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
    </div>
</div>
</div>
    );
}

export default ItemModal;