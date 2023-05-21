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

4. Napisac logike w funkcji handleSave i handleDelete na bazie id pobranego z url
5. Utwórz Formularz do edycji produktu 
- stworz handler do aktualizowania wartosci produktu (patrz components/Form/index.tsx => handleChange) https://github.com/szu-szy/wyk-13.05
- po wcisnieciu przycisku zapisz w formularzu, wykona sie event onSubmit -> handleSave
- wynikiem koncowym bedzie wypisanie zaktualizowanego produktu w konsoli
- sprobuj ustawic produkt otrzymany z serwera jako stan dzieki setProduct
- jezeli sie uda to isReadOnly ustawamy na true
6. Stwórz komponent SearchForm który otrzymuje jako props searchTerm oraz funkcje do ustawiania searchTerm
- po wcisnieciu przycisku search powinno pobrac liste przefiltrowanych danych po tytule
- do uzycia Endpoint Search product 
- https://dummyjson.com/products/search?q=${searchTerm}
7. Utwórz Formularz do tworzenia produktów
- zawiera wszystkie pola do uzupelnienia z API product (https://dummyjson.com/docs/products)
- przycisk submit tworzy nam nowy produkt i dodaje do listy produktów
- po storzeniu produktu przenosi nas do listy produktów
- formularz zawiera walidacje po stronie klienta (w funkcji odpowiedzialnej za wyslanie zapytania do serwera oraz w strukturze JSX)
- jezeli nie spelnia warunków walidacji to wyskakuje alert dla uzytkownika
- dodajemy do routingu nowa sciezke o nazwie /products/new i przekazujemy tam komponent naszego ProductForm

Wykład 21.05

## Zadanko 1
- stwórz własnego hooka z logiką dla komponentu Product

## Zadanie 2
- stwórz hooka dla App.tsx (src>hooks>useApp.ts)
- stwórz typ zwracanego obiektu w hooku
- przenies tam cala logike z App.tsx


## Zadanie 3
- stwórz formularz do rejestracji
- funkcje register przystosuj do formularza
- walidacja - haslo minimum 6 znaków
- efekt koncowy to dodanie uzytkownika do firebase

## Zadanie 4
- stwwórz formularz do logowania
- funkcje login przystosuj do formularza
- walidacja - hasło minimum 6 znaków
- informacja dla uzytkownika o pomyslnym zalogowaniu + log w konsoli

## Zadanie końcowe 
# Konfiguracja projektu
- Stwórz puste repozytorium na github
- Sklonuj je lokalnie za pomoca git clone
- Stwórz w pobranym repozytorium pusty projekt React
- komenda: npx create-react-app my-app --template typescript
- po zainstalowaniu dodaj paczki:
- node-sass
- firebase
- react-router-dom

# Konfiguracja Firebase
- stwórz nowy projekt wraz z aplikacją
- dodaj plik do folderu src > firebaseConfig.ts
- w komponencie App zainicjuj aplikacje:
- const app = initializeApp(firebaseConfig);

# Stwórz routing aplikacji (kazda strona ma inny header)
- homepage "/" 
- lista postów "/posts"
- strona pojedynczego posta "/posts/:id"
- strona do rejestracji użytkownika "/register"
- strona do logowania "/login"
- strona do formularza który tworzy nowy post "/posts/new"

# Komponenty
- App - zawiera liste postów i przekazuje ją nizej
- Lista postów - wyswietla posty
- Pojedyńczy post + formularz do edycji - wyswietla post i edytuje oraz usuwa
- Formularz do stworzenia postu - tworzy nowy post
- Formularz do logowania - loguje do firebase
- Formularz do rejestracji - tworzy uzytkownika w firebase

# Dodatkowe uwagi
- logika wydziela w hookach
- lekkie wystylowanie wszystkich komponentów