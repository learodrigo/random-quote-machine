Vue.component('quote-card', {
  template: `
    <div class="card">
      <div class="card-body">
        <div class="card-text blockquote">
          "{{ currentQuote }}"
          <br>
          <b>Bob Ross<b>
        </div>
      </div>
    </div>
  `
})