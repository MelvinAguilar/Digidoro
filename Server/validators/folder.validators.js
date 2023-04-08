const { body, param } = require("express-validator");

const createFolderValidator = [
  body("user_id")
    .notEmpty()
    .withMessage("User ID can't be empty")
    .bail()
    .isMongoId()
    .withMessage("User ID must be a valid Mongo ID"),
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .bail()
    .isString()
    .withMessage("Name must be a string"),
    //TODO: check if theme must be required or not, because of the schema default 
  body("theme")
    .bail()
    .isHexColor()
    .withMessage("Color must be a valid hex color code"),
  body("notes_id")
    .optional()
    .isArray()
    .withMessage("Notes ID must be an array"),
  body("notes_id.*").isMongoId().withMessage("Invalid note ID"),

];

const findFolderByIdValidator = [
  param("id")
    .notEmpty()
    .withMessage("The ID required")
    .isMongoId()
    .withMessage("Invalid folder ID"),
];

module.exports = {
  createFolderValidator,
  findFolderByIdValidator,
};
