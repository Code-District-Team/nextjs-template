import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useRef, useState } from "react";

import RecipeReviewCard from "@/components/card";

export default function Home() {
  const ref = useRef();
  const [test, setTest] = useState("Hello");
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
