function remove_ads() {
    const ads = document.getElementsByClassName("ad-slot");
    window.setInterval(function(){
        if((ads).length){
            console.log(ads);
            console.log(ads.length);
            for (let i =0; i<ads.length; i++){
            console.log(ads[i]);
            ads[i].remove();
            }   
        }
    }, 500)
}
function manual_ads() {
    document.getElementsByClassName("top-ads-container")[0].remove();
    window.setInterval(function(){
        document.getElementById("btbgleft").remove();
    }, 500)    
}

remove_ads()
manual_ads()