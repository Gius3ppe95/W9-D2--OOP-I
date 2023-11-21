class SonAccount {
  private balance: number;

  constructor(balanceInit: number = 0) {
    this.balance = balanceInit;
  }

  oneDeposit(amount: number): void {
    this.balance += amount;
  }

  oneWithdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Fondi insufficienti");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

class MotherAccount extends SonAccount {
  addInterest(): void {
    const interest = super.getBalance() * 0.1;
    super.oneDeposit(interest);
  }
}

// Utilizzo delle classi
const sonAccount = new SonAccount();
const motherAccount = new MotherAccount();

// Funzioni chiamate dai pulsanti HTML
function effettuaDepositoFiglio() {
  const depositoFiglio = parseFloat((document.getElementById("depositoFiglio") as HTMLInputElement).value);
  sonAccount.oneDeposit(depositoFiglio);

  // Aggiungi l'interesse solo quando viene effettuato un deposito
  motherAccount.addInterest();

  aggiornaSaldi();
}

function effettuaPrelievoFiglio() {
  const prelievoFiglio = parseFloat((document.getElementById("prelievoFiglio") as HTMLInputElement).value);
  sonAccount.oneWithdraw(prelievoFiglio);
  aggiornaSaldi();
}

// Aggiorna i saldi nella pagina HTML
function aggiornaSaldi() {
  document.getElementById("saldoFiglio")!.innerText = "Saldo Conto Figlio: " + sonAccount.getBalance().toString();
  document.getElementById("saldoMadre")!.innerText = "Saldo Conto Madre: " + motherAccount.getBalance().toString();
}
