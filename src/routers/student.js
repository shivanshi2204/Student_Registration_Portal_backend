const express = require('express')
const Student = require('../models/student')
const router = new express.Router()

router.post('/student', async (req, res) => {
    const user = new Student(req.body)

    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/students', async (req, res) => {
    try {
        const users = await Student.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/student/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await Student.findById(_id)

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/student/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email','age','roll','add','std','gender']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const user = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/student/:id', async (req, res) => {
    try {
        const user = await Student.findByIdAndDelete(req.params.id)
         
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})
router.get('/student/sort/:key', async (req, res) => {
    try {
        const keyy=req.params.key
        const user=await Student.find().sort({rollnumber:1})
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})



module.exports = router