import { Paper, Switch, Typography } from '@mui/material';
import { StyledDiv } from './styles';
import { useDispatch, useStore } from 'react-redux';
import { setTheme } from 'redux/reducers/settingsScreen';
import { RootState } from 'redux/store';

function Footer() {
	const dispatch = useDispatch();
	const store = useStore();
	const storeData = store.getState() as RootState;
	const { theme } = storeData.settingsScreen;

	const toggleTheme = () => {
		const themeToSet = theme === 'light' ? 'dark' : 'light';
		dispatch(setTheme(themeToSet));
	};

	return (
		<Paper
			sx={{
				width: '100%',
				position: 'sticky',
				bottom: 0,
				backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))`,
			}}
			component='footer'
			square
			variant='outlined'
		>
			<StyledDiv>
				<Typography variant='caption'>
					Jorge Mario Mora Gutierrez - 220336617
				</Typography>
				<div>
					<Typography>Dark Theme</Typography>
					<Switch
						checked={theme !== 'light'}
						onChange={toggleTheme}
						color='secondary'
					/>
				</div>
			</StyledDiv>
		</Paper>
	);
}

export default Footer;
