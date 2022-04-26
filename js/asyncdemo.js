function showTime() {
    const date = new Date();
    return date.getHours() + "Hrs:"+date.getMinutes()+"Mins:"+date.getSeconds()+"Sec.";
}

function showSessionExpire() {
    console.log("Activity B : Your Session expoire at"+showTime());
}

console.log("Activity A Triggereing Activity B at :"+showTime());
setTimeout(showSessionExpire,5000);
console.log("Activity A Triggered Activity B at "+showTime()+"will execute after 5 second");