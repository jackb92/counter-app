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
                //convert to if not incremented (!)
                if(newNumberCount === numberCount + 1){
                    console.log('count incremented by 1')
                }
                else throw new Error ('count did not increment by 1')
            })
        })
    })

    it('should decrement number displayed by 1 when the - button is pressed', () => {
        cy.countSetter(1)
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

    it('should not be able to exceed 10 when + button is pressed', () => {
        cy.countSetter(10)
        cy.get(".plusOne").click()
        cy.get("#count").contains("10")
    })

    it('should not be able to go below 0 when - button is pressed', () => {
        cy.countSetter(0)
        cy.get(".minusOne").click()
        cy.get("#count").contains("0")
    })

    it('should display button with +3', () => {
        cy.get('.plusThree').contains('+3')
    })

    it('should display button with -3', () => {
        cy.get('.minusThree').contains('-3')
    })

    it('should increment number displayed by 3 when the + button is pressed', () => {
        cy.get('#count').then(($count) => {
            const stringCount = $count.text()
            const numberCount = parseInt(stringCount)
            cy.get('.plusThree').click()
            cy.get('#count').then(($newCount) => {
                const newStringCount = $newCount.text()
                const newNumberCount = parseInt(newStringCount)
                if(newNumberCount === numberCount + 3){
                    console.log('count incremented by 3')
                }
                else throw new Error ('count did not increment by 3')
            })
        })
    })

    it('should decrement number displayed by 3 when the - button is pressed', () => {
        cy.get('#count').then(($count) => {
            const stringCount = $count.text()
            const numberCount = parseInt(stringCount)
            cy.get('.minusThree').click()
            cy.get('#count').then(($newCount) => {
                const newStringCount = $newCount.text()
                const newNumberCount = parseInt(newStringCount)
                if(newNumberCount === numberCount - 3){
                    console.log('count decremented by 3')
                }
                else throw new Error ('count did not decrement by 3')
            })
        })
    })

    it('should not exceed 10 when +3 button is pressed', () => {
        cy.countSetter(9)
        cy.get(".plusThree").click()
        cy.get("#count").contains("10")
    })

    it('should not go below 0 when -3 button is pressed', () => {
        cy.countSetter(2)
        cy.get(".minusThree").click()
        cy.get("#count").contains("0")
    })

    it('should not exceed customer upperbound when changed from default', () => {
        throw new Error ('Add code')
    })

    
})