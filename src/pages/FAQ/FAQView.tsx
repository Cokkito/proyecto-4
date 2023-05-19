import { Grid } from '@mui/material';
import { Container } from './styles';
import FeaturedPost from 'components/FeaturedPost';
import TextBanner from 'components/TextBanner';
import { featuredPosts } from './data';

function FAQView() {
	return (
		<>
			<TextBanner
				header={'¿Tienes dudas?'}
				content={
					'Te dejamos algunas dudas generales que han tenido nuestros clientes'
				}
			/>
			<Container>
				<Grid container spacing={4}>
					{featuredPosts.map((post) => (
						<FeaturedPost key={post.title} post={post} />
					))}
				</Grid>
			</Container>
		</>
	);
}

export default FAQView;
