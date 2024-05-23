//goit-qaa-hw-5 - Ewa Rostecka-Rzonca
//zad1
//Napisz krótkie wyjaśnienie słowa kluczowego this w JavaScript,
//podkreślając jego znaczenie i użycie w programowaniu obiektowym.
//Podaj przynajmniej dwa przykłady demonstrujące użycie this w JavaScript,
//wyjaśniając kontekst i znaczenie każdego przykładu.

//1. słowo kluczowe this  definiuje zakres obiektu, w którym aktualnie działamy
//może być też związane z lokalnym kontekstem - funkcje strzałkowe

// //1a jestesmy w obiekcie ola
 const ola = {
//     //własciwość username obiektu ola
     username: "Aleksandra Pardwa",
//     //metoda obiektu ola, która pozawala wyświetlić w konsoli podpowiedź kim jest własciciel , odwołując się do this tego obiektu
     showName() {
      console.log("Ola to :", this.username);     },
   };
//   //wywołanie metody
 ola.showName();


//   //1b jesteśmy w obiekcie Window/ w node.js - global
 function fooGlobal() {
//     //funkcja globalna, która pozwala na sprawdzenie w jakim obiekcie aktualnie jesteśmy - info w konsoli
     console.log(this);
 }
// //wywołanie funkcji globalnej  jest metodą obiektu Window
 fooGlobal();


//zad2
//Stwórz obiekt JavaScript reprezentujący osobę o imieniu "Maciej".
//Obiekt powinien mieć następujące właściwości i metody:
//username: Ciąg znaków reprezentujący imię osoby.
//showName(): Metoda, która zapisuje właściwość username w konsoli, używając słowa kluczowego this.
//Zaimplementuj metodę showName() używając słowa kluczowego this, aby odnosić się do samego obiektu.
//Przetestuj swój obiekt, wywołując metodę showName() i sprawdzając,
//czy poprawnie zapisuje właściwość username w konsoli.

 const person = {
//     //własciwość username obiektu person
     username: "Maciej",
//     //metoda wyświetlająca w konsoli username obiektu person
     showName() {
         return console.log(this.username);
     }
 }
// //wywołanie metody w obiekcie
 person.showName();

//zad3
//Rozszerz poprzedni przykład, aby utworzyć obiekt JavaScript reprezentujący półkę na książki.
//Obiekt powinien mieć następujące właściwości i metody:
// Tablica do przechowywania imion autorów na półce z książkami.
//getAuthors(): Metoda zwracająca tablicę autorów przechowywanych na półce z książkami.
//addAuthor(authorName): Metoda, która przyjmuje imię autora jako argument i dodaje je do tablicy autorów na półce z książkami.
//Zaimplementuj metody obiektu półki na książki, używając słowa kluczowego this, aby odnosić się do samego obiektu.
//Przetestuj swój obiekt, dodając kilku autorów do półki na książki, a następnie pobierając listę autorów za pomocą metody getAuthors().

 const bookShelf = {
//     //własciość tablica do przechowywania autorów
    authors: [],
//     //metoda obiektu bookShelf służąca do wyświetlania tablicy autorów this - tego obiektu
    getAuthors() {
       return this.authors;
     },
//     //metoda obiektu BookShelf słuząca do popbierania autorów i dodająca do tablicy autorów this tego obiektu
    addAuthor(authorName) {
        return this.authors.push(authorName);
     },
 }
// //dodaję kolejno 4 autorów do obiektu bookShelf korzystając z wenetrznej metody tego obiektu
 bookShelf.addAuthor("Robert Resnik");
 bookShelf.addAuthor("David Halliday");
 bookShelf.addAuthor("Edward Derringh");
 bookShelf.addAuthor("John Wiley");
// //wywołuję w konsoli tablicę autorów obiektu bookShelf korzystając z wenętrznej metody tego obiektu
 console.log(bookShelf.getAuthors());

