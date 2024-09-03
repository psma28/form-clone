import './App.css';
import { Layout } from './Layout';

import { FormHelpText } from './components/FormHelpText';
import { FormRow } from './components/FormRow';
import { FormStructure } from './components/FormStructure';
import { TextField } from './components/TextField';

function App() {
  return (
    <Layout title={"FORMULARIO DE POSTULACIÓN - ECTP 2024"}>
      <FormHelpText 
      text={"¡Bienvenido/a!\nPara poder postular, debe completar el siguiente formulario.\nComo primer paso, ingrese su RUT para poder continuar"}
      />
      <FormStructure title={"Datos Personales"}>
        <FormRow>
          <TextField label="Nombres" />
          <TextField label="Nombre Social" 
          info={`
              (Opcional) Corresponde a nombre utilizado por una persona en 
              razón de su expresión de género y que difiere de su nombre legal.
          `}/>
        </FormRow>
        <FormRow>
          <TextField label="Primer Apellido" />
          <TextField label="Segundo Apellido" />
        </FormRow>
        <FormRow>
          <TextField label="Estado Civil" />
          <TextField label="Fecha Nacimiento" />
        </FormRow>
      </FormStructure>
    </Layout>
  );
}

export default App;
