// floor()
// let a = Math.floor(2.56)
// let b = Math.floor(-4.56)
// let c = Math.ceil(5.0002)
// let d = Math.ceil(-0.0001)
// console.log(b)
// console.log(d)

let options = ['rock','papper','scissor']
let usr_op = document.getElementById('uo')
let cmp_op = document.getElementById('co')
let result = document.getElementById('result')
function rps(value){
    let index = Math.floor(Math.random()*3)
    let cmp_selct = options[index]
    let out;
    if (value =='rock'){
        if(cmp_selct =='rock'){
            out = 'Tie'
        }
        else if(cmp_selct=='paper'){
            out = 'Computer Won'
        }
        else{
            out = 'You Won'
        }
    }
    else if(value =='paper'){
        if(cmp_selct=='rock'){
            out = 'You Won'
        }
        else if(cmp_selct=='paper'){
            out = 'Tie'
        }
        else{
            out ="Computer Won"
        }
    }
    else{
        if(cmp_selct=='rock'){
            out = 'Computer Won'
        }
        else if(cmp_selct=='paper'){
            out = 'You won'
        }
        else{
            out = 'Tie'
        }
    }

    result.textContent = out
    usr_op.textContent=`User selected: ${value}`
    cmp_op.textContent=`Computer Selected: ${cmp_selct}`
}











