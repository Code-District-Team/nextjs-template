import RecipeReviewCard from "@/components/card";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <main>
      <Container>
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
