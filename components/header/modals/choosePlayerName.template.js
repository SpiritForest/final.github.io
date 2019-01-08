export default `
<div class="modal fade" id="demoModal" tabindex="-1" data-backdrop="false" role="dialog" aria-labelledby="demoModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="demoModalLabel">Как тебя зовут?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form class="js-form">
          <div class="form-group">
            <label for="choosePlayerName">Введите имя игрока</label>
            <input type="text" class="form-control" id="choosePlayerName" placeholder="Enter your name">
            <small id="formHelp" class="form-text text-muted"></small>
          </div>
          <button type="submit" class="btn btn-primary">Выбрать</button>
        </form>
      </div>
    </div>
  </div>
</div>`;
