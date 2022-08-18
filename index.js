let saturdayFun = function saturdayFun(activity ="roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun ()


let mondayWork = function (activity =`go to the office`){
    return (`This Monday, I will ${activity}.`)
}
mondayWork()

function wrapAdjective(name) {
    return function(value){
        return `You are ${name}${value}${name}!`;
    }
}
wrapAdjective("*")("a dedicated programmer")
