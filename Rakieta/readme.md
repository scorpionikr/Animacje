<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Animacja z pseudoklasą :hover

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

-------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Animacja- poruszanie obiektu po ekranie  (~ 15min - 20min)

Dzięki animacji CSS odwiedź rakietą wszystkie planety.
Wymagać to będzie obracania rakiety oraz przesuwania jej do odpowiednich pozycji.
Można do tego celu wykorzystać biblioteki służące do animacji takie: 
[jquery](http://jqapi.com/#p=animate), 
[velosity.js](http://velocityjs.org/),
[TweenMax](https://greensock.com/tweenmax) czy podobne.

Można to też zrobić zwykłą animacją CSS.   
Zrobienie długiej pojedynczej animacji może być tutaj problematyczne, ponieważ ciężko dobrać ile procent ma zająć dana faza ruchu oraz obrót i połączyć to wszystko w jeden długi lot. 

O wiele łatwiejszym rozwiązaniem będzie stworzenie 4 odzielnych animacji które dodasz do rakiety (po przecinku, jak w poprzednim zadaniu). Każda taka animacja będzie odpowiadać za pojedynczy lot na kolejną planetę. 
Początek animacji to odpowiedni obrót - tak by rakieta nie latała tyłem (chociaż kto ich tam wie), po którym następuje przelot we spółrzędne kolejnej planety.
Kolejne animacje powinny się zaczynać z odpowiednim opóźnieniem. Po zakończonym locie możesz sobie wystawić dymplom asa przestworzy. 
