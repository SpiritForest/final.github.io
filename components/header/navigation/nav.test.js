import drawNav from './nav';

describe('Nav', () => {
  it('drow template into the body', () => {
    drawNav();
    const nav = document.querySelectorAll('nav');
    expect(nav.length).toBe(1);
  });
});
