import React, { Component } from 'react';
import './App.css';
import { Container, Image, Grid, Divider, Icon } from 'semantic-ui-react';
import SearchBar from '../components/Search';
import Menu from '../components/Menu';
import TopBar from '../components/TopBar';
import FeedBar  from '../components/FeedBar';
import Avatar  from '../components/Avatar';
import styles from '../styles/Main';
import SubMenus from '../components/SubMenus';
import Filters from '../components/Filters';
import BirthdayBox from '../components/BirthdayBox';

var filters = [
    {title: "Новости"},
    {title: "Объявления"},
    {title: "Идеи"},
]

var birthdays = [{
        name: "Филина Наталья",
        src: "http://portalresizepics.aemedia.ru/?image=http://portalcontent.aemedia.ru//ContentSite40/DocLib/Persons/upload/NFilin01@EMEA-MEDIA.jpg&width=150&height=150"
    },{
        name: "Панфилова Юлия",
        src: "http://portalresizepics.aemedia.ru/?image=http://portalcontent.aemedia.ru//ContentSite40/DocLib/Persons/upload/YPanfi01@EMEA-MEDIA.jpg&width=150&height=150"
    },{
        name: "Дубинин Владислав",
        src: "http://portalresizepics.aemedia.ru/?image=http://portalcontent.aemedia.ru//ContentSite40/DocLib/Persons/upload/VDubin01@EMEA-MEDIA.jpg&width=150&height=150"
    }
]

var submenus = {
    defaultMenuIcon: "core",
    items: [{title: "Структура"},
            {title: "Стратегия"},
            {title: "Новые назначения"},
            {title: "Навигация"},
            {title: "Вакансии"},
            {title: "Документы"}
    ]
}

var menus = {
    defaultMenuIcon: "core",
    items: [
        {
            title: "Заявки CORE",
            id: "core",
            icon: "settings"
        }, {
            title: "Переговорные",
            id: "rooms",
            icon: "bathtub"
        }, {
            title: "Мое развитие",
            id: "dashboard",
            icon: "dashboard"
        }, {
            title: "Адресная книга",
            id: "address",
            icon: "address book"
        }, {
            title: "Запись на массаж",
            id: "massage",
            icon: "heartbeat"
        },{
            title: "Доступ к RDS",
            id: "rds",
            icon: "computer"
        },]
};

var topfeeds = [
    {
        src: "bullman.jpg",
        title: "Live Q&A с Джерри Булманном",
        likes: "1"
    },{
        src: "chernyshov.jpg",
        title: "Интервью Андрея Чернышова для Adindex.ru",
        likes: "1"
    },{
        src: "kupreev.jpg",
        title: "Интервью Анатолия Купреева для Adindex.ru",
        likes: "6"
    }
];

var feeds = [
    {
        src: "redapple.jpg",
        header: "Голосуйте",
        author: "Ласькова Мария",
        descr: "Друзья, в преддверии Red Apple Sostav.ru запустил спецпроект, в рамках которого посетители сайта могут выбрать одного из победителей фестиваля.Давайте поддержим кейсы, поданные от агентств нашей группы, и проголосуем за один или несколько из них:",
        days: "1 день назад",
        type: "Новости",
        likes: "6"
    },{
        src: "nosov.jpg",
        header: "Мафия в офисе",
        author: "Александр Носов",
        descr: "Слабо развиты неформальные связи между нашими подразделениями и агентствами. ...",
        days: "2 дня назад",
        type: "Идея",
        likes: "6"
    },{
        src: "zverkova.jpg",
        header: "Продаю 2 билета в театр ",
        author: "Зверкова Варвара",
        descr: "Коллеги, продаю 2 билента в Театриум на Серпуховке п/р Терезы Дуровой на спектакль Имя. В ролях :	Мария Куликова, Георгий Дронов, Константин Юшкевич, Мария Рыщенкова, Антон Эльдаров..",
        days: "5 дней назад",
        type: "Объявления",
        likes: "6"
    },{
        src: "jungle.jpg",
        header: "Isobar Russia - Агентство года в рейтинге Digital Index 2017!",
        author: "Ласькова Мария",
        descr: "Вчера AdIndex подвел результаты ежегодного рейтинга digital агентств Digital Index 2017.",
        days: "5 дней назад",
        type: "Новости",
        likes: "6"
    },{
        src: "masterclass.jpg",
        header: "Мастер-класс Елены Артемовой в Высшей Школе Экономики",
        author: "Ласькова Мария",
        descr: "Российская экономика в 2017 году показывает стабильный, но небольшой рост. По всем признакам, поводов для оптимизма немного: страна находится под санкциями, доходы населения не растут, частному предпринимательству по-прежнему трудно выживать и развиваться...",
        days: "6 дней назад",
        type: "Новости",
        likes: "6"
    },{
        src: "izotova.jpg",
        header: "Foreign Languages",
        author: "Зверкова Варвара",
        descr: "Коллеги! а может есть какая-то действующая группа по изучению французского примерно на среднем уровне?  ну вдруг :)Или же есть желающие продолжить изучение французского, когда несправедливо заброшенного? давайте вместе! Преподавателя найдем",
        days: "10 дней назад",
        type: "Комментарии",
        likes: "6"
    }
]
var searchSource = [
  {
    "title": "Интервью",
    "description": "Андрея Чернышова для Adindex.ru",
    "image": "http://portalresizepics.aemedia.ru/?image=http://portal.aemedia.ru:8080/DocLib/Wyg/100_100_20171113121142561.jpg&w=202&h=99&mode=crop",
    "price": "News"
  },
  {
    "title": "Мафия в офисе",
    "description": "Слабо развиты неформальные связи между ...",
    "image": "http://portalresizepics.aemedia.ru/?image=http://portalcontent.aemedia.ru/ContentSite40/DocLib/Persons/upload/ANosov01@EMEA-MEDIA.jpg&width=42&height=42%22%3E",
    "price": "Ideas"
  },
  {
    "title": "Rowe, Kozey and Nitzsche",
    "description": "Self-enabling system-worthy frame",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/davidsasda/128.jpg",
    "price": "$84.04"
  },
  {
    "title": "Runolfsdottir - Daniel",
    "description": "Team-oriented impactful encryption",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/sulaqo/128.jpg",
    "price": "$71.40"
  },
  {
    "title": "Lueilwitz - Kertzmann",
    "description": "Inverse grid-enabled methodology",
    "image": "https://s3.amazonaws.com/uifaces/faces/twitter/lu4sh1i/128.jpg",
    "price": "$20.38"
  }
]


class App extends Component {
  render() {
    return (

        <div style={styles.app.area}>
            <div style={styles.app.panel}>
                <Grid columns='equal'>
                    <Grid.Row verticalAlign = 'bottom' textAlign='center'>
                        <Grid.Column computer = {6} mobile = {15}>
                                    <Image src={require('../images/big_logo.png')}
                                    as='a'
                                    size='tiny'
                                    href='http://google.com'
                                    target='_blank'/>
                        </Grid.Column>
                        <Grid.Column >
                            <SearchBar search = {searchSource}/>
                        </Grid.Column>
                        <Grid.Column >
                            <Icon size = 'large' link name = 'facebook square'/>
                        </Grid.Column>
                        <Grid.Column>
                            <Avatar/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            <div>
                <Divider hidden />
                <Grid centered columns={2}>
                    <Grid.Column mobile={8} tablet={4} computer={2}>
                        <Menu menus = {menus.items} defaultMenu = {menus.defaultMenuIcon}/>
                        <Divider section />
                        <SubMenus menus = {submenus.items} defaultMenu = {submenus.defaultMenuIcon}/>
                    </Grid.Column>
                    <Grid.Column mobile={24} tablet={12} computer={6}>
                        <TopBar data = {topfeeds}/>
                        <FeedBar feeds = {feeds}/>
                    </Grid.Column>
                    <Grid.Column mobile={8} tablet={4} computer={2}>
                        <Filters filters = {filters}/>
                        <Divider hidden fitted />
                        <BirthdayBox persons = {birthdays}/>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
  }
}

export default App;
