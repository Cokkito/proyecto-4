import Router from 'navigation/Router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import SnackbarProvider from 'components/SnackbarProvider';

function App() {
	const theme = useSelector((state: RootState) => state.settingsScreen.theme);

	const getTheme = (palette: PaletteMode) => {
		return createTheme({
			palette: {
				mode: palette,
			},
		});
	};

	return (
		<ThemeProvider theme={getTheme(theme)}>
			<CssBaseline />
			<SnackbarProvider>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</SnackbarProvider>
		</ThemeProvider>
	);
}

export default App;
