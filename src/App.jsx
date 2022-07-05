import FormTasks from './components/FormTasks';
import Navbar from './components/Navbar';
import Tasks from './components/Tasks';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="p-4">
          <FormTasks />
          <Tasks />
        </div>
      </main>
    </>
  );
};

export default App;
