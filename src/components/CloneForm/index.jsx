import { useForm } from "./hooks/useForm";
import { LoadingProvider } from "./context/LoadingContext";
import { FieldAccessProvider } from "./context/FieldAccessContext";
import { Layout } from "./Layout";
import { FormHelpText } from "./components/FormHelpText";
import { RUTField } from "./components/RUTField";
import { TextField } from "./components/TextField";
import { FormStructure } from "./components/FormStructure";
import { CheckBoxField } from "./components/CheckBoxField";
import { ComboBoxField } from "./components/ComboBoxField";
import { DocumentManager } from "./components/DocumentManager";
import { DocumentRow } from "./components/DocumentRow";
import { FormRow } from "./components/FormRow";
import { SumbmitButton } from "./components/SubmitButton";
import { completionValidator } from "./services/validators/completionValidator";
import { emailValidator } from "./services/validators/emailValidator";
import { letterCharValidator } from "./services/validators/letterCharValidator";
import { numericCharValidator } from "./services/validators/numericCharValidator";

export const CloneForm = ()=>{
    const { handleForm, sendForm } = useForm();

  return (
    <LoadingProvider>
      <FieldAccessProvider>
        <Layout title={"FORMULARIO DE POSTULACIÓN - ECTP 2024"}>
          <FormHelpText
            text={
              "¡Bienvenido/a!\nPara poder postular, debe completar el siguiente formulario.\nComo primer paso, ingrese su RUT para poder continuar"
            }
          />
          <RUTField />
          <FormStructure title="Datos Personales">
            <CheckBoxField
              id="cargo-postulacion"
              formHandler={handleForm}
              label="Cargo(s) a postular"
              items={["Examinador", "Apoyo técnico", "Supervisor"]}
            />
            <FormRow>
              <TextField
                id="nombres"
                label="Nombres"
                formHandler={handleForm}
                validators={[letterCharValidator, completionValidator]}
              />
              <TextField
                id="nombre-social"
                label="Nombre Social"
                formHandler={handleForm}
                info={`
                (Opcional) Corresponde a nombre utilizado por una persona en 
                razón de su expresión de género y que difiere de su nombre legal.
                `}
              />
            </FormRow>
            <FormRow>
              <TextField
                id="primer-apellido"
                label="Primer Apellido"
                formHandler={handleForm}
                validators={[letterCharValidator, completionValidator]}
              />
              <TextField
                id="segundo-apellido"
                label="Segundo Apellido"
                formHandler={handleForm}
                validators={[letterCharValidator, completionValidator]}
              />
            </FormRow>
            <FormRow>
              <ComboBoxField
                id="estado-civil"
                items={["Soltero/a", "Casado/a", "Divorciado/a", "Viudo/a"]}
                label="Estado Civil"
                placeholder="su estado civil"
                formHandler={handleForm}
              />
              <TextField
                id="fecha-nacimiento"
                label="Fecha Nacimiento"
                formHandler={handleForm}
                props={{ type: "date" }}
                validators={[completionValidator]}
              />
            </FormRow>
            <FormRow>
              <ComboBoxField
                id="sexo-registral"
                items={["Hombre", "Mujer"]}
                label="Sexo Registral"
                formHandler={handleForm}
                placeholder="sexo"
              />
              <ComboBoxField
                id="identidad-genero"
                items={[
                  "Masculino",
                  "Femenino",
                  "Otro",
                  "Prefiero no responder",
                ]}
                label="Identidad de Género"
                formHandler={handleForm}
                placeholder="identidad de género"
              />
            </FormRow>
            <FormRow>
              <ComboBoxField
                id="pertenencia-pueblos"
                items={["No pertenece", "Alcalufe (Kawashkar)", "Atacameño"]}
                label="Pertenencia Pueblos"
                formHandler={handleForm}
                placeholder="pertenencia pueblos"
              />
              <ComboBoxField
                id="situacion-discapacidad"
                items={["Ninguna", "Orgánica/Visceral", "Física Motora"]}
                label="Situación Discapacidad"
                formHandler={handleForm}
                placeholder="situación discapacidad"
              />
            </FormRow>
            <FormRow>
              <TextField
                id="email"
                label="Correo Electrónico"
                formHandler={handleForm}
                validators={[emailValidator, completionValidator]}
              />
              <TextField
                id="telefono"
                formHandler={handleForm}
                label="Celular (8 dígitos)"
                props={{ type: "tel" }}
                validators={[numericCharValidator, completionValidator]}
              />
            </FormRow>
            <FormRow>
              <ComboBoxField
                id="nacionalidad"
                items={["Chilena", "Otra"]}
                label="Nacionalidad"
                placeholder="nacionalidad"
                formHandler={handleForm}
              />
            </FormRow>
            <FormRow>
              <ComboBoxField
                id="region-nacimiento"
                items={["Tarapacá", "Antofagasta"]}
                label="Región de Nacimiento"
                placeholder="región de nacimiento"
                formHandler={handleForm}
              />
              <ComboBoxField
                id="comuna-nacimiento"
                items={["Comuna 1", "Comuna 2"]}
                label="Comuna de Nacimiento"
                placeholder="comuna de nacimiento"
                formHandler={handleForm}
              />
            </FormRow>
            <FormRow>
              <ComboBoxField
                id="region-residencia"
                items={["Tarapacá", "Antofagasta"]}
                label="Región de Residencia"
                placeholder="región de residencia"
                formHandler={handleForm}
              />
              <ComboBoxField
                id="comuna-residencia"
                items={["Comuna 1", "Comuna 2"]}
                label="Comuna de Residencia"
                placeholder="comuna de residencia"
                formHandler={handleForm}
              />
            </FormRow>
            <FormRow>
              <TextField
                id="direccion-residencia"
                label="Dirección de residencia"
                formHandler={handleForm}
                validators={[letterCharValidator, completionValidator]}
              />
              <TextField
                id="sector"
                label="Sector/Villa/Población"
                formHandler={handleForm}
                validators={[letterCharValidator, completionValidator]}
              />
            </FormRow>
            <FormRow>
              <TextField
                id="ciudad-residencia"
                label="Ciudad de residencia"
                formHandler={handleForm}
                validators={[letterCharValidator, completionValidator]}
              />
            </FormRow>
          </FormStructure>
          <FormStructure title="Datos cuenta bancaria">
            <FormRow>
              <ComboBoxField
                id="banco"
                label="Banco"
                placeholder="banco"
                items={["Banco Santander", "Scottiabank"]}
              />
              <ComboBoxField
                id="tipo-cuenta"
                label="Tipo de Cuenta"
                placeholder="tipo de cuenta"
                formHandler={handleForm}
                items={["Cuenta Corriente", "Visa/RUT"]}
              />
            </FormRow>
            <FormRow>
              <TextField
                id="numero-cuenta"
                label="Número de cuenta"
                formHandler={handleForm}
                validators={[numericCharValidator, completionValidator]}
              />
            </FormRow>
          </FormStructure>
          <FormStructure
            title="Documentos"
            indication="( Formatos soportados: doc, docx, pdf, png, jpg, zip o rar )"
          >
            <DocumentManager>
              <DocumentRow
                formHandler={handleForm}
                id="cedula-identidad"
                label="Tipo de Documento	Documento a Cargar Cédula de Identidad (Vigente y por ambos lados)"
              />
              <DocumentRow
                formHandler={handleForm}
                id="cv"
                label="Currículum Vitae (Actualizado a la fecha)"
              />
              <DocumentRow
                formHandler={handleForm}
                id="titulo"
                label="Certificado de Título"
              />
              <DocumentRow
                formHandler={handleForm}
                id="certificado-inhabilidad"
                label="Certificado de Inhabilidad (El certificado es gratuito y se puede obtener a través del enlace inhabilidades.srcei.cl)"
                info="El certificado de inhabilidades debe ser del mes de agosto."
              />
            </DocumentManager>
          </FormStructure>
        </Layout>
        <SumbmitButton sendForm={sendForm} />
      </FieldAccessProvider>
    </LoadingProvider>
  );
}