import React, { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { CurrentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  //   const [isChecked, setIsChecked] = useState(currentTempUnit === "C");
  //   useEffect(() => setIsChecked(currentTempUnit === "C"), [currentTempUnit]);

  return (
    <label className="toggle-switch__label">
      <input
        className="toggle-switch__checkbox toggle-switch__checkbox_state_hidden"
        type="checkbox"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          CurrentTemperatureUnit === "F"
            ? "toggle-switch__slider toggle-switch__slider-F"
            : "toggle-switch__slider toggle-switch__slider-C"
        }
      />
      <p
        className={`toggle-switch__temp-F ${CurrentTemperatureUnit === "F" && "toggle-switch__active"}`}
      >
        F
      </p>
      <p
        className={`toggle-switch__temp-C ${CurrentTemperatureUnit === "C" && "toggle-switch__active"}`}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;
