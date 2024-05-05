import React from "react";

import { userEvent } from "@testing-library/user-event";
import { render, renderHook, screen } from "@testing-library/react";

import { useInput } from "../lib";

React.act(() => {});

describe("useInputTest", () => {
  it("english 타입 에러 출력 테스트", async () => {
    //Arrange
    const { result: inputResult } = renderHook(() => useInput());
    const { result: registerResult } = renderHook(() =>
      inputResult.current.register("name", { customType: "english", typeErrorMessage: "영어만 입력해주세요." })
    );
    const user = userEvent.setup();

    render(<input {...registerResult.current} />);

    //Act
    await user.type(screen.getByRole("textbox"), "1");

    //Assert
    expect(inputResult.current.errorMap["name"]).toBe("영어만 입력해주세요.");
  });

  it.skip("maxLength 에러 출력 테스트", async () => {
    const ERROR_MESSAGE = "2자 이상 입력할 수 없습니다.";
    const INPUT_NAME = "password";

    //Arrange
    const { result: inputResult } = renderHook(() => useInput());

    const { result: registerResult } = renderHook(() =>
      inputResult.current.register(INPUT_NAME, {
        customType: "number",
        maxLength: 2,
        maxLengthErrorMessage: ERROR_MESSAGE,
      })
    );
    const user = userEvent.setup();

    render(<input {...registerResult.current} />);

    //Act
    await user.type(screen.getByRole("textbox"), "123");

    //Assert
    expect(inputResult.current.errorMap[INPUT_NAME]).toBe(ERROR_MESSAGE);
  });

  it("number 타입, maxLength 3자 에러 출력 테스트", async () => {
    const INPUT_NAME = "cvc";

    //Arrange
    const { result: inputResult } = renderHook(() => useInput());
    const { result: registerResult } = renderHook(() =>
      inputResult.current.register(INPUT_NAME, {
        ...inputResult.current.register(INPUT_NAME, {
          customType: "number",
          typeErrorMessage: "숫자만 입력하세요.",
          maxLength: 3,
          maxLengthErrorMessage: "3자 이상 입력할 수 없습니다.",
        }),
      })
    );
    const user = userEvent.setup();

    render(<input {...registerResult.current} />);

    //Act
    await user.type(screen.getByRole("textbox"), "a");
    //Assert
    expect(inputResult.current.errorMap[INPUT_NAME]).toBe("숫자만 입력하세요.");

    // //Act
    // await user.type(screen.getByRole("textbox"), "1234");
    // //Assert
    // expect(inputResult.current.errorMap[INPUT_NAME]).toBe("3자 이상 입력할 수 없습니다.");
  });
});
