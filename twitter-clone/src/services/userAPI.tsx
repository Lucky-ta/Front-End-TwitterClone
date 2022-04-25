interface IUserAttributes {
    email: string,
    password: string,
}

class useAPI {

  async authToken(token: string) {
    const data = await fetch('https://twitter-lukita.herokuapp.com/user/validate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,
          },
        });
        return await data.json();
  };

  async signin(credentials: IUserAttributes) {
    const data = await fetch('https://twitter-lukita.herokuapp.com/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
        });
        return await data.json();
  }
}

export default new useAPI();