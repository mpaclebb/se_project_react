import {useState, useEffect} from "react";
import {coordinates,APIKey} from "../../utils/constants";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import {getweather, filterWeatherData} from "../../utils/weatherApi";

function App() {
    const [weatherData, setWeatherData] = useState({
        type:"",
        temp: { F: 999, C: 999},
        city: "",
    });

    const [activeModal, setActiveModal] = useState("");
    const [selectedCard, setSelectedCard] = useState({});
     const [formData, setFormData] = useState({
       name: "",
       url: "",
       weather:"",
     });
     const[errors, setErrors] = useState({});
     const [isFormValid, setIsFormValid] = useState(false);

     const handleChange = (evt) => {
        const {name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors((prevErrors) => {
          const newErrors = {
            ...prevErrors,
          };
          delete newErrors[name];
          return newErrors;
        });
        const newErrors = validate
    };

    const handleRadioChange = (evt) => {
        const{ value } = evt.target;
        setFormData({
            ...formData,
            weather: value,
        });
        setErrors((prevErrors) => {
            const newErrors = {
                ...prevErrors,
            };
            delete newErrors.weather;
            return newErrors;
        });

    }

        const handleSubmit = (evt) => {
          evt.preventDefault();
     };
    

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

    useEffect(() => {
getweather(coordinates,APIKey )
.then((data) => {
   const filteredData = filterWeatherData(data);
   setWeatherData(filteredData);
   
    })
.catch(console.error);
    }, []);


    return (
      <div className="page">
        <div className="page__content">
          <Header handleAddClick={handleAddClick} weatherData={weatherData}/>
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
          <Footer />
        </div>
        <ModalWithForm title="New garment" buttonText="Add garment" isOpen={activeModal === "add-garment"} onClose={closeActiveModal} onSubmit={handleSubmit}  >
           
            <label htmlFor="name" className="modal__label">
                Name{""}
                <input
                type="text"
                className="modal__input"
                id="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                />
            </label>
          <label htmlFor="imageURL" className="modal__label">
            Image{""}
            <input
              type="url"
              className="modal__input"
              id="imageURL"
              placeholder="Image URL"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input id="hot" type="radio" className="modal__radio-input" onChange={handleRadioChange} checked={formData.weather === "Hot"} />{" "}
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