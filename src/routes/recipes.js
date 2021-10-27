import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const allRecipes = await req.context.models.recipe.findAll({
            include: [{ model: req.context.models.ingredient }]
        })
        return res.send(allRecipes)
    } catch (err) {
        res.status(400).send('something failed... ')
    }
})


export default router