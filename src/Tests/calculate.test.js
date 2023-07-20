/* eslint-disable linebreak-style */
import calculate from '../logic/calculate';

describe('calculate', () => {
  test('calculator reset', () => {
    const calculator = { total: '10', next: '5', operation: '+' };
    expect(calculate(calculator, 'AC')).toEqual({ total: null, next: null, operation: null });
  });
});

describe('calculate', () => {
  test('fraction decimal', () => {
    const calculator = { total: '0', next: '5.', operation: '.' };
    expect(calculate(calculator, '.')).toEqual({ total: '0', next: '5.', operation: '.' });
  });
});

describe('calculate', () => {
  test('fraction decimal', () => {
    const calculator = { total: '10', next: '5-', operation: '+/-' };
    expect(calculate(calculator, '+/-')).toEqual({ total: '10', next: '-5', operation: '+/-' });
  });
});
