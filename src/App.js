import "./App.css";
import { Layout } from "./Layout";
import { ComboBoxField } from "./components/ComboBoxField";
import { DocumentManager } from "./components/DocumentManager";
import { DocumentRow } from "./components/DocumentRow";

import { FormHelpText } from "./components/FormHelpText";
import { FormRow } from "./components/FormRow";
import { FormStructure } from "./components/FormStructure";
import { TextField } from "./components/TextField";

function App() {
  return (
    <Layout title={"FORMULARIO DE POSTULACIÓN - ECTP 2024"}>
      <FormHelpText
        text={
          "¡Bienvenido/a!\nPara poder postular, debe completar el siguiente formulario.\nComo primer paso, ingrese su RUT para poder continuar"
        }
      />
      <FormStructure title="Datos Personales">
        <FormRow>
          <TextField label="Nombres" />
          <TextField
            label="Nombre Social"
            info={`
              (Opcional) Corresponde a nombre utilizado por una persona en 
              razón de su expresión de género y que difiere de su nombre legal.
          `}
          />
        </FormRow>
        <FormRow>
          <TextField label="Primer Apellido" />
          <TextField label="Segundo Apellido" />
        </FormRow>
        <FormRow>
          <ComboBoxField
            items={["Soltero/a", "Casado/a", "Divorciado/a", "Viudo/a"]}
            label="Estado Civil"
            placeholder="su estado civil"
          />
          <TextField label="Fecha Nacimiento" props={{ type: "date" }} />
        </FormRow>
        <FormRow>
          <ComboBoxField
            items={["Hombre", "Mujer"]}
            label="Sexo Registral"
            placeholder="sexo"
          />
          <ComboBoxField
            items={["Masculino", "Femenino", "Otro", "Prefiero no responder"]}
            label="Identidad de Género"
            placeholder="identidad de género"
          />
        </FormRow>
        <FormRow>
          <ComboBoxField
            items={["No pertenece", "Alcalufe (Kawashkar)", "Atacameño"]}
            label="Pertenencia Pueblos"
            placeholder="pertenencia pueblos"
          />
          <ComboBoxField
            items={["Ninguna", "Orgánica/Visceral", "Física Motora"]}
            label="Situación Discapacidad"
            placeholder="situación discapacidad"
          />
        </FormRow>
        <FormRow>
          <TextField label="Correo Electrónico" />
          <TextField label="Celular (8 dígitos)" />
        </FormRow>
        <FormRow>
          <ComboBoxField
            items={["Chilena", "Otra"]}
            label="Nacionalidad"
            placeholder="nacionalidad"
          />
        </FormRow>
        <FormRow>
          <ComboBoxField
            items={["Tarapacá", "Antofagasta"]}
            label="Región de Nacimiento"
            placeholder="región de nacimiento"
          />
          <ComboBoxField
            items={["Comuna 1", "Comuna 2"]}
            label="Comuna de Nacimiento"
            placeholder="comuna de nacimiento"
          />
        </FormRow>
        <FormRow>
          <ComboBoxField
            items={["Tarapacá", "Antofagasta"]}
            label="Región de Residencia"
            placeholder="región de residencia"
          />
          <ComboBoxField
            items={["Comuna 1", "Comuna 2"]}
            label="Comuna de Residencia"
            placeholder="comuna de residencia"
          />
        </FormRow>
        <FormRow>
          <TextField label="Dirección de residencia" />
          <TextField label="Sector/Villa/Población" />
        </FormRow>
        <FormRow>
          <TextField label="Ciudad de residencia" />
        </FormRow>
      </FormStructure>
      <FormStructure title="Datos cuenta bancaria">
        <FormRow>
          <ComboBoxField
            label="Banco"
            placeholder="banco"
            items={["Banco Santander", "Scottiabank"]}
          />
          <ComboBoxField
            label="Tipo de Cuenta"
            placeholder="tipo de cuenta"
            items={["Cuenta Corriente", "Visa/RUT"]}
          />
        </FormRow>
        <FormRow>
          <TextField label="Número de cuenta"/>
        </FormRow>
      </FormStructure>
      <FormStructure title="Documentos" indication="( Formatos soportados: doc, docx, pdf, png, jpg, zip o rar )">
        <DocumentManager>
          <DocumentRow 
            label="Tipo de Documento	Documento a Cargar Cédula de Identidad (Vigente y por ambos lados)"
          />
          <DocumentRow 
            label="Currículum Vitae (Actualizado a la fecha)"
          />
          <DocumentRow 
            label="Certificado de Título"
          />
          <DocumentRow 
            label="Certificado de Inhabilidad (El certificado es gratuito y se puede obtener a través del enlace inhabilidades.srcei.cl)"
          />
        </DocumentManager>
      </FormStructure>
    </Layout>
  );
}

export default App;
