import { Patient } from '../types';
import PatientDetailItem from './PatientDetailItem';

type PatientDetailsProps = {
  patient: Patient;
};
export default function PatientDetails({ patient }: PatientDetailsProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem
        label="ID"
        data={patient.id}
      />
      <PatientDetailItem
        label="Nombre"
        data={patient.name}
      />
      <PatientDetailItem
        label="Dueño"
        data={patient.caretaker}
      />
      <PatientDetailItem
        label="Correo"
        data={patient.email}
      />
      <PatientDetailItem
        label="Fecha Alta"
        data={patient.date.toString()}
      />
      <PatientDetailItem
        label="Fecha Alta"
        data={patient.symptoms}
      />
    </div>
  );
}
