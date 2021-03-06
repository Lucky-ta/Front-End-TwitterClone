interface IUserAttributes {
    name: string,
    email: string,
    password: string,
}

export default async function registerUser(credentials: IUserAttributes) {
  const data = await fetch('https://twitter-lukita.herokuapp.com/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return data.json();
}
