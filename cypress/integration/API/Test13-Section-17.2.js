
describe('API test using request method', () => {
   it('API POST request', () => {

      cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
         "name": "Learn Cypres Automation with JS",
         "isbn": "bcd",
         "aisle": "bcdABC123",
         "author": "John Doe"
      }).then((response) => {
         expect(response.status).to.eq(200);
         expect(response.body).to.have.property('Msg', 'successfully added');

         const bookID = response.body.ID;
         cy.log('Extracted Book ID:', bookID);
         Cypress.env('bookID', bookID);
         cy.log(response.body)

      })
   })

   it('Find added book by ID', () => {
      const bookID = Cypress.env('bookID');
      cy.log('Using Book ID:', bookID);
      // Send a GET request using the extracted book ID
      cy.request('GET', `http://216.10.245.166/Library/?AuthorName=shettyGetBook.php?ID=${bookID}`).then((response) => {
         // Validate the retrieved book data
         expect(response.status).to.eq(200);
         cy.log(response.body);

         const HTMLParser = new DOMParser();
         const doc = HTMLParser.parseFromString(response.body, 'text/html'); // Convert into DOM object

         // Use Cypress to traverse the HTML and find the relevant data
         // Example: Extract links or text from the HTML content
         const links = Array.from(doc.querySelectorAll('a'))
            .map((anchor) => anchor.textContent.trim()); // Get all anchor links text

         cy.log('Extracted Links:', links);

         // Example: Find specific files like `Addbook.php` or related "data" you need
         const addBookFile = links.find((link) => link === 'Addbook.php');
         const getBookFile = links.find((link) => link === 'GetBook.php');

         expect(addBookFile).to.not.be.undefined;
         expect(getBookFile).to.not.be.undefined;
      });
   });
})
