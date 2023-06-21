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

/**
 * GET Homepage
 */

exports.about = async (req,res)=>{
    const locals = {
        title: 'About - Nodejs Notes',
        description: 'Free nodeJS Notes app'
    }

    res.render('about', locals);

}