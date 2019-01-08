import template from './footer.template';

export default function createFooter() {
  document.body.insertAdjacentHTML('beforeend', template);
}
