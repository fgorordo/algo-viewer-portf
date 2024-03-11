import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Ui/Sidebar';


export function App() {
  return (
    <main className="w-full flex bg-black text-white h-screen">
      <Sidebar />
      <div className='w-full flex-1'>
        <Outlet />
      </div>
    </main>
  );
}



