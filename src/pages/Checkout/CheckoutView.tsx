import Container from '@mui/material/Container';
import {
	Typography,
	Paper,
	Stepper,
	Step,
	StepLabel,
	Box,
	Button,
} from '@mui/material';
import React from 'react';
import AddressForm from './Steps/AddressForm';
import PaymentForm from './Steps/PaymentForm';
import Review, { Props as ReviewProps } from './Steps/Review';

interface Props {
	cart: ReviewProps['cart'];
	addressForm: ReviewProps['addressForm'];
	paymentForm: ReviewProps['paymentForm'];
}

function ShopView({ cart, addressForm, paymentForm }: Props) {
	const steps = ['Detalles de entrega', 'Detalles de pago', 'Revisa tu órden'];

	const [activeStep, setActiveStep] = React.useState(0);

	function getStepContent(step: number) {
		switch (step) {
			case 0:
				return <AddressForm />;
			case 1:
				return <PaymentForm />;
			case 2:
				return <Review {...{ cart, addressForm, paymentForm }} />;
			default:
				throw new Error('Unknown step');
		}
	}

	const handleNext = () => {
		setActiveStep(activeStep + 1);
	};

	const handleBack = () => {
		setActiveStep(activeStep - 1);
	};

	return (
		<>
			<Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
				<Paper
					variant='outlined'
					sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
				>
					<Typography component='h1' variant='h4' align='center'>
						Checkout
					</Typography>
					<Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
						{steps.map((label) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? (
						<React.Fragment>
							<Typography variant='h5' gutterBottom>
								Gracias por comprar con nosotros!
							</Typography>
							<Typography variant='subtitle1'>
								Su número de órden es #2001539. Pronto recibirá un correo de por
								parte de nuestro equipo para el seguimiento del pedido.
							</Typography>
						</React.Fragment>
					) : (
						<React.Fragment>
							{getStepContent(activeStep)}
							<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
								{activeStep !== 0 && (
									<Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
										Atrás
									</Button>
								)}
								<Button
									variant='contained'
									onClick={handleNext}
									sx={{ mt: 3, ml: 1 }}
								>
									{activeStep === steps.length - 1
										? 'Terminar órden'
										: 'Siguiente'}
								</Button>
							</Box>
						</React.Fragment>
					)}
				</Paper>
			</Container>
		</>
	);
}

export default ShopView;
