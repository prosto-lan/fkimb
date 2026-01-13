import React from "react"
import './Registration.css'

const Registartion = () => {

  return (
    <div className="registration-wrapper">
        <div className="registration-main">
            <h2>Регистрация</h2>
            <form action="" className="registration-form">
                <input type="text" name="" id="" placeholder="Логин"/>
                <input type="text" name="" id="" placeholder="ФИО"/>
                <input type="password" name="" id="" placeholder="Пароль"/>
                <input type="password" name="" id="" placeholder="Подтверждение пароля"/>
                <input type="email" name="" id="" placeholder="Почта"/>
                <button>Зарегистрироваться</button>
            </form>
        </div>
    </div>
  )
}

export default Registartion