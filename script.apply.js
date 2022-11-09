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

  const pessoa4 = {
   nome: "Robert",
   idade: 10
};

const pessoa5 = {
   nome: "Pablo",
   idade: 17
};

const pessoa6 = {
   nome: "Mônica",
   idade: 19
};

const pessoa7 = {
   nome: "Lúcia",
   idade: 23
};


console.log(calculaIdade.apply(pessoa7, [4]));