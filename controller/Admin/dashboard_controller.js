let user_model = require('../../model/Admin/user_model')
let category_model = require('../../model/Admin/category_model')
let review_model = require('../../model/Admin/review_model')
let job_model = require('../../model/Admin/job_model')
let booking_model = require('../../model/Admin/booking_model')
let FaQ_model = require('../../model/Admin/FaQ_model')
let report_model = require('../../model/socket/reportrequest')
const contactus = require('../../model/Admin/contactus')
let wallet = require ('../../model/Admin/wallet_model')
const today = new Date();                 // today date & time
const last3Months = new Date();
last3Months.setMonth(today.getMonth() - 3);


module.exports = {

    dashboard: async(req, res)=> {
        try {
            let title = "dashboard"
            let futfaal = await category_model.count()
            let Gernal = await category_model.count({service:"General"})
            let Private = await category_model.count({service:"Private"})
            let Evening = await category_model.count({service:"Evening"})
        let Satisfied = await category_model.count({services:"Satisfied"})
            let Unsatisfied = await category_model.count({ services: "Dissatisfied" })
            
              let Gernalbar =await category_model.countDocuments({
  service: "General",
  createdAt: { $gte: last3Months, $lte: today }
              });
            console.log(Gernalbar,"GernalbarGernalbarGernalbarGernalbarGernalbar")
            let Privatebar =  await category_model.countDocuments({
  service: "Private",
  createdAt: { $gte: last3Months, $lte: today }
});        
            let Eveningbar =await category_model.countDocuments({
  service: "Evening",
  createdAt: { $gte: last3Months, $lte: today }
});
        let Satisfiedbar =await category_model.countDocuments({
  services: "Satisfied",
  createdAt: { $gte: last3Months, $lte: today }
});

            let Unsatisfiedbar =  await category_model.countDocuments({
  services: "Dissatisfied",
  createdAt: { $gte: last3Months, $lte: today }
});

            let GernalUnsatisfied = await category_model.count({service:"General",services:"Dissatisfied"})
            let PrivateUnsatisfied = await category_model.count({service:"Private",services:"Dissatisfied"})
            let EveningUnsatisfied = await category_model.count({service:"Evening",services:"Dissatisfied"})

            let user = await category_model.count({facilities:"parking"})
            let worker = await category_model.count({facilities:"Wheel chair and trolly"})
            let category = await category_model.count({facilities:"Blood Collection Center"})
            let messages = await category_model.count({facilities:"X-R/CT Scan/MRI"})
            let reviews = await category_model.count({facilities:"Help Desk"})
            let booking = await category_model.count({facilities:"Registration Desk"})
            let completejobs = await category_model.count({facilities:"Nursing Care"})
            let withdraw = await category_model.count({facilities:"BP Counter"})
            let FAQ = await category_model.count({facilities:"OPD Waiting"})
            let reports = await category_model.count({facilities:"Doctor Consult"})
            let Pharmacy = await category_model.count({facilities:"Pharmacy Information About How To Take Your Medicines"})
            let Physiotherapy = await category_model.count({facilities:"Physiotherapy"})
            let Food = await category_model.count({facilities:"Food And Beverage Facilities"})
            let Cleanliness = await category_model.count({facilities:"Cleanliness"})
            let Security = await category_model.count({facilities:"Security"})
            let Safe = await category_model.count({facilities:"Safe & secure environment for treatment"})
            let Patient = await category_model.count({facilities:"Patient rights respected by staff"})
            let Hospital = await category_model.count({facilities:"Hospital staff communication"})
            let Other = await category_model.count({facilities:"Any Other"})
     
            res.render('Admin/dashboard', {title,futfaal,Gernalbar,Privatebar,Eveningbar,Satisfiedbar,Unsatisfiedbar,PrivateUnsatisfied,EveningUnsatisfied,GernalUnsatisfied,Unsatisfied,Satisfied, Gernal,Private,Evening,Pharmacy, user,Physiotherapy,Food,Cleanliness,Security,Safe,Patient,Hospital,Other, worker, withdraw, category, messages, reviews, FAQ, booking, reports, completejobs, session: req.session.user, msg: req.flash('msg')  })
        } catch (error) {
            console.log(error)
        }
    },

    forgot_password: async(req, res)=> {
        try {
            let title = "forgot_password"
            res.render('Admin/forgot_password', {title, session: req.session.user, msg: req.flash('msg')})
        } catch (error) {
            
        }
    }


}