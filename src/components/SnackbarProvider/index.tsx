import {
	CheckCircleOutlineRounded,
	ErrorOutlineRounded,
	InfoOutlined,
	WarningAmberRounded,
} from '@mui/icons-material';
import { Icon, Zoom } from '@mui/material';
import {
	SnackbarProvider as MuiSnackbarProvider,
	SnackbarProviderProps,
} from 'notistack';

interface Props {
	children: SnackbarProviderProps['children'];
}

function SnackbarProvider(props: Props) {
	const { children } = props;
	return (
		<MuiSnackbarProvider
			maxSnack={1}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'center',
			}}
			TransitionComponent={Zoom}
			iconVariant={{
				success: (
					<Icon>
						<CheckCircleOutlineRounded />
					</Icon>
				),
				warning: (
					<Icon>
						<WarningAmberRounded />
					</Icon>
				),
				info: (
					<Icon>
						<InfoOutlined />
					</Icon>
				),
				error: (
					<Icon>
						<ErrorOutlineRounded />
					</Icon>
				),
			}}
			autoHideDuration={3000}
			preventDuplicate
		>
			{children}
		</MuiSnackbarProvider>
	);
}

export default SnackbarProvider;
