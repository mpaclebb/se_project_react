import {useState, useEffect} from "react";
import {coordinates,APIKey} from "../../utils/constants";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/itemModal";
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
     });
     const[errors, setErrors] = useState({});

     const handleChange = (evt) => {
        const {name, value } = evt.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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
   debugger;
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
                />
            </label>
          <label htmlFor="imageURL" className="modal__label">
            Image{""}
            <input
              type="text"
              className="modal__input"
              id="imageURL"
              placeholder="Image URL"
            />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input id="cold" type="radio" className="modal__radio-input" />{" "}
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input id="cold" type="radio" className="modal__radio-input" />{" "}
              Warm
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