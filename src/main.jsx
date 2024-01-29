import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './helpers/scrollToTop';
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
        <StyledEngineProvider injectFirst>
			<BrowserRouter>
				<ScrollToTop />
				<App />
			</BrowserRouter>
		</StyledEngineProvider>
	</React.StrictMode>,
);
