
export async function getRecipesByTitle(req, res) {
    try {
        const allRecipes = await req.context.models.recipe.findAll({
            include: [{ model: req.context.models.ingredient }]
        })
        return res.send(allRecipes)
    } catch (err) {
        res.log.error(err)
        res.status(400).send('something failed... ')
    }
}

