$(document).ready(function(){
    function currentTime(){
        const date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        hour = (hour<10)? "0"+hour:hour;
        min = (min<10)?"0"+min:min;
        sec = (sec<10)?"0"+sec:sec;

        $('#hour').html(hour);
        $('#min').html(min);
        $('#sec').html(sec);

        var period = '';
        if(hour<12){
            period = 'AM';
        }
        else{
            period = 'PM';
        }
        $('#period').html(period);



        setTimeout(currentTime,1000);
    }
    currentTime();


    var i = 0;
    function single(){
        const word = ['Welcome','Back','To','Single','Life','Again','Bro','&#127770;']
        
        $('.demo').html(word[i]);
        if(i >= word.length){
            i=0;
        }
        else{
            i++;
        }
        setTimeout(single,1000)
    }
    single();
});