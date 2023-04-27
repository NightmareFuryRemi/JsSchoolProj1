function calculate() {
    'use strict';
    const DzienWystawieniaOceny = new Date();
    DzienWystawieniaOceny.setDate(DzienWystawieniaOceny.getDate());
    var options = {   weekday: 'long',   year: 'numeric',   month: 'long',   day: 'numeric',   hour: 'numeric',   minute: 'numeric',   hour12: false,}
    
    
    let mail = document.getElementById('mail');
    let mailcheck = mail.value;
    let ocena1 = document.getElementById('test1');
    let ocena2 = document.getElementById('test2');
    let ocena3 = document.getElementById('test3');
    let ocenaHW = document.getElementById('homework');
    let name = document.getElementById('name');
    let rok = document.getElementById('rok');
    let studia = document.getElementById('studia');
    let ajdi = document.getElementById('student_id');
    let subject = document.getElementById('subject');

    let o1 = parseInt(ocena1.value, 10);
    let o2 = parseInt(ocena2.value, 10);
    let o3 = parseInt(ocena3.value, 10);
    let o4 = parseInt(ocenaHW.value, 10);

    var tab = [
      ['Rodzaj studiów: ', ],
      ['Rok Studiów: ', ],
      ['Identyfikator studenta: ', ],
      ['Imię i nazwisko: ', ],
      ['E-mail: ', ],
      ['Przedmiot', ],
      ['Ocena z testu pierwszego: ',],
      ['Ocena z testu drugiego: ',],
      ['Ocena z testu trzeciego: ',],
      ['Ocena z prac domowych: ',],
      ['Średnia: ',],
      ['Ocena końcowa ',],
      ['Data wystawienia: ', DzienWystawieniaOceny.toLocaleDateString('us-US', options)]
  ];


    let avg = (((o1 + o2 + o3)/3)*0.8) + (o4*0.1) + 10;
    let round = Math.round(avg * 100) / 100;
    let ost;
    if(avg==100){
        ost = "A";
      }else if(avg < 100 && avg >= 75){
        ost = "B";
      }else if(avg < 75 && avg >= 50){
        ost = "C";
      }else if(avg <50 && avg>=30){
        ost = "D";
      }else if(avg < 30){
        ost = "F";
      }
      function parag(){
        document.getElementById("demo").innerText = 'Student studiów '+studia.value+' '+name.value+' '+'('+rok.value+ ' rok'+')'+' o id: '+ ajdi.value+' otrzymał z testu1: '+o1+' punktów, z testu2: '+o2+' punktów, z testu3: '+o3+' punktów, z prac domowych: '+o4+' punktów - co daje średnią: '+round+' co daje ocenę: '+ost;
      }
      
      switch(ost){
        case 'A':
          parag();
            break;
        case 'B':
          parag();
            break;
        case 'C':
          parag();
            break;
        case 'D':
          parag();
            break;
        case 'F':
          parag();
            break;
      }

    tab[0].push(studia.value);
    tab[1].push(rok.value);
    tab[2].push(ajdi.value);
    tab[3].push(name.value);
    tab[4].push(mailcheck);
    tab[5].push(subject.textContent);
    tab[6].push(o1);
    tab[7].push(o2);
    tab[8].push(o3);
    tab[9].push(o4);
    tab[10].push(avg);
    tab[11].push(ost);
      
    if(mailcheck.length > 6 && mailcheck.includes("@")) {
        alert("GG");
        var blob = new Blob([tab], {type: 'text/csv;charset=utf-8,'});
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'Ocena: '+name.value+'.csv';
        document.body.appendChild(link);
        link.click();

    }else{
        alert("Podano niepoprawny mail");
    }
    
    return false;
}
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = calculate;
} // Koniec funkcji init().
window.onload = init;
