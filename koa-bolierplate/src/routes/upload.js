import koaRouter from 'koa-router'
import formidable from 'formidable'
const router = koaRouter()

router.post('/upload', (ctx) => {
    var form = new formidable.IncomingForm();
    form.parse(ctx.req, function(err, fields, files) {
        console.log(fields)
        console.log(files)
        // res.writeHead(200, {'content-type': 'text/plain'});
        // res.write('received upload:\n\n');
        // res.end(util.inspect({fields: fields, files: files}));
      });
})

export default router
