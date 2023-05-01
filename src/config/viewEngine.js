const configViewEngine = (app,path,express)=>{
    app.set('view engine', 'ejs')
    app.set('views', path.join(__dirname, '../views'));
    app.use(express.static(path.join(__dirname, '../public')));
}
module.exports =configViewEngine;

