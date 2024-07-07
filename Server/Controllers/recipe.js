const Recipe = require("../Model/Recipes");

const getAllRecipes = async (req, res) => {
  try {
    const allRecipes = await Recipe.find();
    res.status(200).send(allRecipes);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

const addRecipe = (req, res) => {
  try {
    const postRecipe = new Recipe(req.body);
    postRecipe
      .save()
      .then(() => {
        res.status(200).send(postRecipe);
      })
      .catch((e) => {
        res.status(404).send(e);
      });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

module.exports = {
  getAllRecipes,
  addRecipe,
};
