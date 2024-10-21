const teamsGoalUrl = '/team/9012409060/goal'
const goalUrl = '/goal'
import * as allure from "allure-js-commons";

export const createGoal = ((name)=>{
    return allure.step(`Create Goal with name ${name}`, () =>{
        const payload = {name: name}
        return cy.sentRequest('post', teamsGoalUrl, payload)
    })
})

export const getAllGoals = (teamId = '9012409060') => {
    const url = `/team/${teamId}/goal`;
    return allure.step('Get a list of spaces', () => {
        return cy.sentRequest('get', url);
    });
};


export const getGoal = ((goalId)=>{
    return allure.step('Get a space', () => {
        return cy.sentRequest('get', `${goalUrl}/${goalId}`)
    })
})


export const updateGoal = ((payload, goalId)=>{
    return allure.step(`Update space name with name ${payload}`, () => {
        return cy.sentRequest('put', `${goalUrl}/${goalId}`, payload)
    })
})


export const deleteGoal = (goalId) => {
    return allure.step(`Delete space with id ${goalId}`, () => {
        return cy.sentRequest('delete', `${goalUrl}/${goalId}`);
    })
};

