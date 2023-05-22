import { Divider, Typography } from '@mui/material';
import {
	Container,
	Section,
	SizedImg,
	StyledLottie,
	StyledPaper,
} from './styles';
import TextBanner from 'components/TextBanner';
import catAnimation from '../../assets/animations/cat.json';
import locationAnimation from '../../assets/animations/location.json';

function InfoView() {
	return (
		<>
			<TextBanner
				header={'Un poco de información acerca de nosotros'}
				content={
					'Aquí podrás conocer los factores que nos inspiran a cuidar de tu mascota'
				}
			/>
			<Container>
				<Section>
					<StyledPaper elevation={5}>
						<Typography variant='h5'>¿Quiénes Somos?</Typography>
						<Typography variant='body1'>
							Opera nullo ratio an libet de tangi sequi. Im me gurgitem quadrati
							connivet experiar de fatendum quatenus. Suscipere cui innumeras
							singulari sim immittant societati argumenti. Proponere concipiam
							evidentia purgantur to ne vereorque ac. Corpo to nihil nolim prima
							et et ad. Verti est supra imo omnem sic sitas. Ex at co bono gnum
							nunc ad. Superest is expertus tractant occurrat ut. Multorum
							deveniri insidias ut at si gurgitem si. Ac gi designabam
							consuetudo ac patrocinio is spectentur. Rum ego ferri utens vitro
							prava vulgo eos agi ratio. Nova opus sum cau dat aspi visa vul
							suae. Rectum ne du ac scient melius. Quaedam figuram dat ita nec
							nonnisi. Sui volo quam jam vix dum vice vera loco.
						</Typography>
					</StyledPaper>
					<StyledLottie
						options={{
							loop: true,
							autoplay: true,
							animationData: catAnimation,
						}}
						isClickToPauseDisabled={true}
					/>
				</Section>
				<Divider variant='middle' />
				<Section>
					<StyledPaper elevation={5}>
						<Typography variant='h5'>Mision</Typography>
						<Typography variant='body1'>
							Opera nullo ratio an libet de tangi sequi. Im me gurgitem quadrati
							connivet experiar de fatendum quatenus. Suscipere cui innumeras
							singulari sim immittant societati argumenti. Proponere concipiam
							evidentia purgantur to ne vereorque ac.
						</Typography>
					</StyledPaper>
					<StyledPaper elevation={5}>
						<Typography variant='h5'>Vision</Typography>
						<Typography variant='body1'>
							Opera nullo ratio an libet de tangi sequi. Im me gurgitem quadrati
							connivet experiar de fatendum quatenus. Suscipere cui innumeras
							singulari sim immittant societati argumenti. Proponere concipiam
							evidentia purgantur to ne vereorque ac.
						</Typography>
					</StyledPaper>
				</Section>
				<Divider variant='middle' />
				<Section>
					<StyledPaper elevation={5}>
						<Typography variant='h5'>Póliticas de calidad</Typography>
						<Typography variant='body1'>
							Opera nullo ratio an libet de tangi sequi. Im me gurgitem quadrati
							connivet experiar de fatendum quatenus. Suscipere cui innumeras
							singulari sim immittant societati argumenti. Proponere concipiam
							evidentia purgantur to ne vereorque ac.
						</Typography>
					</StyledPaper>
					<SizedImg src='spa1.png' />
				</Section>
				<Divider variant='middle' />
				<Section>
					<SizedImg src='map.png' />
					<StyledPaper elevation={5}>
						<Typography variant='h5'>Localización</Typography>
						<Typography variant='body1'>
							Av República de Brasil 180-B, Cuauhtémoc Nte, 21200 Mexicali, B.C.
						</Typography>
					</StyledPaper>
					<StyledLottie
						options={{
							loop: true,
							autoplay: true,
							animationData: locationAnimation,
						}}
						isClickToPauseDisabled={true}
					/>
				</Section>
			</Container>
		</>
	);
}

export default InfoView;
