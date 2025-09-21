en esta carpeta armaremos un main layout, el cual sera un container que dara la estructura general y dentro iria el contenido
la estructura general seria el header y footer de la pagina.
En estos layouts tendriamos los contenedos principales
tambien se arma un authLayout para las paginas de registro y login, lo que cambiara unicamente es el formulario a mostrar. Se pasaria por
props el titulo 
Es deceri ejemplo, Home.jsx ---> MainLayout.jsx ---> {children}
                   Register.jsx ---> AuthLayout.jsx ---> {children}