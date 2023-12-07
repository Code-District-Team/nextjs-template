import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import useTranslation from 'next-translate/useTranslation';

import RecipeReviewCard from '@/components/card';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <main>
      <Container>
        <p>{t('about')}</p>
        <Box>
          <Card>
            <Typography variant="h2">Hello World ~</Typography>
          </Card>
        </Box>
        <Box>
          <RecipeReviewCard />
        </Box>
      </Container>
    </main>
  );
}
