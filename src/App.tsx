import Router from 'navigation/Router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';

const getTheme = (palette: PaletteMode) => {
	return createTheme({
		palette: {
			mode: palette,
		},
	});
};

function App() {
	return (
		<ThemeProvider theme={getTheme('dark')}>
			<CssBaseline />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
