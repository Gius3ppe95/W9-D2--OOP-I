var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        if (balanceInit === void 0) { balanceInit = 0; }
        this.balance = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function (amount) {
        this.balance += amount;
    };
    SonAccount.prototype.oneWithdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Fondi insufficienti");
        }
    };
    SonAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MotherAccount.prototype.addInterest = function () {
        var interest = _super.prototype.getBalance.call(this) * 0.1;
        _super.prototype.oneDeposit.call(this, interest);
    };
    return MotherAccount;
}(SonAccount));
// Utilizzo delle classi
var sonAccount = new SonAccount();
var motherAccount = new MotherAccount();
// Funzioni chiamate dai pulsanti HTML
function effettuaDepositoFiglio() {
    var depositoFiglio = parseFloat(document.getElementById("depositoFiglio").value);
    sonAccount.oneDeposit(depositoFiglio);
    // Aggiungi l'interesse solo quando viene effettuato un deposito
    motherAccount.addInterest();
    aggiornaSaldi();
}
function effettuaPrelievoFiglio() {
    var prelievoFiglio = parseFloat(document.getElementById("prelievoFiglio").value);
    sonAccount.oneWithdraw(prelievoFiglio);
    aggiornaSaldi();
}
// Aggiorna i saldi nella pagina HTML
function aggiornaSaldi() {
    document.getElementById("saldoFiglio").innerText = "Saldo Conto Figlio: " + sonAccount.getBalance().toString();
    document.getElementById("saldoMadre").innerText = "Saldo Conto Madre: " + motherAccount.getBalance().toString();
}
