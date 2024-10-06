import { ErrorRepository } from '../index';

test('error create', () => {

    const errors = new ErrorRepository();
    errors.addError(1, 'This is error');
    const result = errors.translate(1);
    const result2 = errors.translate(5);
  
    expect(result).toBe('This is error');
    expect(result2).toBe('Unknown error');
  });

