class FormSubmit {
    constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButtom = document.querySelector(settings.button);
    if (this.form) {
        this.url = this.form.getAttribute('action');
    }
    }


    displaySuccess() {
        this.form.ihnerHTML = this.settings.success;
    }


    display() {
        this.form.innerHTML = this.settings.error;
    }

    init() {
        if (this.form) this.formButtom.addEventListener("click", () => this.displaySuccess());
        return this
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});