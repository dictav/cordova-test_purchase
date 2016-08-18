document.addEventListener('deviceready', init, false);
var btn = document.getElementById('purchase_button')
btn.addEventListener('click', function(){
  // 1st click, buy coin100
  // 2nd click, consume coin100
  var product = store.get('coin100')
  if (product.state === store.APPROVED) {
    product.finish()
  } else {
    store.order('coin100')
  }
})

function log(msg, obj) {
  document.querySelector('#log .message').innerHTML = msg
  var code = ""
  if (obj) {
    code = JSON.stringify(obj, null, 2)
  }
  document.querySelector('#log .code').innerHTML = code
}

function init() {
  log("Register coins")
  store.register({
    id: "coin100",
    type: store.CONSUMABLE
  });

  store.register({
    id: "coin200",
    type: store.CONSUMABLE
  });

  store.when('coin100').updated(function(){
    var product = store.get('coin100')
    log('100 coins updated', product)
  })

  store.when('coin200').updated(function(){
    var product = store.get('coin200')
    log('200 coins updated', product)
  })

  store.refresh()
}
