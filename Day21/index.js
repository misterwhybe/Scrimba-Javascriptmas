function awardBonuses(){
    
    for(let i=1;i<101;i++){
        let message = ':('
        if(i%5 == 0 && i%3 == 0){
            message = 'JACKPOT! 1 Million and a Yacht!'
        }
        else if(i%3 == 0){
            message = 'Vacation!'
        }
        else if(i%5 == 0)(
            message = '$100,000 bonus!'
        )
        
        console.log(i+ ' - '+ message)
    }
}

awardBonuses();