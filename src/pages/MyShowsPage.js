import { useEffect, useState } from 'react';

function MyShowsPage() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const token = {
      token: localStorage.getItem('token')
    };

    console.log('Token = ', token);

    if (token) {
      fetch('http://localhost:4000/api/users/myshows', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(token)
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            return res.json();
          }
        })
        .then((data) => {
          console.log(data);
          setProfile(data.profile);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div>
      <h1>{profile.name}'s Shows</h1>


    </div>
  );
}

export default MyShowsPage;
