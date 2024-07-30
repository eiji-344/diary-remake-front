import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/your-endpoint')
      .then(response => {
        // Laravelからのレスポンスのmessageプロパティを取得してセット
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>{message}</p> {/* messageプロパティを表示 */}
    </div>
  );
}

export default Home;
