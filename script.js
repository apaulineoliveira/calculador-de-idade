function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos } anos de idade.`;
  }
  
  const pessoa1 = {
     nome: "Julia",
     idade: 80
  }
  
  const pessoa2 = {
     nome: "Izabel",
     idade: 55
  }
  
  const pessoa3 = {
     nome: "Humberto",
     idade: 27
  };
  
  console.log(calculaIdade.call(pessoa2, 30));