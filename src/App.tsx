import './styles/global.css';
import Text from './components/Text';

const App = () => {
  return (
    <>
      <h1 className="font-bold text-2xl text-gray-900">Hello world</h1>
      <button className="bg-cyan-500 font-medium px-4 py-2 rounded text-white hover:bg-cyan-300">
        Enviar
      </button>
      <Text>Teste</Text>
    </>
  );
};

export default App;
