class Toggable{
  constructor(el){
    //inicializar el estado interno
    this.el= el
    this.el.innerHTML = 'off'
    this.activated = false
    this.el.addEventListener('click',this.onClick.bind(this))
  }
  onClick(){
    //cambiar estado interno
    //llamar a toggleText
    this.activated = !this.activated
    this.toggleText ()
  }

  toggleText(){
    //cambiar de texto
    this.el.innerHTML= this.activated ? 'on' : 'off'
  }
}
const button = document.getElementById('boton')
const miBoton = new Toggable(button)
