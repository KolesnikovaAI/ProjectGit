import React, { Component } from 'react'
import { Connect } from 'react-redux';

 class Search extends Component {
   constructor(props) {
      super(props);
      this.state = {
        login: "",
        visibility: false,
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      //функция,получающая значение из инпута
      this.setState({ login: event.target.value }); //меняем состояние value, получая значение из инпута
    }
  
    getUser(login) {
      //функция, возвращающая промис с объектом пользователя
      return fetch(`https://api.github.com/users/${login}`).then((response) =>
        response.json()
      );
    }
  
    async handleSubmit(event) {
      //async -функция асинхронная
      let user = await this.getUser(this.state.login); // ждет,когда выполниться промис и придет результат для значения this.state.value
      this.setState({
        visibility:true,
        id: user.id,
        date: user.created_at,
        imgSrc: user.avatar_url,
        repositorList: user.repos_url,
        
      });
    }; 
      
  
    };
  render() {
    const {login, visibility} = this.state;
    return (
      <div>
      <input type="text"
          placeholder="Введите GIT"
          onChange={this.handleChange}
        ></input>
        <input type="submit" value="GO!" onClick={this.handleSubmit}></input>
        {visibility && <User login = {login} visibility = {visibility}/>}
 
      </div>
    )
  }

  export default Search

  