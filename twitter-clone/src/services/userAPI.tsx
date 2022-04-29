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
        Authorization: token,
      },
    });
    return await data.json();
  }

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

  async tweet(tweet: any, token: string) {
    const data = await fetch('http://localhost:3001/tweet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ tweet }),
    });
    return data.json();
  }

  async allTweets() {
    const data = await fetch('http://localhost:3001/tweet', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return data.json();
  }
}

export default new useAPI();
