export default (qtd)=>{
    let arr = []

    for(let cont = 0 ; cont < qtd ; cont++){
        let num = Math.ceil(Math.random()*100)
        if(arr.indexOf(num) == -1){
            arr.push(num)
        }else{
            cont--
        }
    }

    return arr
}

