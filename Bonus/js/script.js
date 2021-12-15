// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

Vue.config.devtools = true;
const app = new Vue(
    {
        el: '#root',
        data: {
            emailArray: [],
            numberOfEmail: 10,
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