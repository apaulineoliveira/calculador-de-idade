# ⌛️Objetivo
<p>O objetivo deste projeto foi criar um calculador de idade em que seja possível informar com quantos anos dada pessoa terá em um respectivo ano; Utilizando os métodos <code>call</code> e <code>apply</code> para modificar o valor de <code>this</code>.<br>
Nesta solução, criei objetos para armazenar as informações sobre cada pessoa, sendo elas: nome e idade. </p>
<h3>Call</h3>
<p>Segundo a documentação da <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Call">mdn web docs</a> o método <b>call</b> invoca uma função com um dado valor <b>this</b> e argumentos passados individualmente. É possível passar parâmetros para uma função com esse método separando-os por vírgula, como é possível observar no código (script.call.js) onde foram passados dois parâmetros para a função <b>calculaIdade</b>: <code>console.log(calculaIdade.call(pessoa5, 30));</code>.</p>
<h3>Apply</h3>
<p>O método <b>apply</b> possui a mesma síntaxe e funcionamento que o <code>call</code>, a única diferença é na hora de passar argumentos que ao invés de serem separados por vírgula é colocado em colchetes, ou seja, como array. Como é possível visualizar no código em: <code>console.log(calculaIdade.apply(pessoa7, [4]));</code>.</p>
<h3>This</h3>
<p>A palavra reservada <b>this</b> é uma referência de contexto. No código <code>this</code> refere-se ao objeto pessoa. Quando uma função está dentro de um objeto a chamamos de ‘’método’’. O <code>this</code> dentro de um método sempre se refere ao elemento pai. Neste caso, this refere-se ao objeto <code>pessoa</code>.</p>

<br></br>

# ⌛️Objective
<p>The goal of this project was to create an age calculator in which it is possible to inform how old a given person will be in a respective year; Using the <code>call</code> and <code>apply</code> methods to modify the value of <code>this</code>.<br>
In this solution, I created objects to store information about each person, namely: name and age. </p>
<h3>Call</h3>
<p>According to the documentation of <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/Call">mdn web docs</a> the method <b>call</b> invokes a function with a given <b>this</b> value and arguments passed individually. It is possible to pass parameters to a function with this method separating them with a comma, as it is possible to observe in the code (script.call.js) where two parameters were passed to the function <b>calculaIdade</b>: <code>console .log(calculateIdade.call(person5, 30));</code>.</p>
<h3>Apply</h3>
<p>The <b>apply</b> method has the same syntax and functioning as <code>call</code>, the only difference is when passing arguments that, instead of being separated by a comma, are placed in square brackets, i.e. like array. As you can see in the code at: <code>console.log(calculateAge.apply(person7, [4]));</code>.</p>
<h3>This</h3>
<p>The <b>this</b> keyword is a context reference. In the code <code>this</code> refers to the person object. When a function is inside an object we call it a ''method''. The <code>this</code> inside a method always refers to the parent element. In this case, this refers to the <code>person</code> object.</p>
