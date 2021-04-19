module.exports = (sequelize, Sequelize) => {
    const DevTest = sequelize.define("devtest", {
        id: {
            type: Sequelize.INTEGER
        },
        test: {
            type: Sequelize.STRING
        }
    });

    return DevTest;
};
