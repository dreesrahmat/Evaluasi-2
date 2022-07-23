// soal 1
document.writeln('Soal 1')
document.writeln('<br>')
document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 5 || y == 5 || x == y || x + y == 10) {
         document.writeln('*')
      }else{
         document.writeln('&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')

// soal 2
document.writeln('Soal 2')
document.writeln('<br>')
document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x + y >= 10) {
         document.writeln('*')
      } else {
         document.writeln('&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')

// soal 3
document.writeln('Soal 3')
document.writeln('<br>')
document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x <= y && x + y <= 10 || x >= y && x + y >= 10) {
         document.writeln('*')
      } else {
         document.writeln('&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')

// soal 4
document.writeln('<h3>' + 'Mencetak Nama Panggilan' + '</h3>')
document.writeln('<br>')
document.writeln('Huruf D')
document.writeln('<br>')
document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 || x == 2 ) {
         document.writeln('*')
      } else if (y == 1 && x <= 7 || y == 2 && x <= 8) {
         document.writeln('*')
      } else if (y == 8 && x <= 8 || y == 9 && x <= 7) {
         document.writeln('*')
      } else if (x == 8 && y >= 2 && y <= 8 || x == 9 && y >= 3 && y <= 8) {
         document.writeln('*')
      } else {
         document.writeln('&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')
document.writeln('Huruf E')
document.writeln('<br>')
document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 || x == 2) {
         document.writeln('*')
      } else if (y == 1 && x <= 7 || y == 2 && x <= 8) {
         document.writeln('*')
      } else if (y == 8 && x <= 8 || y == 9 && x <= 7) {
         document.writeln('*')
      } else if (y == 4 && x <= 8 || y == 5 || y == 6 && x <= 8) {
         document.writeln('*')
      } else {
         document.writeln('&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')
document.writeln('Huruf D')
document.writeln('<br>')
document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 1 || x == 2) {
         document.writeln('*')
      } else if (y == 1 && x <= 7 || y == 2 && x <= 8) {
         document.writeln('*')
      } else if (y == 8 && x <= 8 || y == 9 && x <= 7) {
         document.writeln('*')
      } else if (x == 8 && y >= 2 && y <= 8 || x == 9 && y >= 3 && y <= 8) {
         document.writeln('*')
      } else {
         document.writeln('&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}

document.writeln('<br>')
document.writeln('Huruf Y')
document.writeln('<br>')
document.writeln('<br>')
for (let y = 1; y <= 9; y++) {
   for (let x = 1; x <= 9; x++) {
      if (x == 4 && y > 2 || x == 5 && y > 3 || x == 6 && y > 2) {
         document.writeln('*')
      } else if (x >= y && x < 4 || x + y <= 10 && x > 6) {
         document.writeln('*')
      } else{
         document.writeln('&nbsp' + '&nbsp')
      }
   }
   document.writeln('<br>')
}
