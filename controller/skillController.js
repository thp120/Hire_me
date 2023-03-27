const skillController = (req,res)=>{
    const data = {
        title:'Skills'
    }
    res.render('skill',data)
}
module.exports = skillController