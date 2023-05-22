import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import Lottie from 'react-lottie';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Section = styled.div`
	padding: 20px 0px 20px 0px;
	max-height: 400px;
	display: flex;
	column-gap: 50px;
`;

export const StyledPaper = styled(Paper)`
	justify-content: center;
	display: flex;
	flex-direction: column;
	row-gap: 15px;
	box-sizing: border-box;
	width: 100%;
	border: solid #b067ff 5px;
	padding: 20px;
	min-height: 200px;
	border-radius: 24px;
`;

export const SizedImg = styled.img`
	max-width: 500px;
	height: auto;
`;

export const StyledLottie = styled(Lottie)`
	width: 300px;
`;
