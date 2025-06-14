describe('VERY - Simple API test example', () => {

    it('GtBook API', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }
            ]
        }).as('getBook')
        cy.get('.btn.btn-primary').click();
        cy.wait('@getBook');
        cy.get('p').should('have.text', 'Oops only 1 Book available');
    });

    it('Work with response data', () => {
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "RSU",
                    "aisle": "2301"
                }
            ]
        }).as('getBook')
        cy.get('.btn.btn-primary').click();
        cy.wait('@getBook').then(({request, response}) => {
            cy.get('tr').should('have.length', response.body.length + 1);
        });
        cy.get('p').should('have.text', 'Oops only 1 Book available');
    });

    it('Using of intercept example with security BUG', () => {
        // there is a security BUG and test fails due to response 200
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req, res) => {
            req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra';
            req.continue((res) => {
                    expect(res.statusCode).to.equal(403);// but it is 200
                }
            )
        }).as('dummyRel')
        cy.get('.btn.btn-primary').click();
        cy.wait('@dummyRel');
    });

    it('Fetch Books API and Validate', () => {
        // Make an API request to fetch book details
        cy.request({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        }).then((response) => {
            // Validate the response status
            expect(response.status).to.eq(200);
            // Validate the response body
            expect(response.body).to.have.length(5204); // Check the number of items in the response
            expect(response.body[0]).to.have.property('book_name', 'RestAssured with Java');
            expect(response.body[0]).to.have.property('isbn', 'LSA');
            expect(response.body[0]).to.have.property('aisle', '2303');
        });
    });
})
