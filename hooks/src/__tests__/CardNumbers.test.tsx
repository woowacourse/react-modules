import { render, screen, fireEvent } from '@testing-library/react';
import { CardNumbers } from '../components';
import '@testing-library/jest-dom';

describe('CardNumbers', () => {
  it('초기 상태 확인', () => {
    render(<CardNumbers />);
    const inputs = screen.getAllByRole('textbox');
    const errorMessage = screen.getByText('오류:');

    inputs.forEach((input) => {
      expect(input).toHaveValue('');
    });
    expect(errorMessage).toHaveTextContent('오류:');
  });

  it('카드 번호는 숫자가 아닌 문자를 입력할 수 없다.', () => {
    const invalidInputs = ['%!!!', 'aaaa'];

    test.each(invalidInputs)('입력 값 "%s"는 유효하지 않다', (invalidInput) => {
      render(<CardNumbers />);
      const input = screen.getByRole('textbox');
      const errorMessage = screen.getByText('오류:');

      fireEvent.change(input, { target: { value: invalidInput } });

      expect(input).toHaveTextContent('');
      expect(errorMessage).toHaveTextContent('숫자만 사용 가능해요.');
    });
  });

  it('카드 번호로 숫자 4개가 입력되지 않으면 에러 문구를 보여준다.', () => {
    render(<CardNumbers />);
    const input = screen.getByRole('textbox');
    const errorMessage = screen.getByText('오류:');

    fireEvent.change(input, { target: { value: '123' } });
    fireEvent.blur(input);

    expect(errorMessage).toHaveTextContent('4개 숫자를 써주세요.');
  });

  it('카드 번호는 반드시 입력되어야 한다.', () => {
    render(<CardNumbers />);
    const input = screen.getByRole('textbox');
    const errorMessage = screen.getByText('오류:');

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(errorMessage).toHaveTextContent('카드 번호를 입력해주세요.');
  });

  it('input에 유효한 값을 입력할 수 있다.', () => {
    render(<CardNumbers />);
    const inputs = screen.getAllByRole('textbox');
    const errorMessage = screen.getByText('오류:');
    const VALID_INPUT = ['1234', '1234', '1234', '1234'];

    inputs.forEach((input, index) => {
      fireEvent.change(input, { target: { value: VALID_INPUT[index] } });
    });
    inputs.forEach((input, index) => {
      expect(input).toHaveTextContent(VALID_INPUT[index]);
      expect(errorMessage).toHaveTextContent('오류:');
    });
  });
});
