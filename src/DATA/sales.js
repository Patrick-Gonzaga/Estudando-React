let id = 0

export default[
    {id: ++id, nome: 'TV', preco: parseFloat((Math.random()*100).toFixed(2))},
    {id: ++id, nome: 'Microondas', preco: parseFloat((Math.random()*100).toFixed(2))},
    {id: ++id, nome: 'Computador', preco: parseFloat((Math.random()*100).toFixed(2))},
    {id: ++id, nome: 'Fogão', preco: parseFloat((Math.random()*100).toFixed(2))}
]