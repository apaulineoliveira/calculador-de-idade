# ⌛️Objetivo
<p>O objetivo deste projeto foi criar um calculador de idade em que seja possível informar com quantos anos dada pessoa terá em um respectivo ano; Utilizando os métodos <code>call</code> e <code>apply</code> para modificar o valor de <code>this</code>.<br>
Nesta solução, criei objetos para armazenar as informações sobre cada pessoa, sendo elas: nome e idade. </p>
<h3>Call</h3>
<p>Segundo a documentação da <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Call">mdn web docs</a> o método <b>call</b> invoca uma função com um dado valor <b>this</b> e argumentos passados individualmente. É possível passar parâmetros para uma função com esse método separando-os por vírgula, como é possível observar no código (script.call.js) onde foram passados dois parâmetros para a função <b>calculaIdade</b>: <code>console.log(calculaIdade.call(pessoa5, 30));</code>.</p>
<h3>Apply</h3>
<p>O método <b>apply</b> possui a mesma síntaxe e funcionamento que o <code>call</code>, a única diferença é na hora de passar argumentos que ao invés de serem separados por vírgula é colocado em colchetes, ou seja, como array. Como é possível visualizar no código em: <code>console.log(calculaIdade.apply(pessoa7, [4]));</code>.</p>
<h3>This</h3>
<p>A palavra reservada <b>this</b> é uma referência de contexto. No código <code>this</code> refere-se ao objeto pessoa. Quando uma função está dentro de um objeto a chamamos de ‘’método’’. O <code>this</code> dentro de um método sempre se refere ao elemento pai. Neste caso, this refere-se ao objeto <code>pessoa</code>.</p>
