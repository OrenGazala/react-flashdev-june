import { useEffect, useState } from 'react';
import Todos from '../components/Todos';

const Home = () => {
  const [check, setCheck] = useState('check');

  useEffect(() => {
    console.log('start');

    return () => {
      console.log('destroy');
    };
  }, []);

  useEffect(() => {
    console.log(check);
  }, [check]);

  const handleChange = (e) => {
    const value = e.target.value;
    setCheck(value);
  };

  return (
    <>
      <Todos />

      <input type="text" onChange={handleChange} />
      {check}
    </>
  );
};

export default Home;
