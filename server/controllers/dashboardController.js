/** 
 * GET dashboard
 */

exports.dashboard = async(req, res)=>{
    const locals = {
        title: "Dashboard",
        description: "Fress NodeJS Notes App"
    }

    res.render('dashboard/index', {
        locals,
        layout: '../views/layouts/dashboard'
    })
}