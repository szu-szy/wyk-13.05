## PRACA DOMOWA
# link do API: https://dummyjson.com/docs/products
ZADANIE 1 - 20.05
1. Utwórz aplikacje która będzie przechowywala liste produktów za pomoca stanu useState
- w pliku App.tsx pobierz oraz przypisz do listy liste produktów
- wynik końcowy wypisanie w konsoli listy produktów
- limit produktów - 20
2. Utwórz Komponent Products
- wyswietla liste produktów
- lista jest przekazywana przez propsy
- bedzie sie skladała z thumbnail, nazwy, firmy, ceny
- dodajmy podstawowe style

3. Dodaj routing aplikacji
- dodaj scieżke dla pojedynczego produktu która zawiera parametr ID

3.1 Utwórz Komponent Product który wyswietla informacje o pojedynczym produkcje (przekazane przez propsy na bazie typu)
- zawiera przycisk usun do usuniecia produktu z bazy
- zawiera logike która usuwa element z bazy
- zawiera przycisk edytuj (kiedy isReadOnly === true) oraz przycisk save (kiedy isReadOnly === false)
- jezeli isReadOnly === false to mamy mozliwosc edycji naszego produktu
- przycisk save aktualizuje produkt w bazie














3. Utwórz Formularz do tworzenia produktów
- zawiera wszystkie pola do uzupelnienia z API product
- przycisk submit tworzy nam nowy produkt i dodaje do listy produktów
- formularz zawiera walidacje po stronie serwera (w funkcji odpowiedzialnej za wyslanie zapytania do serwera oraz w strukturze JSX)
4. Utwórz formularz który filtruje nam produkty po nazwie
