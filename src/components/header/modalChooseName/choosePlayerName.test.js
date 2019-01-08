import createModal from './choosePlayerName';

describe('Modal', () => {
  it('create modal frame', () => {
    createModal();
    const modal = document.querySelectorAll('body>#demoModal');
    expect(modal.length).toBe(1);
  });
});
