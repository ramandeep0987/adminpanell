let category_model = require('../../model/Admin/category_model')
let helper = require('../../Helper/helper')


module.exports = { 

    add_category: async(req, res)=> {
        try {
            let title = "category_list"
            res.render('Admin/category/add_category', { msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },


    Create_category: async (req, res) => {
        try {
    
   
     let user = await category_model.create({
  name: req.body.name,
  mrdnumber: req.body.mrdnumber,
  date: req.body.date,
  number: req.body.number,
  doctorname: req.body.doctorname,
         services: req.body.services,//satfified unsatsfied
  service: req.body.service,//opd type
  
  facilities: req.body.facilities,
         Suggestion: req.body.Suggestion,
         abhaid:req.body.abhaid,
  
  
})
        req.flash("msg", "Category created successfully")
      
        res.json(user)
    
      } catch (error) {
          console.log(error)
      }
    },

    category_list: async(req, res)=> {
        try {
            title = "category_list"
            let catedata = await category_model.find().sort({createdAt:-1})
            res.render('Admin/category/category_list', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
   General_list: async(req, res)=> {
        try {
            title = "General_list"
            let catedata = await category_model.find({ service: "Gernal" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/General_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
      Private_list: async(req, res)=> {
        try {
            title = "Private_list"
            let catedata = await category_model.find({ service: "Private" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Private_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
          Evening_list: async(req, res)=> {
        try {
            title = "Evening_list"
            let catedata = await category_model.find({ service: "Evening" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
          
          
          
              Unsatisfied_list: async(req, res)=> {
        try {
            title = "Unsatisfied_list"
            let catedata = await category_model.find({ services: "Unsatisfied" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Unsatisfied_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
            
    Parking_list: async (req, res) => {
        try {
            title = "Parking_list"
            let catedata = await category_model.find({ facilities: "parking" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Parking_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },

  
     
      Wheel_Chair: async (req, res) => {
        try {
            title = "Wheel_Chair"
            let catedata = await category_model.find({ services: "Wheel chair and trolly" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
      
      Blood_Collection: async (req, res) => {
        try {
            title = "Blood_Collection"
            let catedata = await category_model.find({ services: "Blood Collection Center" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
          
      
     Registration_Desk: async (req, res) => {
        try {
            title = " Registration_Desk"
            let catedata = await category_model.find({ services: "Registration Desk" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
     
      Help_Desk: async (req, res) => {
        try {
            title = "Help_Desk"
            let catedata = await category_model.find({ services: "Help Desk" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
      
        Nursing_Care: async (req, res) => {
        try {
            title = "Nursing_Care"
            let catedata = await category_model.find({ services: "Nursing Care" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
          
             BP_Counter: async (req, res) => {
        try {
            title = "BP_Counter"
            let catedata = await category_model.find({ services: "BP Counter" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
             
          Doctor_Consult: async (req, res) => {
        try {
            title = "Doctor_Consult"
            let catedata = await category_model.find({ services: "Doctor Consult" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
        
       XRay_CTScan: async (req, res) => {
        try {
            title = "XRay_CTScan"
            let catedata = await category_model.find({ services: "X-R/CT Scan/MRI" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
       
      OPD_Waiting: async (req, res) => {
        try {
            title = "OPD_Waiting"
            let catedata = await category_model.find({ services: "OPD Waiting" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
            
      
           Pharmacy_Info: async (req, res) => {
        try {
            title = "Pharmacy_Info"
            let catedata = await category_model.find({ services: "Pharmacy Information About How To Take Your Medicines" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
           
     Physiotherapy: async (req, res) => {
        try {
            title = "Physiotherapy"
            let catedata = await category_model.find({ services: "Physiotherapy" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
     
         Food_Facilities: async (req, res) => {
        try {
            title = "Food_Facilities"
            let catedata = await category_model.find({ services: "Food And Beverage Facilities" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
         
        Cleanliness: async (req, res) => {
        try {
            title = "Cleanliness"
            let catedata = await category_model.find({ services: "Cleanliness" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
        
     Security: async (req, res) => {
        try {
            title = "Security"
            let catedata = await category_model.find({ services: "Security" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
     
         Safe_Environment: async (req, res) => {
        try {
            title = "Safe_Environment"
            let catedata = await category_model.find({ services: "Safe & secure environment for treatment" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
           
       Patient_Rights: async (req, res) => {
        try {
            title = "Patient_Rights"
            let catedata = await category_model.find({ services: "Patient rights respected by staff" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
       
            Staff_Commun: async (req, res) => {
        try {
            title = "Staff_Commun"
            let catedata = await category_model.find({ services: "Hospital staff communication" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
            
            Any_Other: async (req, res) => {
        try {
            title = "Any_Other"
            let catedata = await category_model.find({ services: "Any Other" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    }, 
       
    view_category: async(req, res)=> {
        try {
            let title = ""
            let cateData = await category_model.findById({_id: req.params.id})
            res.render('Admin/category/view_category', { title, cateData, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },

    edit_category: async(req, res)=> {
        try {
            let title = ""
            let editData = await category_model.findById({_id: req.params.id})
            res.render('Admin/category/edit_category', { title, editData,  session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },

    update_category: async(req, res)=> {
        try {
            if (req.files && req.files.image) {
                var image = req.files.image;
          
                if (image) {
                  req.body.image = helper.imageUpload(image, "images");
                }
              }
            
            let user = await category_model.updateOne({_id: req.body.id},
                {
                    image: req.body.image,
                    name: req.body.name,

                } );
                req.flash("msg", "Updated successfully")
                res.redirect('/category_list')
                
            } catch (error) {
                console.log(error)
            }
    },

    delete_category: async(req, res)=> {
        try {
          let userid = req.body.id;
          let remove = await category_model.deleteOne({_id: userid})
          res.redirect('/category_list')
          
        } catch (error) {
          console.log(error)
        }
    },


    category_status: async (req, res) => {
        try {
          
        var check = await category_model.updateOne(
          { _id: req.body.id },
          { status: req.body.value }
        );
        
        req.flash("msg", "Status update successfully");
          
        if (req.body.value == 0) res.send(false);
        if (req.body.value == 1) res.send(true);
      
      
    
        } catch (error) {
          console.log(error)
        }
    },


    

   

    





}