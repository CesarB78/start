import '../css/components.css';
// import webpacklogo from '../assets/img/webpack-logo.png'


export const saludar = ( nombre )=>{
    console.log('creando etiquete H1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${ nombre } !!!Hoola23`;

    document.body.append(h1);

    //img
    // console.log(webpacklogo);
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);


}
