import express from 'express'
import { param, validationResult } from 'express-validator'

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

router.get('/:recipeTitle', param('recipeTitle').isLength({ max: 25 }).isLength({ min: 3 }), async (req, res) => {
    try {
        const result = validationResult(req)
        if (!result.isEmpty()) {
            return res.status(400).send('The request must be between 3 and 25 characters long')
        }
        const allRecipes = await req.context.models.recipe.findAll({
            where: { title: req.params.recipeTitle },
            include: [{ model: req.context.models.ingredient }]
        })
        return res.send(allRecipes)
    } catch (err) {
        res.status(400).send('something failed... ')
    }
})


export default router