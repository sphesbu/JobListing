import { Route, createBrowserRouter,
  createRoutesFromElements, RouterProvider
} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import JobPage from './pages/JobPage.jsx';
import NotFoundPage from './layouts/NotFoundPage.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}>
  <Route index element={<Home />} />
  <Route path='/Jobs' element={<JobPage />} />
  <Route path='*' element={<NotFoundPage />} />
  </Route>
)
);

function App() {

  return <RouterProvider router={router} />;
    
  
}

export default App
