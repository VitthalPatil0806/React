import ReactDom from 'react-dom/client';
import App from './App';
import './app.css'

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <div className='form'>
    <App/>
    </div>
)