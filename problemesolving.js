const prompt = require("prompt-sync")();
// let n = +prompt("Entrez le nombre d escalier :");
// function pas(n) {
//   if (n <= 2) return n;
//   return pas(n - 1) + pas(n - 2);}
// console.log("Nombre de façons possibles :", pas(n));
//Défi 2 :
// let N = +prompt("entrez un nombre : ");
// if(N % 3 === 0  && N % 5 === 0){
//     console.log("TechLead");    
// }else if(N % 3 === 0 ){
//     console.log("Tech ")
// } else if(N % 5 === 0){
//     console.log("Lead")
// }else {
//       console.log(N)
// }
//Défi 3:
// let tab1 = [1,4,6,8,9,4,9,6,8]
// let tab2 = [];
//  for (let x = 0; x < tab1.length; x++) {
//     let exist = false;
//     for (let i = 0; i < tab2.length; i++) {
//       if (tab1[x] === tab2[i]) {
//         exist = true;
//         break;
//         }}
//         if (exist == false){
//             tab2.push(tab1[x])
//         }
//   };
// console.log("Tableau sans doublons :",tab2 );
// Défi 4 :
// let table = [2, 4, 6, -3, 5, 7] 
//  let somme = 0
//  for (let n of table)
//  {
//   if (n < 0) break;
//     somme += n;
//  }
//  console.log("la somme des nombres posetif est :",somme)
// Defi 5 :
// let table11 = [1, 2, 3] 
// function miroir() {
//   let table12=[]
//   table12.push(table11+","+(table11.reverse()))
//   return table12}
// console.log(miroir())
// Defi 6 :
// let text = prompt("Entrez votre texte :");
//   let voyelles = "aeiou";
//   let count = 0;
//   for (let c of text) {
//     if (voyelles.includes(c)) count++;
//   }
// console.log("le nombre des voyelles dans votre text est :", count);
// Defi 7 :
// let mot = prompt("Entrer un mot : ")
// let Palindrome = true;

// for (let i = 0; i < mot.length / 2; i++) {
//   if (mot[i] !== mot[mot.length - 1 - i]) {
//     Palindrome = false;
//     break;}}
// if (Palindrome) {
//   console.log("True");
// } else {
//   console.log("False");
// }
// Defi 8 :
// let mot = prompt("Entrer un mot :");
// let lettres = [];
// let compter = [];
// for (let i = 0; i < mot.length; i++) {
//   let lettre = mot[i];
//   let trouve = false;
// for (let j = 0; j < lettres.length; j++) {
//     if (lettres[j] === lettre) {
//       compter[j]++; 
//       trouve = true;
//       break;}}
// if (trouve === false) {
// lettres.push(lettre);
// compter.push(1);}}
// for (let i = 0; i < lettres.length; i++) {
//   console.log(lettres[i] + " : " + compter[i]);
// }
// Defi 9 :
