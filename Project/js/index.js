function scrollDown(){
        window.scrollTo(0, 1600);
    };
function scrollDownOrder(){
    window.scrollTo(0, 550);
};

var today = new Date();  
var currYearTxt = document.querySelector('.currYear');
var currMonthTxt = document.querySelector('.currMonth');
var currDayTxt = document.querySelector('.currDay');
var currDay = today.getDate();
var currMonth = today.getMonth();
var currYear = today.getFullYear();
var monthes = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
var weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'НД'];
var maxMonth = monthes.length;
var maxWeekDays = weekDays.length;
var currWeekDay = today.getDay();
var tableTbody = document.querySelector('.table');


for (var i = 0; i < maxMonth;  i++) {
    currMonthTxt.textContent = monthes[currMonth];
    
}
for (var i = 0; i < maxWeekDays;  i++) {
    
    if (currWeekDay === 0) {
        currWeekDay = 6;
    }
   
        currDayTxt.textContent = "Сегодня " + currDay + ' ' + weekDays[currWeekDay-1];     
    
}
var firstDay = (new Date(currYear, currMonth, 1));
var firstDayWeek = firstDay.getDay();
var next;
currYearTxt.textContent = currYear;

var t = firstDayWeek - 1;
if ( t < 0 ) {
    t = 6;
}
function createTable() {     
    
    var a = 0;
    
    while (firstDay.getMonth() == currMonth) {
        var tr = document.createElement('tr');
        tr.className = "newTr";
        var i = 0;              
        while (i < 7  ) {
                var td = document.createElement('td');
                td.className = "newTd";
                td.id = "id";                                    
                if (a == 0) {                     
                    if (i < t) {
                        td.innerHTML = ' ';
                    } else {
                        td.innerHTML = firstDay.getDate();
                        firstDay.setDate(firstDay.getDate() + 1);
                    }
                } else {                                          
                        if ( next > currMonth) {

                            break;
                        }
                        td.innerHTML = firstDay.getDate();                
                        firstDay.setDate(firstDay.getDate() + 1);
                        next = firstDay.getMonth(); 
                }                             
                tr.appendChild(td);
                i++;           
            }                  
        tableTbody.appendChild(tr);
        a++;          
    }      
}

createTable();   


