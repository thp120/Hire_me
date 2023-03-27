const aboutController = (req,res)=>{
    const data = {
        title:'About'
    }
    res.render('about',data)
}
module.exports = aboutController