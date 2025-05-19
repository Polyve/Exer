/*-------------hasard-------------*/
/* Calcul element */

function func() {
  var text = document.getElementById('text');
  var capital = eval(document.getElementById('capital').value);
  var taux1 = eval(document.getElementById('taux1').value);
  var taux2 = eval(document.getElementById('taux2').value);
  var jour = eval(document.getElementById('jour').value);

  /* Création variable pour le tableau */
  var periode = [];
  var capn = [];
  var vrai = [];

  if (jour <= 10000) {

    if (capital <= 0 || capital == undefined || taux1 <= 0 || taux1 == undefined || taux2 <= 0 || taux2 == undefined || jour <= 0 || jour == undefined) {
      alert('Mettez des valeurs superieurs à zèro dans la zone de text ! 😮');

    } else {


      for (var cap = capital, g = 0, j = jour, i = 0, t1 = taux1, t2 = taux2, p = 0, a = 0; j > i; i++, a++) {

        ale = Math.floor(Math.random() * 2);

        if (ale == 1) {
          cap = (cap * (t1 / 100)) + cap;

          g++
        } else {
          cap = ((cap * (t2 / 100)) * (-1)) + cap;

          p++

          if (cap < 1) {
            j = i;

            var sex = document.createElement('p');
            sex.classList = 'perte';
            sex.innerText += "Votre trade s'est arrêté à la " + i + " periode avec une value de " + cap.toFixed(2);
            text.appendChild(sex);
          }
        }
        capn.push(cap.toFixed(3));
        periode.push(a);

        if (ale == 1) {
          vrai.push('Gain +');
        } else {
          vrai.push('Perte -');
        }
      }

      var tex = document.createElement('p');
      tex.classList = 'valeur';
      tex.innerText += 'Capital : ' + capital + ' / Valeur T : ' + cap.toFixed(3) + ' / value : ' + (cap.toFixed(3) - capital).toFixed(3) + ' / Perte : ' + p + ' / Gain : ' + g + ' / Trade : ' + i;
      text.appendChild(tex);

      /* Création table */

      if (document.getElementById('check1').checked) {

        if (i <= 500) {
          var tab = document.createElement('table');
          tab.classList = 'table';
          text.appendChild(tab);

          var tr = document.createElement('tr');
          var th = document.createElement('th');
          var td = document.createElement('td');
          var elem = ['Periode', 'Info', 'Valeur'];

          for (var e = 0; e < j; e++) {

            if (e == 0) {
              tab.appendChild(tr);

              for (var f = 0; elem.length > f; f++) {

                tr.appendChild(th.cloneNode(false)).innerHTML = elem[f];
              }
            }
            for (var trc = tab.appendChild(tr.cloneNode(false)), tabs = [periode, vrai, capn], u = 0; u < tabs.length; u++) {

              var tt = tabs[u];

              trc.appendChild(td.cloneNode(false)).innerHTML = tt[e];
            }
          }
        } else {
          document.getElementById('check1').checked = false;
          text.innerHTML += '<p class="perte">Valeur trop importante pour afficher le tableau !😲</p>';
        }
      }

      text.innerHTML += '<p class="espace"><———————| ♻️ |———————></p>';
    }
  } else {
    text.innerHTML += `<p class="perte">Mettez des valeurs comprise entre 1 à 10000 sur la barre d'écriture Trade.  </p>`;
    text.innerHTML += '<p class="espace"><———————| ♻️ |———————></p>';
  }
}

/* effacer les element*/

function ef() {

  text.innerHTML = '';

}

/*-------------invest----------- */

/* calcul element */
function func1() {
  var text1 = document.getElementById('text1');
  var capital1 = eval(document.getElementById('capital1').value);
  var taux3 = eval(document.getElementById('taux3').value);
  var taux4 = eval(document.getElementById('taux4').value);
  var jour1 = eval(document.getElementById('jour1').value);

  var gain = document.getElementById('gain');
  var perte = document.getElementById('perte');

  /* Création variable pour le tableau */
  var periode1 = [];
  var capn1 = [];
  var vrai1 = [];

  if (jour1 <= 10000) {
    if (capital1 <= 0 || capital1 == undefined || taux3 <= 0 || taux3 == undefined || taux4 <= 0 || taux4 == undefined || jour1 <= 0 || jour1 == undefined) {
      alert('Mettez des valeurs superieurs à zèro dans la zone de text ! 😮');

    } else {

      for (var cap1 = capital1, g1 = 0, j1 = jour1, i1 = 0, t3 = taux3, t4 = taux4, p1 = 0, a1 = 0; j1 > i1; i1++, a1++) {

        if (gain.checked) {
          cap1 = (cap1 * (t3 / 100)) + cap1;

          g1++
        } else if (perte.checked) {
          cap1 = ((cap1 * (t4 / 100)) * (-1)) + cap1;

          p1++

          if (cap1 < 1) {
            j1 = i1;

            var sex1 = document.createElement('p');
            sex1.classList = 'perte';
            sex1.innerText += "Votre trade s'est arrêté à la " + i1 + " periode avec une value de " + cap1.toFixed(2);
            text1.appendChild(sex1);
          }
        }

        capn1.push(cap1.toFixed(3));
        periode1.push(a1);

        if (gain.checked) {
          vrai1.push('+');
        } else if (perte.checked) {
          vrai1.push('-');
        }
      }

      var tex1 = document.createElement('p');
      tex1.classList = 'valeur';
      tex1.innerText += 'Capital : ' + capital1 + ' / Valeur T : ' + cap1.toFixed(3) + ' / Value : ' + (cap1.toFixed(3) - capital1).toFixed(3) + ' / Perte : ' + p1 + ' / Gain : ' + g1 + ' / Trade : ' + i1;
      text1.appendChild(tex1);



      /* Création table */

      if (document.getElementById('check2').checked) {
        if (i1 <= 500) {
          var tab1 = document.createElement('table');
          tab1.classList = 'table';
          text1.appendChild(tab1);

          var tr1 = document.createElement('tr');
          var th1 = document.createElement('th');
          var td1 = document.createElement('td');
          var elem1 = ['Periode', 'Info', 'Valeur'];

          for (var e1 = 0; e1 < j1; e1++) {

            if (e1 == 0) {

              tab1.appendChild(tr1);

              for (var f1 = 0; elem1.length > f1; f1++) {

                tr1.appendChild(th1.cloneNode(false)).innerHTML = elem1[f1];
              }
            }
            for (var trc1 = tab1.appendChild(tr1.cloneNode(false)), tabs1 = [periode1, vrai1, capn1], u1 = 0; u1 < tabs1.length; u1++) {

              var tt1 = tabs1[u1];

              trc1.appendChild(td1.cloneNode(false)).innerHTML = tt1[e1];
            }
          }
        } else {
          document.getElementById('check2').checked = false;
          text1.innerHTML += '<p class="perte">Valeur trop importante pour afficher le tableau !😲</p>';
        }
      }

      text1.innerHTML += '<p class="espace"><———————| ♻️ |———————></p>';
    }
  }
  else {
    text1.innerHTML += `<p class="perte">Mettez des valeurs comprise entre 1 à 10000 sur la barre d'écriture Trade.  </p>`;
    text1.innerHTML += '<p class="espace"><———————| ♻️ |———————></p>';
  }
}

/* effacer les element */

function ef1() {
  text1.innerHTML = '';
}

/*-------------risque----------- */

/* calcul element */

function func2() {
  var text2 = document.getElementById('text2');
  var capital2 = eval(document.getElementById('capital2').value);
  var taux5 = eval(document.getElementById('taux5').value);
  var pips = eval(document.getElementById('pips').value);

  var cret = document.createElement('p');
  cret.classList = 'valeur';

  if (capital2 <= 0 || capital2 == undefined || taux5 <= 0 || taux5 == undefined || pips <= 0 || pips == undefined) {
    alert('Mettez des valeurs superieurs à zèro dans la zone de text ! 😮');

  } else {
    var cc = capital2 * (taux5 / 1000);
    var tt2 = cc / pips;
    text2.appendChild(cret).innerText += 'Lots de ' + tt2 + ' avec un taux de ' + taux5 + '% et un capital de ' + capital2;
    text2.innerHTML += '<p class="espace"><———————| ♻️ |———————></p>';

  }
}

/* effacer les element */

function ef2() {
  text2.innerHTML ='';
}
