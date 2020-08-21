describe('counter app tests', () => {

    it('should display 0 on page', () => {
        cy.visit('./index.html')
        cy.get('#count').contains('0')
    })

    it('should display button with +', () => {
        cy.get('.plusOne').contains('+')
    })

    it('should display button with -', () => {
        cy.get('.minusOne').contains('-')
    })

    it('should increment number displayed by 1 when the + button is pressed', () => {
        cy.get('#count').then(($count) => {
            const stringCount = $count.text()
            const numberCount = parseInt(stringCount)
            cy.get('.plusOne').click()
            cy.get('#count').then(($newCount) => {
                const newStringCount = $newCount.text()
                const newNumberCount = parseInt(newStringCount)
                if(newNumberCount === numberCount + 1){
                    console.log('count incremented by 1')
                }
                else throw new Error ('count did not increment by 1')
            })
        })
    })

    it('should decrement number displayed by 1 when the - button is pressed', () => {
        cy.get('#count').then(($count) => {
            const stringCount = $count.text()
            const numberCount = parseInt(stringCount)
            cy.get('.minusOne').click()
            cy.get('#count').then(($newCount) => {
                const newStringCount = $newCount.text()
                const newNumberCount = parseInt(newStringCount)
                if(newNumberCount === numberCount - 1){
                    console.log('count decremented by 1')
                }
                else throw new Error ('count did not decrement by 1')
            })
        })
    })

    it('should not exceed 10 when + button is pressed', () => {
        throw new Error("add code")
    })

    it('should not go below 0 when - button is pressed', () => {
        throw new Error("add code")
    })

    it('should display button with +3', () => {
        throw new Error("add code")
    })

    it('should display button with -3', () => {
        throw new Error("add code")
    })

    it('should increment number displayed by 3 when the + button is pressed', () => {
        throw new Error("add code")
    })

    it('should decrement number displayed by 3 when the - button is pressed', () => {
        throw new Error("add code")
    })
})