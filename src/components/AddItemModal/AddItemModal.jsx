import "./AddItemModal.css"
import React, {useEffect} from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormAndValidation } from "../../hooks/useFormAndValidation";

const AddItemModal = ({
  onClose,
  isOpen,
  onAddItem,
  isLoading
}) => {


  /* Form Validation*/

  const { values, handleChange, errors, isValid, setValues, resetForm}= 
useFormAndValidation();


useEffect(() => {
  resetForm();
}, [isOpen]); 

const handleSubmit = (e) => {
   console.log(values);
    e.preventDefault();
    onAddItem(values);
    console.log("Form data: values");
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          value={values.name || ""} //from form validation
          // value={name} need to change name value
          onChange={handleChange} //from form validation
          //onChange={handleNameChange}
          required
        />
        {errors.name && <span className="modal__error">{errors.name}</span>}
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          name="imageUrl"
          value={values.imageUrl || ""} //from form validaiton
          // value={imageUrl}
          onChange={handleChange} // from form validation need to use with handleURLChange
          // onChange={handleImageUrlChange}
          required
        />
        {errors.url && <span className="modal__error">{errors.url}</span>}
      </label>
      <fieldset className="modal__radio-button">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            className="modal__radio-input"
            type="radio"
            id="hot"
            name="weather"
            value="hot"
            required
            onChange={handleChange}
            checked={values.weather === "hot"}
          />
          Hot
        </label>

        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            className="modal__radio-input"
            type="radio"
            id="warm"
            name="weather"
            value="warm"
            required
            onChange={handleChange}
            checked={values.weather === "warm"}
          />
          Warm
        </label>

        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            className="modal__radio-input"
            type="radio"
            id="cold"
            name="weather"
            value="cold"
            required
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          Cold
        </label>
        {errors.weather && (
          <span className="modal__error">{errors.weather}</span>
        )}
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;