 describe('template spec', () => {

   it('should Addition Of two numbers', function () {
     cy.visit('https://calculator.net')
     cy.get('span[onclick="r(\'-\')"]').click();
     cy.get('span[onclick="r(2)"]').click();
     cy.get('span[onclick="r(3)"]').click();
     cy.get('span[onclick="r(4)"]').click();
     cy.get('span[onclick="r(2)"]').click();
     cy.get('span[onclick="r(3)"]').click();
     cy.get('span[onclick="r(4)"]').click();
     cy.get('span[onclick="r(\'+\')"]').click();
     cy.get('span[onclick="r(3)"]').click();
     cy.get('span[onclick="r(4)"]').click();
     cy.get('span[onclick="r(5)"]').click();
     cy.get('span[onclick="r(3)"]').click();
     cy.get('span[onclick="r(4)"]').click();
     cy.get('span[onclick="r(5)"]').click();

   });

   it('should Subtraction Of two numbers', function () {
     cy.visit('https://calculator.net')
     cy.get('span[onclick="r(2)"]').click();
     cy.get('span[onclick="r(3)"]').click();
     cy.get('span[onclick="r(4)"]').click();
     cy.get('span[onclick="r(8)"]').click();
     cy.get('span[onclick="r(2)"]').click();
     cy.get('span[onclick="r(3)"]').click();
     cy.get('span[onclick="r(\'-\')"]').click();
     cy.get('span[onclick="r(\'-\')"]').click();
     cy.get('span[onclick="r(2)"]').click();
     cy.get('span[onclick="r(3)"]').click();
     cy.get('span[onclick="r(0)"]').click();
     cy.get('span[onclick="r(9)"]').click();
     cy.get('span[onclick="r(4)"]').click();
     cy.get('span[onclick="r(8)"]').click();
     cy.get('span[onclick="r(2)"]').click();
     cy.get('span[onclick="r(3)"]').click();

   })

   it('should Multiplication Of two numbers', function () {
     cy.visit('https://calculator.net')
     cy.get('span[onclick="r(4)"]').click();
     cy.get('span[onclick="r(2)"]').click();
     cy.get('span[onclick="r(3)"]').click();
     cy.get('span[onclick="r(\'*\')"]').click();
     cy.get('span[onclick="r(5)"]').click();
     cy.get('span[onclick="r(2)"]').click();
     cy.get('span[onclick="r(5)"]').click();

   });

   it('should Division Of two numbers', function () {
     cy.visit('https://calculator.net')
     cy.get('span[onclick="r(4)"]').click();
     cy.get('span[onclick="r(0)"]').click();
     cy.get('span[onclick="r(0)"]').click();
     cy.get('span[onclick="r(0)"]').click();
     cy.get('span[onclick="r(\'/\')"]').click();
     cy.get('span[onclick="r(2)"]').click();
     cy.get('span[onclick="r(0)"]').click();
     cy.get('span[onclick="r(0)"]').click();

   });
 });