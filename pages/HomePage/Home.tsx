import React, {useState, useEffect} from 'react';
import { Personagem, Select } from '../../components/';
import { Container, Button, Section } from '../../globalStyles';

import axios from 'axios'
function Home() {

  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    async function getItems() {
      try {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        setPeoples(data);
      } catch (error) {
        console.log(error)
      }
    }
    getItems();
  }, []);

  const selectPessoas:any = peoples.map((pessoa, index) => {return  { value: index, label: pessoa.name}})

  function removeName(id){
       const newList = peoples.filter((item) => item.id !== id);
       setPeoples(newList);
  }

  return (
    <Container>
      {peoples.map((people, index) => {
        return (
          <Section>
            <Personagem key={index} {...people} /> 
            <Button onClick={e => removeName(people.id)}>BTN SELECT</Button>
          </Section>
        )
      })}

        <Select 
            name="subject"
            label="Pessoa"
            value=''
            options={selectPessoas}
        />
        <Button>BTN SELECT</Button>
    </Container>
  );
}

export default Home;