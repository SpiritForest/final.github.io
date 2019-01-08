import drawElem from './footer';

describe('drawFooter', () => {
  it('create footer', () => {
    drawElem();
    const item = document.querySelectorAll('body>footer');
    expect(item.length).toBe(1);
  });
});
