const connection=require('../config/database');
const getHomePage= async (req,res)=>{
    const [results,fields]= await connection.query(`SELECT * FROM users`)
    res.render("home",{results:results});
}
const getNODEJS=(req,res)=>{
    res.render('sample');
}
const getUserEdit=async (req,res)=>{
    const [results,fields]= await connection.query(`SELECT * FROM users WHERE id = ?`,(parseInt(req.params.id)));
    const result=results && results.length >0 ? results[0] : res.redirect('/');
    res.render('form',{result:result});
}
const putUserUpdate=async (req,res)=>{
    await connection.query(`UPDATE users SET email = ?, name = ? ,city=? WHERE id = ?`,[req.body.email,req.body.name,req.body.city,parseInt(req.body.id)]);
    res.redirect('/');
}
const getUserDelete=async (req, res) => {
    await connection.query(`delete from users WHERE id = ?`,[parseInt(req.params.id)]);
    res.render('form');    
};
module.exports = {
    getHomePage,
    getNODEJS,
    getUserEdit,
    putUserUpdate,
    getUserDelete
}