import * as allure from "allure-js-commons";

Cypress.Commands.add('sentRequest', (type, endpoint, payload) => {
    return  allure.step(`Trying to send ${type} request to ${endpoint}`, () =>{
        if (payload && Object.keys(payload).length > 0)  {
            allure.attachment(`requestBody for ${type} ${endpoint}`, JSON.stringify(payload), 'application/json')
            cy.log(`Trying to send ${type} request to ${endpoint} with body ${JSON.stringify(payload)}`);
        } else {
            cy.log(`Trying to send ${type} request to ${endpoint} without body`);
        }
        return cy.request({
            method: type,
            url: endpoint,
            failOnStatusCode: false,
            headers: {
                Authorization: Cypress.env('token'),
                Accept: 'application/json',
            },
            // log: true,
            body: payload,
        }).then((resp) => {
            allure.attachment(`responseBody for ${type} ${endpoint}`, JSON.stringify(resp.body), 'application/json')
            cy.log(`Response body: ${JSON.stringify(resp.body)}`); // Log the response body
            return cy.wrap(resp);  // Use cy.wrap() to ensure the response is chained properly
        });

    })
});
