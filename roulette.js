var interval_id = null;
var stop = null;
var rand = null;
var tmp = null;
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
        
function start_roulette() {
    if (stop !== null) { 
        $('td').eq(stop-1).css('background-color','#FFE4B5');
        $('td').eq(stop-1).css('color','#DCDCDC');
    }
            
    interval_id = setInterval(flash_num, 100);
    $('#start').prop('disabled', true);
    $('#stop').prop('disabled', false);       
}
        
function flash_num () {
    if (rand !== null) { 
        $('td').eq(rand-1).css('background-color','#FFFFFF');
    }
    tmp = Math.floor(Math.random() * arr.length);
    rand = arr[tmp];
    $('td').eq(rand-1).css('background-color','#FFA07A');   
}    

function stop_roulette() {
    $('td').eq(rand-1).css('background-color','#FF4500');
    
    clearInterval(interval_id);
    arr.splice(tmp, 1);
    
    if (arr.length > 0) {
        $('#start').prop('disabled', false);
    }
    
    $('#stop').prop('disabled', true);
    stop = rand;
    rand = null; 
}

function reset_roulette() {
    clearInterval(interval_id);
    $('#start').prop('disabled',false);
    $('#stop').prop('disabled',true);
    arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    $('td').css('background-color','#FFFFFF');
    $('td').css('color','#000000');
    stop = null;
}

$(function() {
    $('#start').click(start_roulette);
    $('#stop').click(stop_roulette);
    $('#stop').prop('disabled',true);
    $('#reset').click(reset_roulette);

    for (var i = 0; i < 4; i++) {
        var tr = $('<tr>');
        for (var j = 1; j <= 4; j++) {
            tr.append('<td>' + ((i * 4) + j) + '</td>');    
        }
            $('table').append(tr);
    }
});
 