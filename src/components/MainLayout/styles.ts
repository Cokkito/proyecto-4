import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const Container = styled(Paper)`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	position: relative;
`;

export const Row = styled.div`
	display: flex;
	flex: 1;
`;

export const ScreenContent = styled(Paper)`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-right: 24px;
	padding-left: 24px;
`;

export const ScreenContainer = styled(Paper)`
	display: flex;
	flex-direction: column;
	flex: 1;
`;
