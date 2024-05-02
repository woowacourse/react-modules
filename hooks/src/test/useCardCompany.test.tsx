import React from "react";
import { useCardCompany } from "../lib";
import { render, renderHook, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("useCardCompany Test", () => {
  it("option, button요소를 클릭시 카드사 state가 변경된다.", async () => {
    //Arrange
    const { result: result1 } = renderHook(() => useCardCompany());
    const { result: result2 } = renderHook(() => useCardCompany());
    const user = userEvent.setup();

    render(<button onClick={result1.current.clickCardCompany} value={"하나카드"} />);
    render(
      <section onClick={result2.current.clickCardCompany}>
        <option value={"국민카드"} />
      </section>
    );

    //Act
    await user.click(screen.getByRole("button"));
    await user.click(screen.getByRole("option"));

    //Assert
    expect(result1.current.cardCompany).toBe("하나카드");
    expect(result2.current.cardCompany).toBe("국민카드");
  });

  it("error 잘못된 은행을 입력하면 에러를 발생한다.", async () => {
    //Arrange
    const { result } = renderHook(() => useCardCompany());
    const user = userEvent.setup();

    render(<button onClick={result.current.clickCardCompany} value={"하나은행"} />);

    //Act
    await user.click(screen.getByRole("button"));

    //Assert
    expect(result.current.errorState.isError).toBe(true);
  });

  it("resetError를 실행하면 에러가 사라진다.", async () => {
    //Arrange
    const { result } = renderHook(() => useCardCompany());
    const user = userEvent.setup();

    render(<button onClick={result.current.clickCardCompany} value={"하나은행"} />);

    //Act
    await user.click(screen.getByRole("button"));
    React.act(() => result.current.errorState.resetError());

    //Assert
    expect(result.current.errorState.isError).toBe(false);
  });
});
