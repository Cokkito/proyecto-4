import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { Dialog, DialogContent } from '@mui/material';

interface Props {
	onClose: () => void;
	onSumbit: (email: string, password: string) => {};
}
function Login({ onClose, onSumbit }: Props) {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const email = data.get('email')?.toString() || '';
		const password = data.get('password')?.toString() || '';
		onSumbit(email, password);
	};

	return (
		<Dialog open onClose={onClose}>
			<DialogContent sx={{ padding: '0 0 0 0' }}>
				<Grid container component='main'>
					<CssBaseline />
					<Grid
						item
						xs={false}
						sm={5}
						md={5}
						sx={{
							backgroundImage:
								'url(https://petindustry.co/wp-content/uploads/2020/10/EL-BANO-UNA-MEJOR-EXPERIENCIA-PARA-LOS-FELINOS-pet-industry-veterinaria-mascotas-grooming-departamentos-8.jpeg)',
							backgroundRepeat: 'no-repeat',
							backgroundColor: (t) =>
								t.palette.mode === 'light'
									? t.palette.grey[50]
									: t.palette.grey[800],
							backgroundSize: 'cover',
							backgroundPosition: 'center',
						}}
					/>
					<Grid
						item
						xs={12}
						sm={7}
						md={7}
						component={Paper}
						elevation={6}
						square
					>
						<Box
							sx={{
								my: 8,
								mx: 4,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
								<LockOutlinedIcon />
							</Avatar>
							<Typography component='h1' variant='h5'>
								Login
							</Typography>
							<Box
								component='form'
								noValidate
								onSubmit={handleSubmit}
								sx={{ mt: 1 }}
							>
								<TextField
									margin='normal'
									required
									fullWidth
									id='email'
									label='Correo'
									name='email'
									autoComplete='email'
									autoFocus
								/>
								<TextField
									margin='normal'
									required
									fullWidth
									name='password'
									label='Contraseña'
									type='password'
									id='password'
									autoComplete='current-password'
								/>
								<Button
									type='submit'
									fullWidth
									variant='contained'
									sx={{ mt: 3, mb: 2 }}
								>
									<Typography>Login</Typography>
								</Button>
								<Grid container>
									<Grid item>
										<Link href='#' variant='body2'>
											{'Crea una cuenta'}
										</Link>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</DialogContent>
		</Dialog>
	);
}

export default Login;
