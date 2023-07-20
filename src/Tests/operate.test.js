// eslint-disable-next-line import/extensions
import operate from '../logic/operate';

describe('operate', () => {
  test('Add Numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
});

describe('operate', () => {
  test('Subtract Numbers', () => {
    expect(operate(4, 2, '-')).toBe('2');
  });
});

describe('operate', () => {
  test('Multiply Numbers', () => {
    expect(operate(2, 2, 'x')).toBe('4');
  });
});

describe('operate', () => {
  test('Divide Numbers', () => {
    expect(operate(8, 2, '÷')).toBe('4');
  });
});

describe('operate', () => {
  test('Divide Numbers', () => {
    expect(operate(8, 2, '%')).toBe('0');
  });
});