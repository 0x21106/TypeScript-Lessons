abstract class CreditBase {
    constructor() {
        
    }
    
    save() {
        console.log("Saved!")
    }
    
    abstract calculate():void
    
}

class TeacherCredit extends CreditBase {
    constructor() {
        super()
    }
    
    calculate(): void {
        console.log("Ogretmen Kredisi Hesabi Yapildi")
    }
}

class MortgageCredit extends CreditBase {
    constructor() {
        super()
    }
    
    calculate(): void {
        console.log("Konut Kredisi Hesabi Yapildi")
    }
}

let credits[] : CreditBase = [
    new TeacherCredit(),
    new MortgageCredit()
]

