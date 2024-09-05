import "./App.css";
import { Layout } from "./Layout";
import { ComboBoxField } from "./components/ComboBoxField";
import { DocumentManager } from "./components/DocumentManager";
import { DocumentRow } from "./components/DocumentRow";
import { FormHelpText } from "./components/FormHelpText";
import { FormRow } from "./components/FormRow";
import { FormStructure } from "./components/FormStructure";
import { RUTField } from "./components/RUTField";
import { TextField } from "./components/TextField";
import { FieldAccessProvider } from "./context/FieldAccessContext";
import { useForm } from "./hooks/useForm";

function App() {
  const { handleForm } = useForm();

  return (
    <FieldAccessProvider>
      <Layout title={"FORMULARIO DE POSTULACIÓN - ECTP 2024"}>
        <FormHelpText
          text={
            "¡Bienvenido/a!\nPara poder postular, debe completar el siguiente formulario.\nComo primer paso, ingrese su RUT para poder continuar"
          }
        />
        <RUTField />
        <FormStructure title="Datos Personales">
          <FormRow>
            <TextField label="Nombres" stateHandler={handleForm} />
            <TextField
              label="Nombre Social"
              stateHandler={handleForm}
              info={`
              (Opcional) Corresponde a nombre utilizado por una persona en 
              razón de su expresión de género y que difiere de su nombre legal.
              `}
            />
          </FormRow>
          <FormRow>
            <TextField label="Primer Apellido" stateHandler={handleForm} />
            <TextField label="Segundo Apellido" stateHandler={handleForm} />
          </FormRow>
          <FormRow>
            <ComboBoxField
              items={["Soltero/a", "Casado/a", "Divorciado/a", "Viudo/a"]}
              label="Estado Civil"
              placeholder="su estado civil"
              stateHandler={handleForm}
            />
            <TextField
              label="Fecha Nacimiento"
              stateHandler={handleForm}
              props={{ type: "date" }}
            />
          </FormRow>
          <FormRow>
            <ComboBoxField
              items={["Hombre", "Mujer"]}
              label="Sexo Registral"
              stateHandler={handleForm}
              placeholder="sexo"
            />
            <ComboBoxField
              items={["Masculino", "Femenino", "Otro", "Prefiero no responder"]}
              label="Identidad de Género"
              stateHandler={handleForm}
              placeholder="identidad de género"
            />
          </FormRow>
          <FormRow>
            <ComboBoxField
              items={["No pertenece", "Alcalufe (Kawashkar)", "Atacameño"]}
              label="Pertenencia Pueblos"
              stateHandler={handleForm}
              placeholder="pertenencia pueblos"
            />
            <ComboBoxField
              items={["Ninguna", "Orgánica/Visceral", "Física Motora"]}
              label="Situación Discapacidad"
              stateHandler={handleForm}
              placeholder="situación discapacidad"
            />
          </FormRow>
          <FormRow>
            <TextField label="Correo Electrónico" stateHandler={handleForm} />
            <TextField
              stateHandler={handleForm}
              label="Celular (8 dígitos)"
              props={{ type: "tel" }}
            />
          </FormRow>
          <FormRow>
            <ComboBoxField
              items={["Chilena", "Otra"]}
              label="Nacionalidad"
              placeholder="nacionalidad"
              stateHandler={handleForm}
            />
          </FormRow>
          <FormRow>
            <ComboBoxField
              items={["Tarapacá", "Antofagasta"]}
              label="Región de Nacimiento"
              placeholder="región de nacimiento"
              stateHandler={handleForm}
            />
            <ComboBoxField
              items={["Comuna 1", "Comuna 2"]}
              label="Comuna de Nacimiento"
              placeholder="comuna de nacimiento"
              stateHandler={handleForm}
            />
          </FormRow>
          <FormRow>
            <ComboBoxField
              items={["Tarapacá", "Antofagasta"]}
              label="Región de Residencia"
              placeholder="región de residencia"
              stateHandler={handleForm}
            />
            <ComboBoxField
              items={["Comuna 1", "Comuna 2"]}
              label="Comuna de Residencia"
              placeholder="comuna de residencia"
              stateHandler={handleForm}
            />
          </FormRow>
          <FormRow>
            <TextField
              label="Dirección de residencia"
              stateHandler={handleForm}
            />
            <TextField
              label="Sector/Villa/Población"
              stateHandler={handleForm}
            />
          </FormRow>
          <FormRow>
            <TextField label="Ciudad de residencia" stateHandler={handleForm} />
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
              stateHandler={handleForm}
              items={["Cuenta Corriente", "Visa/RUT"]}
            />
          </FormRow>
          <FormRow>
            <TextField label="Número de cuenta" stateHandler={handleForm} />
          </FormRow>
        </FormStructure>
        <FormStructure
          title="Documentos"
          indication="( Formatos soportados: doc, docx, pdf, png, jpg, zip o rar )"
        >
          <DocumentManager>
            <DocumentRow label="Tipo de Documento	Documento a Cargar Cédula de Identidad (Vigente y por ambos lados)" />
            <DocumentRow label="Currículum Vitae (Actualizado a la fecha)" />
            <DocumentRow label="Certificado de Título" />
            <DocumentRow
              label="Certificado de Inhabilidad (El certificado es gratuito y se puede obtener a través del enlace inhabilidades.srcei.cl)"
              info="El certificado de inhabilidades debe ser del mes de agosto."
            />
          </DocumentManager>
        </FormStructure>
      </Layout>
    </FieldAccessProvider>
  );
}

export default App;
