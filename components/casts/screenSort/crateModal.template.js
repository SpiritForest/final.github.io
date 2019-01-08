export default
function template(wordRus) {
  return `
    <div class="modal fade" id="demoModal" tabindex="-1" data-backdrop="false" role="dialog" aria-labelledby="demoModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-md" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="demoModalLabel">Расставь буквы в английском слове!</h5>
          </div>
          <div class="modal-body">
            <h5>Расставьте буквы в правильном порядке </h5>
            <h5>Слово на русском - ${wordRus}</h5>
          </div>
        </div>
      </div>
    </div>
`;
}
