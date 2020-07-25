const multer = require('multer')
const path = require('path')
const Giraffe = require('../models/giraffe')
const storage = multer.diskStorage({
    destination: './uploads/' /* relative to root dir of project */,
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

module.exports = (app) => {

    // Upload image
    app.post('/uploadImage', upload.single('file'), async (req, res) => {
        if (req.file) {
            res.send({ success: true })
        } else {
            res.sendStatus(500)
        }
    })
    app.get('/api/giraffes', async (req, res, next) => {
        try {
            const giraffes = await Giraffe.find()
            return res.json(giraffes)
        } catch(e) {
            next(e)
        }
    })


    // Giraffe API
    app.post('/api/giraffe', async (req, res, next) => {
        try {
            if (!req.body) res.sendStatus(400)
            const requestModel = req.body
            const giraffe = new Giraffe({ name: requestModel.name,
                                        weight: requestModel.weight,
                                        height: requestModel.height,
                                        sex: requestModel.sex,
                                        color: requestModel.color,
                                        diet: requestModel.diet,
                                        temper: requestModel.temper
                                        })
            await giraffe.save()
            res.send({_id: giraffe._id})
        } catch (e) {
            next(e)
        }
    })
    app.route('/api/giraffe/:id')
        .get(async (req, res, next) => {
            try {
                if (!req.params.id) res.sendStatus(400)
                const giraffe = await Giraffe.findById(req.params.id)
                if (!giraffe) res.sendStatus(404)
                return res.json(giraffe)
            } catch(e) {
                next(e)
            }
        })
        
        .put(async (req, res, next) => {
            try {
                if (!req.params.id || !req.body) res.sendStatus(400)
                const giraffe = await Giraffe.findByIdAndUpdate(req.params.id, req.body,
                    function (err, doc) {
                                if (err || !doc) {
                                    res.sendStatus(404)
                                }
                            })
                return res.json(giraffe)
            } catch(e) {
                next(e)
            }
        })

        .delete(async (req, res, next) => {
            try {
                if (!req.params.id) res.sendStatus(400)
                await Giraffe.findByIdAndDelete(req.params.id,
                    function (err, doc) {
                        if (err || !doc) {
                            res.sendStatus(404)
                        }
                    })
                res.sendStatus(200)
            } catch (e) {
                next(e)
            }
        })
}