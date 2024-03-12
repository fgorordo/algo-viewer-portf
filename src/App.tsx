import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Ui/Sidebar';


export function App() {
  return (
    <main className="w-full flex bg-black text-white min-h-screen">
      <Sidebar />
      <Outlet />
    </main>
  );
}



