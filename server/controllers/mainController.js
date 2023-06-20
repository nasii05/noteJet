/**
 * GET Homepage
 */

exports.homepage = async (req,res)=>{
    const locals = {
        title: 'Nodejs Notes',
        description: 'Free nodeJS Notes app'
    }

    res.render('index', locals);

}