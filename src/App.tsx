import PatienForm from './components/PatienForm';
import PatientsList from './components/PatientsList';

function App() {
  return (
    <>
      <div className=" container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:2/3 md:mx-auto">
          Seguimiento de Pacientes {''}
          <span className="text-indigo-700">Veterinaria</span>
        </h1>

        <div className="mt-12 md:flex">
          <PatienForm />

          <PatientsList />
        </div>
      </div>
    </>
  );
}

export default App;
