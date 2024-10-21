import {
    createGoal,
    deleteGoal,
    getAllGoals,
    getGoal,
    updateGoal
} from "../../modules/goals";

describe("Test goals", () => {

    it("create goal", () => {
        const randomString = Math.random().toString(36).substring(2, 15);
        const goalName = `Goal ${randomString}`;
        createGoal(goalName).then((resp) => {
            console.log(resp.body);
            expect(resp.status).to.eq(200);
            expect(resp.body.goal.name).to.eq(goalName);
        });
    });


    it("get all goals", () => {
        getAllGoals().then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it("get goal", () => {
        createGoal('for get goal').then((resp) => {
            const goalId = resp.body.goal.id;
            getGoal(goalId).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.goal.name).to.eq(resp.body.goal.name);
            });
        });
    });

    it("update goal name and desc", () => {
        const randomString = Math.random().toString(36).substring(2, 15);
        const newName = `my UPD name ${randomString}`;
        getAllGoals().then((response) => {
            const firstSpaceId = response.body.goals[0].id;
            const payload = {name: newName, description: newName};
            updateGoal(payload, firstSpaceId).then((resp) => {
                expect(resp.status).to.eq(200);
                expect(resp.body.goal.name).to.eq(newName);
                expect(resp.body.goal.description).to.eq(newName);
            });
        });
    });


    it("delete goal", () => {
        createGoal('for delete').then((resp) => {
            const goalId = resp.body.goal.id;
            deleteGoal(goalId).then((response) => {
                expect(response.status).to.eq(200);});
            });
        });
    });


