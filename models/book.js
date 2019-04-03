'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    publishDate: DataTypes.DATE,
    page: DataTypes.INTEGER,
    isbn: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.Post, {
      foreignKey: "PostId"
    });
  };
  return Book;
};