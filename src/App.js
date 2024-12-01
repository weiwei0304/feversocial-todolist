import './i18n';
import { useTranslation } from 'react-i18next';
import Header from './components/header/Header';
import ListContent from './components/list/ListContent';

function App() {
  const { i18n } = useTranslation(); // 確保 i18n 被正確初始化

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
