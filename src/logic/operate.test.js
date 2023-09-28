import operate from './operate';

describe('operate function', () => {
  it('properly adds two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it('properly subtract numbers', () => {
    expect(operate(3, 2, '-')).toBe('1');
  });

  it('properly multiply numbers', () => {
    expect(operate(2, 6, 'x')).toBe('12');
  });

  it('properly divide numbers', () => {
    expect(operate(6, 2, '÷')).toBe('3');
  });

  it('cannot divide by zero', () => {
    expect(operate(6, 0, '÷')).toBe("Can't divide by 0.");
  });

  it('properly find the remainder when you divide', () => {
    expect(operate(5, 2, '%')).toBe('1');
  });

  it('cannot find modulo of zero', () => {
    expect(operate(5, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
});
