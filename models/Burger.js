module.exports = function(sequelize, DataTypes){

	var Burgers = sequelize.define("Burgers", {
		burger_name: {
			type: DataTypes.STRING,
			allownull: false,
		},
		devoured: {
			type: DataTypes.BOOLEAN,
			allownull: false,
			defaultValue: false
		}
	}, {tableName: "burgers"});
	return Burgers;
}

 