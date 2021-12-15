// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            emailArray: [],
        },
        methods: {
            getArrayEmail: function(emailArray) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                   const serverGenerateEmail = response.data.response;
                   this.emailArray.push(serverGenerateEmail);
                   
                });
            }
        },
        created: function() {
            this.getArrayEmail();
            this.getArrayEmail();
            this.getArrayEmail();
            this.getArrayEmail();
            this.getArrayEmail();
            this.getArrayEmail();
            this.getArrayEmail();
            this.getArrayEmail();
            this.getArrayEmail();
            this.getArrayEmail();
        }
    }
);