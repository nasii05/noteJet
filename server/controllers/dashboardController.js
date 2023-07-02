const Note = require('../models/Notes');
const mongoose = require('mongoose');



/** 
 * GET dashboard
 */

exports.dashboard = async(req, res)=>{
    
    const locals = {
        title: "Dashboard",
        description: "Fress NodeJS Notes App"
    }

    try {
        const notes = await Note.find({});
        console.log(notes);

        res.render('dashboard/index', {
            userName: req.user.firstName,
            locals,
            notes,
            layout: '../views/layouts/dashboard'
        })
    } catch (error) {
        
    }


}

