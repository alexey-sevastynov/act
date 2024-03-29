import React, { useContext, useEffect, useState } from "react";
import "./Act.css";

import {
  getStrNumbsUpTo10,
  getStrNumbsUpTo20,
  getStrNumbsUpTo100,
  getStrNumbsUpTo1000,
  getStrNumbsUpTo10000,
} from "../getStringNumbsUpTo.js";

import { MyContext } from "../App";

function Act() {
  const {
    count,
    setCount,
    setName,
    name,
    names,
    setNames,
    setDay,
    day,
    setMonth,
    month,
    months,
    setYear,
    year,
    setPrice1,
    price1,
    price2,
    setPrice2,
    nav,
    setNav,
    order,
    setOrder,
    activeEdit,
    setActivEdit,
    activeInputEdit,
    setInputActivEdit,
  } = useContext(MyContext);

  const [items, setItems] = useState([]);
  const [text, setText] = useState(``);
  const [toggleCount, setToggleCount] = useState(false);

  const numberInString = (numberPrice1) => {
    if (
      numberPrice1.length > 5 ||
      numberPrice1 === "00" ||
      numberPrice1 === "000" ||
      numberPrice1 === "0000" ||
      numberPrice1 === "00000"
    ) {
      return `Вивели більше 5 цифр або поставили 0 на початку рядка!`;
    }

    if (!numberPrice1 || numberPrice1 === "0") {
      return `Введіть значення. ${price2} коп.`;
    }

    if (numberPrice1.length === 1) {
      switch (numberPrice1) {
        case "1":
          return `Одна грн. ${price2} коп.`;
        case "2":
          return `Дві грн. ${price2} коп.`;
        case "3":
          return `Три грн. ${price2} коп.`;
        case "4":
          return `Чотири грн. ${price2} коп.`;
        case "5":
          return `П'ять грн. ${price2} коп.`;
        case "6":
          return `Шість грн. ${price2} коп.`;
        case "7":
          return `Сім грн. ${price2} коп.`;
        case "8":
          return `Вісім грн. ${price2} коп.`;
        case "9":
          return `Дев'ять грн. ${price2} коп.`;
        default:
          return `Нуль грн. ${price2} коп.`;
      }
    }

    if (numberPrice1.length === 2 && numberPrice1[0] === "1") {
      switch (numberPrice1) {
        case "10":
          return `Десять грн. ${price2} коп.`;
        case "11":
          return `Одинадцять грн. ${price2} коп.`;
        case "12":
          return `Дванадцять грн. ${price2} коп.`;
        case "13":
          return `Тринадцять грн. ${price2} коп.`;
        case "14":
          return `Чотирнадцять грн. ${price2} коп.`;
        case "15":
          return `П'ятнадцять грн. ${price2} коп.`;
        case "16":
          return `Шістнадцять грн. ${price2} коп.`;
        case "17":
          return `Сімнадцять грн. ${price2} коп.`;
        case "18":
          return `Вісімнадцять грн. ${price2} коп.`;
        case "19":
          return `Дев'ятнадцять грн. ${price2} коп.`;
        default:
          return `Нуль грн. ${price2} коп.`;
      }
    }

    if (numberPrice1.length === 2) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}`:
          return `${getStrNumbsUpTo100(numberPrice1[0])} 
                    ${getStrNumbsUpTo10(numberPrice1[1]).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }

    if (numberPrice1.length === 3 && !(numberPrice1[1] === "1")) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}`:
          return `${getStrNumbsUpTo1000(numberPrice1[0])} 
                    ${getStrNumbsUpTo100(numberPrice1[1]).toLowerCase()} 
                    ${getStrNumbsUpTo10(numberPrice1[2]).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }

    if (numberPrice1.length === 3) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}`:
          return `${getStrNumbsUpTo1000(numberPrice1[0])} 
                    ${getStrNumbsUpTo20(
                      `${numberPrice1[1]}${numberPrice1[2]}`
                    ).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }

    if (numberPrice1.length === 4 && !(numberPrice1[2] === "1")) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}`:
          return `${getStrNumbsUpTo10000(numberPrice1[0])} 
                    ${getStrNumbsUpTo1000(numberPrice1[1]).toLowerCase()} 
                    ${getStrNumbsUpTo100(numberPrice1[2]).toLowerCase()} 
                    ${getStrNumbsUpTo10(numberPrice1[3]).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }

    if (numberPrice1.length === 4) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}`:
          return `${getStrNumbsUpTo10000(numberPrice1[0])} 
                    ${getStrNumbsUpTo1000(numberPrice1[1]).toLowerCase()} 
                    ${getStrNumbsUpTo20(
                      `${numberPrice1[2]}${numberPrice1[3]}`
                    ).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }

    if (
      numberPrice1.length === 5 &&
      numberPrice1[0] === "1" &&
      !(numberPrice1[3] === "1")
    ) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}${numberPrice1[4]}`:
          return `${getStrNumbsUpTo20(
            `${numberPrice1[0]}${numberPrice1[1]}`
          )} тисяч 
                    ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} 
                    ${getStrNumbsUpTo100(numberPrice1[3]).toLowerCase()} 
                    ${getStrNumbsUpTo10(numberPrice1[4]).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }

    if (
      numberPrice1.length === 5 &&
      !(numberPrice1[0] === "1") &&
      !(numberPrice1[3] === "1") &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "11" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "12" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "13" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "14" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "15" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "16" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "17" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "18" &&
      `${numberPrice1[0]}${numberPrice1[1]}` === "19"
    ) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}${numberPrice1[4]}`:
          return `${getStrNumbsUpTo100(numberPrice1[0])}
                    ${getStrNumbsUpTo10(numberPrice1[1]).toLowerCase()} тисяч
                    ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} 
                    ${getStrNumbsUpTo100(numberPrice1[3]).toLowerCase()} 
                    ${getStrNumbsUpTo10(numberPrice1[4]).toLowerCase()} 
                грн.${price2} коп.`;
        default:
          return ``;
      }
    }

    if (numberPrice1.length === 5 && numberPrice1[0] === "1") {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}${numberPrice1[4]}`:
          return `${getStrNumbsUpTo20(
            `${numberPrice1[0]}${numberPrice1[1]}`
          )} тисяч 
                    ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} 
                    ${getStrNumbsUpTo20(
                      `${numberPrice1[3]}${numberPrice1[4]}`
                    ).toLowerCase()} 
                    грн.${price2} коп.`;
        default:
          return ``;
      }
    }

    if (
      numberPrice1.length === 5 &&
      !(numberPrice1[0] === "1") &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "11" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "12" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "13" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "14" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "15" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "16" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "17" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "18" &&
      `${numberPrice1[3]}${numberPrice1[4]}` === "19"
    ) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}${numberPrice1[4]}`:
          return `${getStrNumbsUpTo100(numberPrice1[0])}
                    ${getStrNumbsUpTo10(numberPrice1[1]).toLowerCase()} тисяч
                    ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} 
                    ${getStrNumbsUpTo20(
                      `${numberPrice1[3]}${numberPrice1[4]}`
                    ).toLowerCase()} 
                грн.${price2} коп.`;
        default:
          return ``;
      }
    }

    if (numberPrice1.length === 5 && !(numberPrice1[0] === "1")) {
      switch (numberPrice1) {
        case `${numberPrice1[0]}${numberPrice1[1]}${numberPrice1[2]}${numberPrice1[3]}${numberPrice1[4]}`:
          return `${getStrNumbsUpTo100(numberPrice1[0])}
                    ${getStrNumbsUpTo10(numberPrice1[1]).toLowerCase()} тисяч
                    ${getStrNumbsUpTo1000(numberPrice1[2]).toLowerCase()} 
                    ${getStrNumbsUpTo100(numberPrice1[3]).toLowerCase()} 
                    ${getStrNumbsUpTo10(numberPrice1[4]).toLowerCase()} 
                  
                грн.${price2} коп.`;
        default:
          return ``;
      }
    }
  };

  const addItemToArrNames = () => {
    let newId = names[names.length - 1].id + 1;
    console.log(newId);

    setNames([...names, { name: name, id: newId }]);

    alert(`Ви добавили нову назву ${name}`);
    setInputActivEdit(!activeInputEdit);
    setOrder([...order, { name: name, id: newId }]);
  };

  const removeItemInArrNames = (name) => {
    if (
      names.length > 1 &&
      (names !== "?" ||
        names !== 'ПП "НПФ СВК"' ||
        names === 'ТОВ ВКФ "Інватех"')
    ) {
      const objDelete = names.find((item) => item.name === name);
      const objFilter = names.filter((item) => item !== objDelete);
      setNames(objFilter);
      alert(`Ви видалили назву ${name}`);

      console.log(objDelete, objFilter);
    }
  };

  const clickToggle = () => {
    setToggleCount(!toggleCount);
  };

  return (
    <>
      <div className="flex">
        <div className="col-1">
          <p className="head">Затверджую</p>

          <p>Приватний підприємець</p>
          <p>Севастьянов О.В.</p>

          <p className="foot">____________________________</p>
        </div>

        <div className="col-2">
          <p className="head">Затверджую</p>

          {activeInputEdit ? (
            <div className="edit-name">
              <select
                className="name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              >
                {names.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
              <p className="test">{name}</p>
              <img
                onClick={() => removeItemInArrNames(name)}
                src="./icon/delete.png"
                alt="del"
                width={19}
                className="edit-img__name-1"
              />
              <img
                onClick={() => setInputActivEdit(!activeInputEdit)}
                className="edit-img__name"
                src="./icon/editing.png"
                alt="edit"
                width={16}
              />
            </div>
          ) : (
            <div className="edit-name">
              <input
                className="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <p className="test">{name}</p>
              <img
                onClick={() => addItemToArrNames(name)}
                src="./icon/accept.png"
                alt="accept"
                width={20}
                className="edit-img__name-1"
              />

              <img
                onClick={() => setInputActivEdit(!activeInputEdit)}
                className="edit-img__name"
                src="./icon/close.png"
                alt="edit"
                width={16}
              />
            </div>
          )}

          <p className="foot">____________________________</p>
        </div>
      </div>

      <div className="title-act">
        <h1>АКТ здачі-прийняття робіт</h1>
        <h1>(надання послуг)</h1>
        <h1 className="title-act__count">{toggleCount && `№${count}`}</h1>
        <button className="title-act__btn">
          {toggleCount ? (
            <img onClick={clickToggle} src="./icon/on.png" height={15} />
          ) : (
            <img onClick={clickToggle} src="./icon/off.png" height={15} />
          )}
        </button>
      </div>

      <div className="text">
        <p>
          Ми, що нижче підписались представники Замовника {name} , з однієї
          сторони, і представник Виконавця. Приватний підприємець Севастьянов
          О.В, з другої сторони, склали справжній акт про те, що Виконавцем були
          проведені наступні роботи (надання таких послуг) за рахунком №{count}{" "}
          від "{day}" {month} {year}р.:
          <br />
          <input
            onChange={(e) => setCount(e.target.value)}
            value={count}
            className="count"
            type="text"
          />
          <input
            onChange={(e) => setDay(e.target.value)}
            value={day}
            className="data"
            type="text"
          />
          <select
            className="month"
            name="month"
            onChange={(e) => setMonth(e.target.value)}
            id={month}
            value={month}
          >
            {months.map((item, key) => (
              <option key={key} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            onChange={(e) => setYear(e.target.value)}
            value={year}
            className="year"
            type="text"
          />
        </p>
        <p>Послуги перевезення вантажу:</p>
        <div className="flex">
          <input
            value={nav}
            onChange={(e) => setNav(e.target.value)}
            className="route"
            type="text"
          />
          <div className="col-2a">
            <p>
              <input
                onChange={(e) => setPrice1(e.target.value)}
                value={price1}
                className="price-1"
                type="number"
              />
              ,
              <input
                onChange={(e) => setPrice2(e.target.value)}
                value={price2}
                className="price-2"
                type="number"
              />
              грн(без ПДВ 20%)
            </p>
          </div>
        </div>
        <br />

        {/* {numberInString(price1, setText, text)} */}
        {activeEdit ? (
          <p className="edit-text">
            Загальна вартість робіт (послуги) склала без ПДВ {price1}грн.{" "}
            {price2}коп.({numberInString(price1)})
            <img
              onClick={() => setActivEdit(!activeEdit)}
              className="edit"
              src="./icon/editing.png"
              alt="edit"
              width={16}
            />
          </p>
        ) : (
          <>
            <p className="edit-text">
              Загальна вартість робіт (послуги) склала без ПДВ {price1}грн.{" "}
              {price2}коп.({text})
              <img
                onClick={() => setActivEdit(!activeEdit)}
                className="edit"
                src="./icon/close.png"
                alt="edit"
                width={16}
              />
            </p>
            <input
              onClick={() =>
                setText(numberInString(price1).replace(/\s+/g, " ").trim())
              }
              className="input100"
              onChange={(e) => setText(e.target.value)}
              value={text}
              type="text"
            />
          </>
        )}

        <br />
        <p>ПДВ 0.00 грн.</p>
        <p>Сторони претензій одна до одної не мають.</p>
      </div>

      <br />

      <div className="flex">
        <div className="col-1">
          <p>Від Виконавця:</p>
          <br />
          <p>____________________________</p>
          <p>
            "{day}" {month} {year} р.
          </p>
          <p>Приватний підприємець</p>
          <p>Севастьянов О.В.</p>
        </div>
        <div className="col-2">
          <p>Від Замовника:</p>
          <br />
          <p>____________________________</p>
          <p>
            "{day}" {month} {year} р.
          </p>
          <p>{name}</p>
        </div>
      </div>

      <button onClick={() => window.print()} className="btn">
        Друкувати
      </button>
    </>
  );
}

export default Act;
