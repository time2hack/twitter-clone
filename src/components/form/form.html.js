export default (scope) => `
<div class="card todo-form">
  <div class="card-body">
    <form ref="form">
      <textarea class="form-control form-control-md" name="description" type="text" placeholder="What's on your mind...?" ref="text" ></textarea>
      <div class="clearfix">
        <button type="button" class="btn float-right mt-2 btn-outline-dark" ref="btn-submit">Tweet</button>
      </div>
    </form>
  </div>
</div>
`;
