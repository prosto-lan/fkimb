import React from "react"
import "./navbar.css"

const Navbar = () => { 

    return(
        <div className="navbar-main">
            <ul className="ul-main">
                <li><a href="">Главная</a></li>
                <li><a href="">Регистрация</a></li>
                <li><a href="">Авторизация</a></li>
                <li><a href="">Просмотр своих заявок</a></li>
                <li><a href="">Создание заявки</a></li>
                <li><a href="">Админ панель с заявками</a></li>
            </ul>
        </div>
    ) 
}

export default Navbar