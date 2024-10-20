'use server';

export async function authenticate(formData) {
  const email = formData.get('email');
  const password = formData.get('password');
  console.log(email);
  console.log(typeof password);
  const getUser = async () => {
    const res = await fetch('https://dummyjson.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        // username: 'emilys',
        username: `${email}`,
        // username: 'sophiab',
        // password: 'emilyspass',
        // password: 'sophiabpass',
        password: `${password}`,
        expiresInMins: 30, // optional, defaults to 60
      }),
    });

    return await res.json();
  };

  const user = await getUser();
  console.log(user);
  // Your authentication logic
  // console.log('Authenticating user:', email);
  // console.log('pass', password);
}
