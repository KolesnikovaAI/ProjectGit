import React, { Component } from "react";
//import {useLocation} from 'react-router-dom'
import Title from './Title';
import Search from './Search';

type TypeProps = {
  title?:string,//readonly для пропсов по умолчанию
}

type TypeStates = {
  value: string,
  visibility: boolean,
  id: string,
  date: string,
  imgSrc: string,
  repositorList: string,
}



class Profile extends Component <TypeProps, TypeStates> {
  render() {
    return (
      <div className = 'container'>
        <Title title ='Поиск информации о GitHub пользователе'/>
        <Search />
      </div>
    );
  }
}

export default Profile;
