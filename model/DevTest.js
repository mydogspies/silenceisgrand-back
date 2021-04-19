module.exports = (sequelize, Sequelize) => {
    const DevTest = sequelize.define("devtest", {
        id: {
            type: Sequelize.INT
        },
        test: {
            type: Sequelize.STRING
        }
    });

    return DevTest;
};
