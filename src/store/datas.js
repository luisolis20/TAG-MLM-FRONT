
import {mostraralertas, enviarsoli, mostraralertas2} from '@/store/funciones'
import axios from 'axios'
export default {
  data() {
    return {
      nombre: "",
      email: "",
      apellidonombre: "",
      correoss: "",
      mensaje: "",
      subject: "",
      codigoVerificacion: "",
      envio1:true,
      
      correoTouched: false,
      correoError: '',
      correoErrornue: false,
      url: "http://tagmlmbackend.test/api/v1/cliente",
    };
  },
  watch: {
   
    email(newVal) {
      if (this.correoTouched) {
        this.validateEmail(newVal);
      }
    }
  },
  methods: {
    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.correoss)) {
          this.correoErrornue = true;
      } else {
          this.correoErrornue = false;
      }
    },
    onEmailInput() {
      this.correoTouched = true;
      this.validateEmail(this.email);
    },
   
   
    guardar(event){
        event.preventDefault();
        
        if(this.apellidonombre.trim()==''){
            mostraralertas('Ingrese Nombre de Usuario','warning','nombre');
        }
        else if (this.correoss.trim() === '') {
            mostraralertas('Ingrese un correo electrónico válido para estudiantes', 'warning', 'email');
        }
        
        else{
            var parametros = {
              nombres_apellidos:this.apellidonombre.trim(),
              correo:this.correoss.trim(),

            }
            enviarsoli('POST',parametros,this.url,'Cliente Registrado Correctamente');
            this.enviarComentario();
            
            
        }
    },
    async enviarComentario() {
      const comentarioData = {
        nombre: this.apellidonombre,
        correo: this.correoss,
        mensaje: this.mensaje
      };

      await axios.post('http://tagmlmbackend.test/api/v1/enviar-comentario', comentarioData)
        .then(response => {
          mostraralertas2('Comentario enviado con éxito','success');
          this.apellidonombre = '';
          this.correoss = '';
          this.mensaje = '';
          this.subject = '';
          window.setTimeout(function(){
                window.location.href='/'
              },4000);
        })
        .catch(error => {
          mostraralertas2('Error de ennvío','warning' + error.message);
        });
    },
    async enviarCodigo() {
      try {
        
        if (this.email.trim() === '') {
            mostraralertas('Ingrese un correo electrónico válido para estudiantes', 'warning', 'email');
        }else{
          const response = await axios.post("http://tagmlmbackend.test/api/v1/enviar-correo",
          {
            correo: this.email.trim(),
            }
          );
          
          
          alert("Código enviado a "+this.email );
        }
       
      } catch (error) {
        console.error(error);
        alert("Ocurrió un error al enviar el correo electrónico  a "+this.email );
      }
      
    },
    
    
  },
};