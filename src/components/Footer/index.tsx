import { Paper, Switch, Typography } from '@mui/material';
import { ColoredURL, StyledDiv, StyledHorizonntalDiv } from './styles';
import { useDispatch, useStore } from 'react-redux';
import { setTheme } from 'redux/reducers/settingsScreen';
import { RootState } from 'redux/store';
import { FacebookRounded, Instagram, Twitter } from '@mui/icons-material';
import Rating from 'components/Rating';
import { useLocation } from 'react-router-dom';

function Footer() {
	const dispatch = useDispatch();
	const store = useStore();
	const storeData = store.getState() as RootState;
	const { theme } = storeData.settingsScreen;
	const location = useLocation();

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
				display: 'flex',
				flexDirection: 'row',
				placeContent: 'center',
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
			<StyledDiv>
				<Typography variant='caption'>
					Visita nuestras redes sociales!
				</Typography>
				<StyledHorizonntalDiv>
					<ColoredURL href='https://www.facebook.com/' target='_blank'>
						<FacebookRounded />
					</ColoredURL>
					<ColoredURL href='https://www.instagram.com/' target='_blank'>
						<Instagram />
					</ColoredURL>
					<ColoredURL href='https://www.twitter.com/' target='_blank'>
						<Twitter />
					</ColoredURL>
				</StyledHorizonntalDiv>
			</StyledDiv>
			<StyledDiv>
				<Rating pagePath={location.pathname} />
			</StyledDiv>
		</Paper>
	);
}

export default Footer;
