const data = require("./seedData");

// GET - /api/cats - get all cats
async function getAllCats() {
  try {
    // write some code :)
    const rows = data.cats;
    console.log(rows);
    return rows;
  } catch (error) {
    throw error;
  }
}

// GET - /api/cats/:catId - get cat by id
async function getCatById(catId) {
  try {
    // write some code :)
    const rows = data.cats;
    const cat = rows.find((cat) => cat.id === Number(catId)); //(cat = keeps getting surrounded  like (cat) when I save, I know its (cat....
    return cat;
  } catch (error) {
    throw error;
  }
}

// POST - /api/cats - create a new cat
async function createCat(body) {
  try {
    // write some code :)
    const cat = body;
    const cats = data.cats;
    cats.push(body);
    return cat;
  } catch (error) {
    throw error;
  }
}

// PUT - /api/cats/:catId - update a cat
async function updateCat(catId, body) {
  try {
    const cats = data.cats;
    const cat = cats.find((cat) => cat.id === Number(catId));
    const index = cats.findIndex((cat) => cat.id === Number(catId)); //(cat = keeps getting surrounded  like (cat) when I save, I know its (cat....
    let newCat = { ...cat, ...body };
    cat[index] = newCat;
    return newCat;
  } catch (error) {
    throw error;
  }
}

// DELETE - /api/cats/:catId - delete a cat
async function deleteCat(catId) {
  try {
    const cats = data.cats;
    const cat = cats.find((cat) => cat.id === Number(catId));
    const index = cats.findIndex((cat) => cat.id === Number(catId)); //(cat = keeps getting surrounded  like (cat) when I save, I know its (cat....
    cats.splice(index, 1);
    return cat;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  getAllCats,
  getCatById,
  createCat,
  updateCat,
  deleteCat,
};
