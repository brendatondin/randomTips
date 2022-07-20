const controllerUser = (app, db) => {
    app.post('/create', (req, res) => {
        const body = req.body
        try {
            if (body.tip.lenght != 0) {
                db.tips.push(body.tip)
                res.json({
                    msg: "Dica inserida com sucesso!",
                    error: false
                })
            } else {
                throw new Error("Campo vazio")
            }
        } catch (error) {
            res.json({
                msg: error.message,
                error: true
            })
        }


    })
    app.get('/tips', (req, res)=>{
        res.json({
            "tips": db.tips[parseInt(Math.random() * db.tips.length)]
        })
    })
}

export default controllerUser