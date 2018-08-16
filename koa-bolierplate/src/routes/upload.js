import koaRouter from 'koa-router'
const router = koaRouter()

router.post('/upload', (ctx) => {
    console.log("Files: ", ctx.request.body.files);
    console.log("Fields: ", ctx.request.body.fields);
    ctx.body = "Received your data!"; //This is where the parsed request is stored
})

export default router
