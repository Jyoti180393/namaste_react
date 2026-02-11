import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";
import Header from "../Header";

import Restaurant from "../Restaurant";
import MOCK_DATA from "../mocks/restaurantMenuMock.json";
import appStore from "../../store/appStore";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  }),
);

it("should load restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Restaurant />
          <Cart />
        </Provider>
      </BrowserRouter>,
    ),
  );

  const accordionHeader = screen.getByText("Recommended");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("menuItem").length).toBe(3);

  expect(screen.getByTestId("cart-count").innerHTML).toBe("0");

  const addBtn = screen.getAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);

  expect(screen.getByTestId("cart-count").innerHTML).toBe("1");

  expect(screen.getAllByTestId("menuItem").length).toBe(4);

  // fireEvent.click(screen.getByTestId("clear-cart-btn"));
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getByTestId("cart-count").innerHTML).toBe("0");

  const emptyCartMsg = screen.getByText(
    "Cart is empty. Add Items to the cart!",
  );
  expect(emptyCartMsg).toBeInTheDocument();

  expect(screen.getAllByTestId("menuItem").length).toBe(3);
});
