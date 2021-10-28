
async function getAllRecipes (req, res) {
    try{
        const recipes = await req.context.models.recipe.findAll({
            include: [{model: req.context.models.ingredient}] 
        })
        //throw new Error('some bad stuff happend')
        res.send(recipes)
    } catch(error) { 
        req.log.error(error)
        res.sendStatus(500)
    }
}

export default { getAllRecipes }
