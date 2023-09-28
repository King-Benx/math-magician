import calculate from './calculate';

describe('calculate function', () => {
  it('should handle AC button', () => {
    expect(JSON.stringify(calculate({}, 'AC'))).toBe(JSON.stringify({
      total: null,
      next: null,
      operation: null,
    }));
  });

  it('should handle numeric input', () => {
    expect(JSON.stringify(calculate({ next: '2' }, '3'))).toBe(JSON.stringify({ next: '23', total: null }));
  });

  it('should handle numeric input with zero', () => {
    expect(JSON.stringify(calculate({ next: '0' }, '2'))).toBe(JSON.stringify({ next: '2', total: null }));
  });

  it('should handle numeric input with zero and existing zero', () => {
    expect(JSON.stringify(calculate({ next: '0' }, '0'))).toBe(JSON.stringify({}));
  });

  it('should handle numeric input with operation', () => {
    expect(JSON.stringify(calculate({ operation: '+' }, '2'))).toBe(JSON.stringify({ operation: '+', next: '2' }));
  });

  it('should handle decimal point input', () => {
    expect(JSON.stringify(calculate({ next: '2' }, '.'))).toBe(JSON.stringify({ next: '2.' }));
  });

  it('should handle decimal point input with existing decimal point', () => {
    expect(JSON.stringify(calculate({ next: '2.' }, '.'))).toBe(JSON.stringify({ next: '2.' }));
  });

  it('should handle +/- with next value', () => {
    expect(JSON.stringify(calculate({ next: '2' }, '+/-'))).toBe(JSON.stringify({ next: '-2' }));
  });

  it('should handle +/- with total value', () => {
    expect(JSON.stringify(calculate({ total: '10' }, '+/-'))).toBe(JSON.stringify({ total: '-10' }));
  });

  it('should return empty object if no next or total value', () => {
    expect(JSON.stringify(calculate({}, '+/-'))).toBe(JSON.stringify({}));
  });

  it('should handle case where no next but total and no operation', () => {
    expect(JSON.stringify(calculate({ total: '10' }, '+'))).toBe(JSON.stringify({ total: '10', operation: '+' }));
  });

  it('should handle operation with existing operation and no next', () => {
    expect(JSON.stringify(calculate({ total: '10', operation: '+' }, '-'))).toBe(JSON.stringify({ total: '10', operation: '-' }));
  });

  it('should handle operation with total and no next', () => {
    expect(JSON.stringify(calculate({ total: '10' }, '-'))).toBe(JSON.stringify({ total: '10', operation: '-' }));
  });

  it('should handle operation with no total and no next', () => {
    expect(JSON.stringify(calculate({}, '-'))).toBe(JSON.stringify({ operation: '-' }));
  });

  it('should handle operation with total, next, and existing operation', () => {
    expect(JSON.stringify(calculate({ total: '10', next: '2', operation: '+' }, '-'))).toBe(JSON.stringify({ total: '12', next: null, operation: '-' }));
  });

  it('should handle case where no next value', () => {
    expect(JSON.stringify(calculate({ total: '10', operation: '+' }, '-'))).toBe(JSON.stringify({ total: '10', operation: '-' }));
  });

  it('should save the operation and shift next into total', () => {
    expect(JSON.stringify(calculate({ next: '5' }, '*'))).toBe(JSON.stringify({ total: '5', next: null, operation: '*' }));
  });
});
