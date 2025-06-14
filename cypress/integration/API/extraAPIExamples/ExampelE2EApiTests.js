import {baseUrl, getPostsEndpoint} from '../../../support/endpoints';
import {getPostByIdEndpoint} from "../../../support/endpoints";

describe('e2e API examples', () => {
    const url = `${baseUrl}${getPostsEndpoint}`;
    const postId = 1;

    beforeEach(function () {
        cy.fixture('API/apiBodies').then((data) => {
            this.data = data;
        });
    });

    it('GET request ', () => {
        cy.request({
            method: 'GET',
            url: url + '/' + postId,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            cy.log("Response received:", JSON.stringify(res.body));
            expect(res.status).to.eq(200);
        })
    });

    it("POST request", function () {
        cy.request({
            method: "POST",
            url: url,
            body: this.data.putPostBody,
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((res) => {
            cy.log("Response received:", JSON.stringify(res.body));
            expect(res.status).to.eq(201);
            cy.wrap(res.body.id).as("responseId");
        });
    });

    it('PUT request', function () {
        cy.request({
            method: 'PUT',
            url: `${url}/${postId}`,
            body: this.data.putPostBody,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            cy.log("Response received:", JSON.stringify(res.body));
            expect(res.status).to.eq(200);
            expect(res.body).to.have.property('id');
        })
    });

    it('DELETE request', function () {
        cy.request({
            method: 'DELETE',
            url: `${url}/${postId}`,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then((res) => {
            cy.log("Response received:", JSON.stringify(res.body));
            expect(res.status).to.eq(200);
        })
    })
})

