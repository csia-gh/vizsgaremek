## **1. Az alkalmazás célja**

​

- Hangszeráruház termékeinek, rendeléseinek, számláinak stb. kezelésére szolgáló admin felület.
  ​

## **2. Az alkalmazás telepítése**

​
Pl.:

- Forkolni kell az adott GitHub repository tartalmát: https://github.com/csia-gh/vizsgaremek
- A célgépre le kell klónozni az adott GitHub repository tartalmát:

```sh
git clone https://github.com/csia-gh/vizsgaremek
```

- Telepíteni kell az alkalmazás függőségeit:
  - Be kell lépni a vizsgaremek/backend mappába, és ki kell adni az `npm i` parancsot:
  ```sh
  cd vizsgaremek/backend
  npm i
  ```
  - Be kell lépni a vizsgaremek/frontend mappába, és ki kell adni az `npm i` parancsot:
  ```sh
  cd ../frontend
  npm i
  ```
- Ha még nincsen fenn a célgépen, akkor telepíteni kell az Angular keretrendszert az `npm i -g @angular/cli` paranccsal  
  ​

## **3. Az alkalmazás konfigurálása**

​

- A terminálban ki kell adni az `ng build` parancsot
- A /frontend/dist/frontend mappa tartalmát be kell másolni a /backend/public mappába
- A terminálon be kell lépni a /backend mappába és futtatni az `npm start` parancsot

A /frontend/environments mappában be kell állítani az API-végpont elérési útvonalát: (ha szükséges)

- _environment.ts_ állomány: http://localhost:3000/
- _environment.prod.ts_ állomány: http://localhost:3000/
  ​

## **4. Az alkalmazás indítása**

​
A megadott Docker container indítása és inicializálása:

- El kell indítani a Docker Desktop alkalmazást
- A /backend mappába belépve a terminálban ki kell adni az `npm run dev` parancsot
- Ha szükséges, a /frontend mappába belépve a terminálban az `npm start` paranccsal indítható a frontend
  ​
  _Megjegyzés_:  
  A belépéshez egy érvényes e-mail-cím és jelszó páros (példa):  
  ​
  E-mail | Jelszó
  ------------ | -------------
  admin@gmail.com | test12345

## **5. A végpontok dokumentációja**

​
Pl.:
Swagger

- Az alábbi URL-t kell beírni a böngészőbe: https://localhost:3000/api-docs
  ​

---

---

​

## **Linkek:**

​

- Felhasználói történetek ( User Story ) - https://github.com/csia-gh/vizsgaremek/blob/main/README.md
