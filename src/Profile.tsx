import React, { Component } from "react";

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
  constructor(props: TypeProps) {
    super(props);
    this.state = {
      value: "",
      visibility: false, //по умолчанию значение стейта видимости ставим false, т.е. невидимый
      id: '',
      date: '',
      imgSrc: '',
      repositorList: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event:React.ChangeEvent<HTMLInputElement>) {
    //функция,получающая значение из инпута
    this.setState({ value: event.target.value }); //меняем состояние value, получая значение из инпута
  }

  getUser(login:string) {
    //функция, возвращающая промис с объектом пользователя
    return fetch(`https://api.github.com/users/${login}`).then((response) =>
      response.json()
    );
  }

  async handleSubmit(event:React.MouseEvent<HTMLInputElement>) {
    //async -функция асинхронная
    let user = await this.getUser(this.state.value); // ждет,когда выполниться промис и придет результат для значения this.state.value
    this.setState({
      id: user.id,
      date: user.created_at,
      imgSrc: user.avatar_url,
      repositorList: user.repos_url,
      visibility: true,
    }); //изменяем состояние присваивая значение из user как несколько свойств одного объекта
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <input
          type="text"
          placeholder="Введите GIT"
          onChange={this.handleChange}
        ></input>
        <input type="submit" value="GO!" onClick={this.handleSubmit}></input>
        {this.state.visibility && <div>ID</div>}
        {/* как только стейт visibility станет true (при нажатии кнопки) строка будет видна */}
        <div>{this.state.id}</div>
        {this.state.visibility && <div>Дата создания</div>}
        <div>{this.state.date}</div>
        {this.state.visibility && <div>Список репозиториев</div>}
        <a href={`https://github.com/${this.state.value}?tab=repositories`}>{this.state.repositorList}</a>
        {this.state.visibility && <div>Аватар</div>}
        <img src={this.state.imgSrc}></img>
      </div>
    );
  }
}

export default Profile;
