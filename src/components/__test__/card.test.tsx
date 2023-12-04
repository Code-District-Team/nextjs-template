import React from "react";
import RecipeReviewCard from "../card";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

test("expands and collapses card content on button click", async () => {
  render(<RecipeReviewCard />);

  // Card should start in a collapsed state
  expect(screen.queryByText(/Method:/i)).not.toBeInTheDocument();

  // Click the expand button
  fireEvent.click(screen.getByLabelText(/show more/i));

  // Wait for asynchronous operations to complete
  await waitFor(() => {
    // Card content should now be visible
    expect(screen.getByText(/Method:/i)).toBeInTheDocument();
  });

  // Click the collapse button
  fireEvent.click(screen.getByLabelText(/show more/i));

  // Wait for asynchronous operations to complete
  await waitFor(() => {
    // Card content should now be hidden again
    expect(screen.queryByText(/Method:/i)).not.toBeInTheDocument();
  });
});
