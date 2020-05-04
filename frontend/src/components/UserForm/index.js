import React, { PureComponent } from "react";
import { Form } from "semantic-ui-react";
import "./UserForm.scss";

const options = {
  sex: [
    { key: "m", text: "Мужской", value: "male" },
    { key: "f", text: "Женский", value: "female" }
  ],
  symptoms: [
    { key: "pryschi-child", text: "Прыщи", value: "pryschi-child" },
    {
      key: "rvota-ponos-child",
      text: "Рвота,понос",
      value: "rvota-ponos-child"
    },
    { key: "zapor-child", text: "Запор", value: "zapor-child" },
    {
      key: "ukusy-nasekomyh-child",
      text: "Укусы насекомых",
      value: "ukusy-nasekomyh-child"
    },
    {
      key: "enterobioz-child",
      text: "Энтеробиоз",
      value: "enterobioz-child"
    },
    {
      key: "bol-v-gorle-child",
      text: "Боль в горле",
      value: "bol-v-gorle-child"
    },
    { key: "ekzema-child", text: "Экзема", value: "ekzema-child" },
    { key: "vetryanka-child", text: "Ветрянка", value: "vetryanka-child" },
    {
      key: "drugieobrashenia",
      text: "Другие обращения",
      value: "drugieobrashenia"
    },
    {
      key: "nederzhanie-mochi-child",
      text: "Недержание мочи",
      value: "nederzhanie-mochi-child"
    },
    {
      key: "narusheniya-sna-child",
      text: "Нарушения сна",
      value: "narusheniya-sna-child"
    },
    {
      key: "grudnoe-vskarmlivanie-child",
      text: "Грудное вскармливание",
      value: "grudnoe-vskarmlivanie-child"
    },
    {
      key: "atopicheskiy-dermatit-child",
      text: "Атопический дерматит",
      value: "atopicheskiy-dermatit-child"
    },
    {
      key: "pitanie-detey",
      text: "Питание детей раннего возраста",
      value: "pitanie-detey"
    }
  ],
  diseases: [
    {
      key: "osteochondrosis",
      text: "Остеохондроз",
      value: "osteochondrosis"
    },
    {
      key: "vegetovascular-dystonia",
      text: "Вегетососудистая дистония",
      value: "vegetovascular-dystonia"
    },
    {
      key: "arthritis",
      text: "Артрит",
      value: "arthritis"
    }
  ],
  pressure: [
    {
      key: "low-pressure",
      text: "< 90/60",
      value: "LOW"
    },
    {
      key: "normal-pressure",
      text: "90/60 - 120/80",
      value: "MEDIUM"
    },
    {
      key: "high-pressure",
      text: "> 120/80",
      value: "HIGH"
    }
  ]
};

class UserForm extends PureComponent {
  state = {};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  onSubmit = () => this.props.onSubmit(this.state);

  render() {
    return (
      <Form className="user-form" onSubmit={this.onSubmit}>
        <Form.Group widths="equal">
          <Form.Select
            fluid
            name="sex"
            label="Пол"
            placeholder="Пол"
            options={options.sex}
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="age"
            label="Возраст"
            placeholder="Возраст"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Dropdown
          clearable
          fluid
          multiple
          search
          selection
          options={options.symptoms}
          name="malaiseType"
          label="Характер недомогания"
          placeholder="Характер недомогания"
          onChange={this.handleChange}
        />
        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="painLevel"
            label="Степень боли"
            placeholder="Степень боли"
            onChange={this.handleChange}
          />
          <Form.Input
            fluid
            name="painDuration"
            label="Продолжительность боли"
            placeholder="Продолжительность боли"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Dropdown
          clearable
          fluid
          multiple
          search
          selection
          options={options.diseases}
          name="additionalDiseases"
          label="Сопутствующие заболевания/аллергия"
          placeholder="Сопутствующие заболевания/аллергия"
          onChange={this.handleChange}
        />
        <Form.Select
          fluid
          options={options.pressure}
          name="currentPressure"
          label="Текущее артериальное давление (мм. рт. столба)"
          placeholder="Давление"
          onChange={this.handleChange}
        />
        <Form.Select
          fluid
          options={options.pressure}
          name="normalPressure"
          label="Артериальное давление в обычном состоянии (мм. рт. столба)"
          placeholder="Давление"
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}

export default UserForm;
