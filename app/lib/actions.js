'use client';

export async function authenticate(formData) {
  const email = formData.get('email');
  const password = formData.get('password');
  console.log('Email:', email);
  console.log('Password:', password);

  try {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: email, // Assuming email as username
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      }),
    });

    const user = await res.json();

    if (res.ok) {
      // Store tokens in localStorage
      localStorage.setItem('accessToken', user.accessToken);
      localStorage.setItem('refreshToken', user.refreshToken);
      console.log('User authenticated:', user);

      // Redirect or perform further actions (e.g., navigate to profile)
      // window.location.href = '/profile'; // Example redirect
    } else {
      console.error('Authentication failed:', user.message);
      // Handle authentication error (e.g., show a message to the user)
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
  }
}
