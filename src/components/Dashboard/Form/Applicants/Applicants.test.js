import React from "react";
import ReactDOM from "react-dom";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";

import Applicants from "./Applicants";
import { reasonsList, disabilityList } from "../../../../staticData";

describe("Applicants", () => {
  let formWrapper;
  beforeEach(() => {
    // eslint-disable-next-line react/display-name
    formWrapper = component => (
      <Form
        onSubmit={() => {}}
        render={() => component}
        mutators={{ ...arrayMutators }}
        initialValues={{ applicant: { reason: "mock_state_name" } }}
      />
    );
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      formWrapper(
        <Applicants reasonsList={reasonsList} disabilityList={disabilityList} />
      ),
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("contains select with first reason", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      formWrapper(
        <Applicants reasonsList={reasonsList} disabilityList={disabilityList} />
      ),
      div
    );

    expect(div.querySelector("select[name='applicant.reason']")).toBeTruthly();
    ReactDOM.unmountComponentAtNode(div);
  });
});
