import { useEffect, useState } from 'react'
import './App.css'
import EmployeeData from './components/EmployeeData';
import axios from 'axios';
import { Container } from '@radix-ui/themes';


function App() {
  
  const [data, setData] = useState([])
  const URL = 'https://assets.alippo.com/catalog/static/data.json'


  useEffect(() => {
    axios.get(URL)
      .then((res) => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  
    return (() => localStorage.clear());
  }, []);


  return (
    <>
      <Container style={{width: '100%'}}>
        {
          data.length ? <EmployeeData data={data}/> : 'Loading...'
        }
      </Container>

    </>
  )
}

export default App
