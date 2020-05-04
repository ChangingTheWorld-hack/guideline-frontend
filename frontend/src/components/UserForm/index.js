import React, { PureComponent } from "react";
import { Form } from "semantic-ui-react";
import _isEqual from "lodash/isEqual";
import "./UserForm.scss";

const options = {
  sex: [
    { key: "m", text: "Мужской", value: "MAN" },
    { key: "f", text: "Женский", value: "WOMAN" }
  ],
  symptoms: [
    { key: "psychical", text: "Психическое", value: "Психическое" },
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
      key: "nederzhanie-mochi-child",
      text: "Недержание мочи",
      value: "nederzhanie-mochi-child"
    },
    {
      key: "narusheniya-sna-child",
      text: "Нарушения сна",
      value: "narusheniya-sna-child"
    }
  ],
  painLevel: [
    {
      key: "0",
      text: "0 – полное отсутствие боли.",
      value: "0"
    },
    {
      key: "1",
      text:
        "1 - боль очень слабая, едва заметная. Большую часть времени о ней не думается.",
      value: "1"
    },
    {
      key: "2",
      text:
        "2 – несильная боль. Она может раздражать и время от времени приступообразно усиливаться.",
      value: "2"
    },
    {
      key: "3",
      text:
        "3 – боль заметна, она отвлекает, однако к ней можно привыкнуть и приспособиться.",
      value: "3"
    },
    {
      key: "4",
      text:
        "4 – умеренная боль. Если человек глубоко погружен в какое-то занятие, он может игнорировать ее, но только в течение какого-то времени, однако затем она обязательно отвлечет внимание на себя.",
      value: "4"
    },
    {
      key: "5",
      text:
        "5 – умеренно сильная боль. Ее нельзя игнорировать больше, чем несколько минут, но сделав над собой усилие, человек может выполнять какую-то работу или участвовать в каком-то мероприятии.",
      value: "5"
    },
    {
      key: "6",
      text:
        "6 – умеренно сильная боль, которая мешает выполнять нормальные ежедневные действия, так как сосредоточение на чем-то становится чрезвычайно сложной задачей.",
      value: "6"
    },
    {
      key: "7",
      text:
        "7 – тяжелая боль, подчиняющая себе все ощущения и существенно ограничивающая способность человека производить обычные действия и общаться с другими. Мешает спать.",
      value: "7"
    },
    {
      key: "8",
      text:
        "8 – интенсивная боль. Физическая активность сильно ограничена. Словесное общение требует огромного усилия.",
      value: "8"
    },
    {
      key: "9",
      text:
        "9 – мучительная боль. Человек не в состоянии разговаривать. Возможны неконтролируемые стоны или плач.",
      value: "9"
    },
    {
      key: "10",
      text:
        "10 – невыносимая боль. Человек привязан к постели и, возможно, в бреду. Болевые ощущения такой силы приходится испытывать в течение жизни очень малому количеству людей.",
      value: "10"
    }
  ],
  painDuration: [
    {
      key: "minutes",
      text: "минуты",
      value: "minutes"
    },
    {
      key: "hours",
      text: "часы",
      value: "hours"
    },
    {
      key: "days",
      text: "дни",
      value: "days"
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

  handleChange = (e, { name, value }) => {
    if (name === "malaiseType" && !_isEqual(value, ["Психическое"])) {
      return alert(
        "Извините, доступны для отображения только психические заболевания."
      );
    } else {
      this.setState({ [name]: value });
    }
  };

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
            type="number"
            min={1}
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
          <Form.Select
            fluid
            options={options.painLevel}
            name="painLevel"
            label="Степень боли"
            placeholder="Степень боли"
            onChange={this.handleChange}
          />
          <Form.Select
            fluid
            options={options.painDuration}
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
        <Form.Button color="green">Отправить</Form.Button>
      </Form>
    );
  }
}

export default UserForm;
