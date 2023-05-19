import { Grid } from '@mui/material';
import { Container } from './styles';
import FeaturedPost from 'components/FeaturedPost';

function FAQView() {
	const featuredPosts = [
		{
			title: 'FAQ 1',
			date: 'Nov 12',
			description:
				'This is a wider card with supporting text below as a natural lead-in to additional content.',
			image:
				'https://d.newsweek.com/en/full/1936219/cat-spa.webp?w=790&f=e1219143b5e7e0b664f061a32112ec01',
			imageLabel: 'Image Text',
		},
		{
			title: 'FAQ 2',
			date: 'Nov 11',
			description:
				'This is a wider card with supporting text below as a natural lead-in to additional content.',
			image:
				'https://d.newsweek.com/en/full/1936219/cat-spa.webp?w=790&f=e1219143b5e7e0b664f061a32112ec01',
			imageLabel: 'Image Text',
		},
		{
			title: 'FAQ 3',
			date: 'Nov 11',
			description:
				'This is a wider card with supporting text below as a natural lead-in to additional content.',
			image:
				'https://d.newsweek.com/en/full/1936219/cat-spa.webp?w=790&f=e1219143b5e7e0b664f061a32112ec01',
			imageLabel: 'Image Text',
		},
		{
			title: 'FAQ 4',
			date: 'Nov 11',
			description:
				'This is a wider card with supporting text below as a natural lead-in to additional content.',
			image:
				'https://d.newsweek.com/en/full/1936219/cat-spa.webp?w=790&f=e1219143b5e7e0b664f061a32112ec01',
			imageLabel: 'Image Text',
		},
		{
			title: 'FAQ 5',
			date: 'Nov 11',
			description:
				'This is a wider card with supporting text below as a natural lead-in to additional content.',
			image:
				'https://d.newsweek.com/en/full/1936219/cat-spa.webp?w=790&f=e1219143b5e7e0b664f061a32112ec01',
			imageLabel: 'Image Text',
		},
	];

	return (
		<Container>
			<Grid container spacing={4}>
				{featuredPosts.map((post) => (
					<FeaturedPost key={post.title} post={post} />
				))}
			</Grid>
		</Container>
	);
}

export default FAQView;
