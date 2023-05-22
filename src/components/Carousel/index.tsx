import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
	{
		label: 'cat1',
		imgPath:
			'https://cuponassets.cuponatic-latam.com/backendCo/uploads/imagenes_descuentos/194415/f4cb95da35bec000c91598c0ca910a9515aeb559.XL2.jpg',
	},
	{
		label: 'cat2',
		imgPath:
			'https://speedy.uenicdn.com/f900a037-d1b2-4521-bd5e-1220c1cf25cc/c512_a/image/upload/v1542044383/category/shutterstock_715900171.jpg',
	},
	{
		label: 'dog1',
		imgPath:
			'https://www.sparelajarse.com/sites/default/files/styles/large/public/2021-05/spas-balnearios-perros.jpg?itok=vkQ4wCtN',
	},
	{
		label: 'dog2',
		imgPath:
			'https://www.infobae.com/new-resizer/h7QohScF5oZeqXPFc1Ud5kOpcSA=/768x432/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/12/21173751/perro-spa.jpg',
	},
];

function Carousel() {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const maxSteps = images.length;

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStepChange = (step: number) => {
		setActiveStep(step);
	};

	return (
		<Box sx={{ maxWidth: 600, minWidth: 600, flexGrow: 1 }}>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
			>
				{images.map((step, index) => (
					<div key={step.label}>
						{Math.abs(activeStep - index) <= 2 ? (
							<Box
								component='img'
								sx={{
									height: 400,
									display: 'block',
									maxWidth: 600,
									overflow: 'hidden',
									width: '100%',
								}}
								src={step.imgPath}
								alt={step.label}
							/>
						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				position='static'
				activeStep={activeStep}
				nextButton={
					<Button
						size='small'
						onClick={handleNext}
						disabled={activeStep === maxSteps - 1}
					>
						Siguiente
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button size='small' onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						Anterior
					</Button>
				}
			/>
		</Box>
	);
}

export default Carousel;
