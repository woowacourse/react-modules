import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { useRegister } from "../lib";
import React from "react";

describe("useRegister Test", () => {
  it("should update the input value correctly", async () => {
    // Given
    const { result } = renderHook(() => useRegister("inputName", {}));

    // When
    React.act(() => {
      const event: any = { target: { value: "1234" } };
      result.current.onChange(event);
    });

    // Then
    expect(result.current.value).toBe("1234");
  });
});
