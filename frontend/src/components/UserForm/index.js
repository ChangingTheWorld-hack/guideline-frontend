import React from "react";
import { Form } from "semantic-ui-react";

const UserForm = () => {
  const options = {
    sex: [
      { key: "m", text: "Мужской", value: "male" },
      { key: "f", text: "Женский", value: "female" }
    ]
  };
  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Select
          fluid
          label="Пол"
          placeholder="Пол"
          options={options.sex}
        />
        <Form.Input fluid label="Возраст" placeholder="Возраст" />
      </Form.Group>
      <Form.Input
        fluid
        label="Характер недомогания"
        placeholder="Характер недомогания"
      />
      <Form.Group widths="equal">
        <Form.Input fluid label="Степень боли" placeholder="Степень боли" />
        <Form.Input
          fluid
          label="Продолжительность боли"
          placeholder="Продолжительность боли"
        />
      </Form.Group>
      <Form.Input
        fluid
        label="Сопутствующие заболевания/аллергия"
        placeholder="Сопутствующие заболевания/аллергия"
      />
      <Form.Input fluid label="Давление" placeholder="Давление" />
      <button type="submit" className="ui button">
        Submit
      </button>
    </Form>
  );
};

export default UserForm;
