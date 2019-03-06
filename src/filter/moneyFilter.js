export const toMoney=(money = 0)=>{
    return money.toFixed(2)

}
Vue.filter('moneyFilter', toMoney);