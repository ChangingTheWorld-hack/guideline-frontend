import React from "react";
import { Form } from "semantic-ui-react";
import "./UserForm.scss";

const UserForm = () => {
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
        value: "low-pressure"
      },
      {
        key: "normal-pressure",
        text: "90/60 - 120/80",
        value: "normal-pressure"
      },
      {
        key: "high-pressure",
        text: "> 120/80",
        value: "high-pressure"
      }
    ]
  };
  return (
    <Form className="user-form">
      <Form.Group widths="equal">
        <Form.Select
          fluid
          label="Пол"
          placeholder="Пол"
          options={options.sex}
        />
        <Form.Input fluid label="Возраст" placeholder="Возраст" />
      </Form.Group>
      <Form.Dropdown
        clearable
        fluid
        multiple
        search
        selection
        options={options.symptoms}
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
      <Form.Dropdown
        clearable
        fluid
        multiple
        search
        selection
        options={options.diseases}
        label="Сопутствующие заболевания/аллергия"
        placeholder="Сопутствующие заболевания/аллергия"
      />
      <Form.Select
        fluid
        options={options.pressure}
        label="Текущее артериальное давление (мм. рт. столба)"
        placeholder="Давление"
      />
      <Form.Select
        fluid
        options={options.pressure}
        label="Артериальное давление в обычном состоянии (мм. рт. столба)"
        placeholder="Давление"
      />
      <Form.Button>Submit</Form.Button>
    </Form>
  );
};

export default UserForm;
