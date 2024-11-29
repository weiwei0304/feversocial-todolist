// components
import Header from './components/header/Header';
import ListContent from './components/list/ListContent';

function App() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex-1 bg-[#ECECEC] p-4">
          <ListContent />
        </div>
      </div>
    </>
  );
}

export default App;
