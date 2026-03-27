import { KebabCasePipe } from './kebab-case-pipe';

describe('KebabCasePipe', () => {
  it('create an instance', () => {
    const pipe = new KebabCasePipe();
    expect(pipe).toBeTruthy();
  });

  it('transform to kebab', () => {
    const pipe = new KebabCasePipe();
    expect(pipe.transform('esto es una prueba')).toBe('esto-es-una-prueba')
  })
});
