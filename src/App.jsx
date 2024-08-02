import { useState } from 'react'
import { Testimonial } from './testimonial'
import './index.css';

const users = [
  {
    name: 'Daniel Bermudez',
    location: 'Pereira',
    work: 'Meta',
    userName: 'DBermudez23',
    testimonial: 'Estoy muy muy agradecido con mi trabajo, es unpuesto que realmente me costo pero finalmente lo consegui, gracias a freeCodeCamp y sus cursos gratuitos pude ser ingeniero de manera autodidacta, mi principal agradecimiento es a ellos...'
  },
  {
    name: 'Miguel Duran',
    location: 'Madrid',
    work: 'Google',
    userName: 'midudev',
    testimonial: 'Aprendí muchas cosas en freeCodeCamp, es una gran plataforma en la que nos brindan cursos de la mejor calidad para comenzar a programar, esto me ayudo para compartir mi conocimiento y soy el más feliz'
    },
    {
      name: 'Sebastian Tamayo',
      location: 'Pereira',
      work: 'Ada',
      userName: 'Tamayo2',
      testimonial: 'fue una gran oportunidad y sobre todo una gran experiencia la que viví en freeCodeCamp esto realmente me abrió un mundo de oportunidades sumamente esencial para mi desarrollo como profesional, hoy soy un gran ingeniero y es gracias a FCC'
    },
    {
      name: 'David Patiño',
      location: 'Pereira',
      work: 'Ada',
      userName: 'davidpatjus',
      testimonial: 'Gracias a freeCodeCamp, he logrado convertirme en una ingeniera de software competente y segura de mis habilidades. La plataforma me brindó acceso a recursos educativos de alta calidad y a una comunidad de apoyo invaluable. Estoy eternamente agradecida por la oportunidad de aprender y crecer profesionalmente a través de sus cursos gratuitos. Ahora, en mi posición en Microsoft, puedo aplicar los conocimientos adquiridos y continuar desarrollándome en esta apasionante carrera. ¡Gracias, freeCodeCamp!'
    },
    {
      name: 'Carlos Martínez',
      location: 'Buenos Aires',
      work: 'Amazon',
      userName: 'soyDalto',
      testimonial: 'FreeCodeCamp cambió mi vida por completo. Gracias a los cursos gratuitos y la increíble comunidad, pude aprender a programar desde cero y obtener las habilidades necesarias para conseguir un trabajo en Amazon. Estoy profundamente agradecido por el conocimiento y las oportunidades que freeCodeCamp me ha brindado. Ahora, puedo decir con orgullo que soy un ingeniero de software y continúo aprendiendo y creciendo todos los días. ¡Gracias, freeCodeCamp, por hacer posible mi sueño!'
    }
]


  function App () {
    return (
      <section className='App'>
      {users.map(user => {
        const {name, location, work, userName, testimonial} = user
        return(
          <Testimonial 
          userName={userName}
          name ={name}
          key = {name}
          location={location}
          work = {work}
          testimonial= {testimonial}/>
        )
      })}
    </section>
    )
  }

export default App;


