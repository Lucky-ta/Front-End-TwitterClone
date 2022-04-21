interface IUserAttributes {
    email: string,
    password: string,
}

export async function loginUser(credentials: IUserAttributes) {
  const data = await fetch('https://twitter-lukita.herokuapp.com/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return await data.json();
}
