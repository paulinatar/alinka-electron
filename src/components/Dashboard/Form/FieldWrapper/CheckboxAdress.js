import React, { AllHTMLAttributes as checkedInput } from "react";

const CheckboxAdress = () => {
  if (checkedInput === true) {
    `child.city.input.value` === `applicant.city1.input.value`;
  }

  return (
    <>
      <label>Zaznacz jeżeli adres taki sam jak dziecka</label>
      <input
        name="checkedInput"
        type="checkbox"
        onChange={this.duplicateAdress.bind(this)}
      />
    </>
  );
};
export default CheckboxAdress;
