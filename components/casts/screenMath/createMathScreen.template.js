export default
function template(sample) {
  return `
    <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="demoModalLabel">Реши задачу!</h5>
      </div>
      <div class="modal-body">
      <h5>Введите Ваш ответ: </h5> 
        <form class="js-form">
          <div class="form-group row">
            <label for="answer" class="col-sm-6 cast">${sample} = </label>
            <input type="number" class="form-control col-sm-5" id="answer">
          </div>
        </form>
      </div>
    </div>
`;
}
