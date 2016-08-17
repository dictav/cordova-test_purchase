document.addEventListener('deviceready', init, false);
var btn = document.getElementById('purchase_button')
btn.addEventListener('click', function(){
  store.order('coin100')
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
    alias: "100 coins",
    type: store.CONSUMABLE
  });

  store.register({
    id: "coin200",
    alias: "200 coins",
    type: store.CONSUMABLE
  });

  store.when('100 coins').updated(function(){
    var product = store.get('100 coins')
    log('100 coins updated', product)
  })

  store.when('200 coins').updated(function(){
    var product = store.get('200 coins')
    log('200 coins updated', product)
  })

  store.refresh()
}
