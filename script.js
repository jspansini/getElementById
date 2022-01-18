function somar(){
    
  var t1 = window.document.getElementById('text1')
  var t2 = window.document.getElementById('text2')

  var res = window.document.getElementById('res')

  var n1 = Number(t1.value)
  var n2 = Number(t2.value)

  var s = n1 + n2

res.innerHTML = `A soma de ${n1} com ${n2} dá o resultado de ${s}`

}



