import * as React from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { PetsRounded } from '@mui/icons-material';
import { Tooltip, Avatar } from '@mui/material';
import { RootState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import Login from 'components/Login';
import { setLoginModalVisibility } from 'redux/reducers/loginScreen';
import { useLoginUserMutation } from 'services/apis/userApi';
import { resetSettings, setSettings } from 'redux/reducers/settingsScreen';

function Header() {
	const { name, email } = useSelector(
		(state: RootState) => state.settingsScreen
	);
	const { isLoginModalOpen } = useSelector(
		(state: RootState) => state.loginScreen
	);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { enqueueSnackbar } = useSnackbar();

	const [loginUser] = useLoginUserMutation();

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const closeLoginModal = () => {
		dispatch(setLoginModalVisibility(false));
	};

	const openLoginModal = () => {
		dispatch(setLoginModalVisibility(true));
	};

	const login = async (email: string, password: string) => {
		try {
			const response = await loginUser({ email, password }).unwrap();
			dispatch(setSettings(response));
			closeLoginModal();
		} catch (error: any) {
			enqueueSnackbar(error.message || error.data || 'Ocurrió un error', {
				variant: 'error',
			});
		}
	};

	const logout = async () => {
		try {
			dispatch(resetSettings());
			handleCloseUserMenu();
		} catch (error: any) {
			enqueueSnackbar(error.message || error.data || 'Ocurrió un error', {
				variant: 'error',
			});
		}
	};

	const pages = [
		{ key: 'Inicio', route: '/' },
		{ key: 'Conócenos', route: '/info' },
	];

	const settings = [{ key: 'Logout', action: logout }];

	return (
		<AppBar position='sticky'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<PetsRounded sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant='h6'
						noWrap
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						PETZ
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page.key}
									onClick={() => {
										navigate(page.route);
									}}
								>
									<Typography textAlign='center'>{page.key}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<PetsRounded sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant='h5'
						noWrap
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}
					>
						PETZ
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page.key}
								onClick={() => {
									navigate(page.route);
								}}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page.key}
							</Button>
						))}
					</Box>

					{email ? (
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title='Open settings'>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									<Avatar alt={`${name}`} src='/static/images/avatar/2.jpg' />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<MenuItem key={setting.key} onClick={setting.action}>
										<Typography textAlign='center'>{setting.key}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					) : (
						<Button
							variant='outlined'
							onClick={openLoginModal}
							sx={{
								color: 'white',
								borderColor: 'white',
								':hover': { color: 'blue', borderColor: 'blue' },
							}}
						>
							LOGIN
						</Button>
					)}
				</Toolbar>
			</Container>
			{isLoginModalOpen && <Login onSumbit={login} onClose={closeLoginModal} />}
		</AppBar>
	);
}
export default Header;
