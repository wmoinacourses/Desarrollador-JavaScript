Requisitos Técnicos
¿Qué es NPM?
NPM es un package manager para JavaScript. Eso quiere decir que es un lugar donde están guardas aquellas librerías o dependencias que usaremos en nuestros proyectos, y de hecho, tu puedes crear y compartir las tuyas.
¿Qué tipo de dependencias?, muchas, tanto de backend y front-end que utilicen JavaScript, quizás unas ya las conoces, las puedes consultar las más populares en:
https://www.npmjs.com/
¿Qué necesito para publicar un módulo de NPM?
Lo primero es tener una cuenta en el sitio, solo necesitas correo y contraseña, lo obtienes en:
https://www.npmjs.com/signup
Lo siguiente es tener instalado Node.js, ya que entre otras cosas, es la plataforma que nos ayuda a tener instaladas las herramientas de NPM en nuestra terminal. Si aún no lo tienes, lo puedes hacer desde:
https://nodejs.org/en/download/
Teniendo cuenta lo anterior, tenemos que decirle a NPM quienes somos, para ello, necesitamos pasar unos datos desde la terminal:
npm set init.author.name “Tu nombre”
npm set init.author.email “Tu correo”
npm set init.author.url “Una url de tu sitio, inclusive puede ser una red social”
De inmediato ejecutamos npm login y agregaremos las credenciales que obtuvimos en el sitio. Si alguno de nuestros datos no es correcto, se va a mostrar en la terminal. Si todo está bien, se vera algo como lo siguiente:
Captura de pantalla 2017-03-24 a la(s) 2.57.24 p.m..png
Y con esto ya tenemos todo listo para publicar nuestro módulo.
