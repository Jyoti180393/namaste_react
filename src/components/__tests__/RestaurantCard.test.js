import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";

import MOCK_DATA from "../mocks/restaurantCardMock.json";

it("should render restaurant card component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const restaurantName = screen.getByText("Pizza Paradise");
  expect(restaurantName).toBeInTheDocument();
});
