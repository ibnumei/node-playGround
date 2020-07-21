module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('pagingModel', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            field: 'id',
            allowNull: false
        },
        user: {
            type: DataTypes.STRING,
            field: 'user',
            allowNull: true
        },
        adress: {
            type: DataTypes.STRING,
            field: 'adress',
            allowNull: true
        },
        createdDate: {
            type: DataTypes.DATE,
            field: 'createdDate',
            allowNull: true
        },
        createdBy: {
            type: DataTypes.STRING,
            field: 'createdBy',
            allowNull: true
        },
        modifiedDate: {
            type: DataTypes.DATE,
            field: 'modifiedDate',
            allowNull: true
        },
        modifiedBy: {
            type: DataTypes.STRING,
            field: 'modifiedBy',
            allowNull: true
        },
    },{
        tableName: 'list_data_tbl',
        timestamps: false
    });


model.associate = () => {
};

// Terkecuali createdDate, createdBy, modifiedDate, modifiedBy
model.attributes = ['id', 'user', 'adress'];

return model;
};
