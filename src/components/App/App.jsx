import {useState, useEffect} from "react";
import {Route, Routes } from "react-router-dom";
import {coordinates,APIKey} from "../../utils/constants";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import {getweather, filterWeatherData} from "../../utils/weatherApi";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

function App() {
    const [weatherData, setWeatherData] = useState({
        type:"",
        temp: { F: 999, C: 999},
        city: "",
    });

    const [activeModal, setActiveModal] = useState("");
    const [selectedCard, setSelectedCard] = useState({});
    const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);

    const handleCardClick = (card) => {
        setActiveModal("preview");
        setSelectedCard(card);
    }
    const handleAddClick = () => {
        setActiveModal("add-garment");
    };

    const closeActiveModal = () => {
        setActiveModal("");
    };

    const toggleMobileMenu = () => {
      setMobileMenuOpened((prev) => !prev);
    };

    const handleToggleSwitchChange =() => {
      currentTemperatureUnit ==="F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
    };

    useEffect(() => {
getweather(coordinates,APIKey )
.then((data) => {
   const filteredData = filterWeatherData(data);
   setWeatherData(filteredData);
   
    })
.catch(console.error);
    }, []);

    useEffect(() => {
      function handleCloseMethods(evt){

      if (evt.key === "Escape" || evt.key === "esc" || evt.keyCode === 27){
        closeActiveModal();
      }

       if (evt.type === "click" && evt.target.classList.contains("modal")) {
        closeActiveModal();
      }
    }

    if (activeModal !== "") {
      document.addEventListener("keydown", handleCloseMethods);
      document.addEventListener("click", handleCloseMethods);
    }

    return () => {
      document.removeEventListener("keydown", handleCloseMethods);
      document.removeEventListener("click", handleCloseMethods);
    };
  }, [activeModal]);

  

  const { values, handleChange, errors, isValid, setValues, resetForm} = useFormAndValidation();

  const handleSubmit = (e,evt) => {
  e.preventDefault();
  console.log(values);
  console.log("Form data: values");
  resetForm();
  };

    return (
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData} isMobileMenuOpened={isMobileMenuOpened} toggleMobileMenu={toggleMobileMenu}/>
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
          <Footer />
        </div>
        <ModalWithForm title="New garment" buttonText="Add garment" isOpen={activeModal === "add-garment"} onClose={closeActiveModal} onSubmit={handleSubmit} isValid={isValid} >
           
            <label htmlFor="name" className="modal__label">
                Name{""}
                <input
                type="text"
                className="modal__input"
                id="name"
                placeholder="Name"
                value={values.name || ""}
                onChange={handleChange}
                required
                />
                {errors.name && <span className="modal__error">{errors.name}
                  </span>}
            </label>
          <label htmlFor="imageURL" className="modal__label">
            Image{""}
            <input
              type="url"
              className="modal__input"
              id="imageURL"
              placeholder="Image URL"
              name="url"
              value={values.url || ""}
              onChange={handleChange}
              required
            />
            {errors.url && <span className="modal__error">{errors.url}</span>}
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input id="hot" type="radio" className="modal__radio-input" name="weather" value="hot" required />
              Hot
            </label>

            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >

              <input id="warm" type="radio" className="modal__radio-input" name="weather" value="Warm" required/>
              Warm
            </label>

            <label 
             htmlFor="cold"
             className="modal__label modal__label_type_radio"
             >
                <input id="cold" type="radio" className="modal__radio-input" name="weather" value="Cold" required/>
                Cold
             </label>
             {errors.weather && (
            <span className="modal__error">{errors.weather}</span>  
            )}
          </fieldset>
        </ModalWithForm>
        <ItemModal
         activeModal={activeModal} 
         card={selectedCard}
         onClose={closeActiveModal}
         />
      </div>
    );
}


export default App;