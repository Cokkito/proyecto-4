import styled from '@emotion/styled';
import Lottie from 'react-lottie';

export const Container = styled.div`
	position: fixed;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 10000;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const Background = styled.div`
	position: absolute;
	width: 60%;
	height: 60%;
`;

export const Loading = styled(Lottie)`
	max-height: 200px;
`;
