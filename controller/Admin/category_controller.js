let category_model = require('../../model/Admin/category_model')
let helper = require('../../Helper/helper')
const ExcelJS = require("exceljs");







module.exports = { 

exportParkingExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Parking" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Parking List");

    // 🔹 Excel columns
    worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];
   

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Parking .xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
},

exportWheelchairExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Wheel chair and trolly" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("WheelChair List");

    // 🔹 Excel columns
    worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Wheelchair.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    },

    exportBloodcollectionExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Blood Collection Center" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Blood Collection List");

    // 🔹 Excel columns
    worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Blood Collection Center.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
},

    
    
      exportXrayIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "X-R/CT Scan/MRI" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Xray List");

    // 🔹 Excel columns
    worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=X-Ray/CTscan/MRI.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
},

      
      
    exporhelpdeskIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Help Desk" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("helpdesk List");

    // 🔹 Excel columns
    worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Help Desk.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    },
          
          
     exporregistrationdeskIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Registration Desk" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("registrationdesk List");

    // 🔹 Excel columns
    worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Registration Desk.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    },
          
          
       expornursingIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Nursing Care" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("nursing List");

    // 🔹 Excel columns
     worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Nursing Care.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    },

       
       
         exporBPcounterIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "BP Counter" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("BPcounter List");

    // 🔹 Excel columns
    worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=BP Counter.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
  },
         
         
         
            exporOPDwaitingIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "OPD Waiting" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("OPDwaiting List");

    // 🔹 Excel columns
    worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];
    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=OPD Waiting.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    },

            
            expordoctorconsultIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Doctor Consult" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("doctorconsult List");

    // 🔹 Excel columns
 worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Doctor Consult.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
  },   
    
            
      exporpharmacyIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Pharmacy Information About How To Take Your Medicines" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("pharmacy List");

    // 🔹 Excel columns
     worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Pharmacy.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    },     

      
         exporphysiotherapyIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Physiotherapy" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("physiotherapy List");

    // 🔹 Excel columns
 worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Physiotherapy.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    },     

         
         
    exporFoodfacilitiesIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Food And Beverage Facilities" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Foodfacilities List");

    // 🔹 Excel columns
    worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Foodfacilities.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    }, 

            
      exporcleanlinessIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Cleanliness" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("cleanliness List");

    // 🔹 Excel columns
     worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Cleanliness.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    }, 

      
      
            exporsecurtyIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Security" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("security List");

    // 🔹 Excel columns
    worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Security.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    }, 

            
    exporsafeenvironmentIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Safe & secure environment for treatment" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("safeenvironment List");

    // 🔹 Excel columns
     worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];
    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Safe & secure environment for treatment.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    }, 


     exporpatientrightsIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Patient rights respected by staff" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("patientrights List");

    // 🔹 Excel columns
 worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Patient rights.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    },
      
     
      exporstaffcommunicationIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ facilities: "Hospital staff communication" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("staffcommunication List");

    // 🔹 Excel columns
     worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
      { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Staff communication.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
    },

      
      
      
       exporUnsatisfiedIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ services: "Dissatisfied" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Unsatisfied List");

    // 🔹 Excel columns
worksheet.columns = [
      { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
  { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      { header: "Please select the facilites which need better management", key: "facilities", width: 15 },
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Dissatisfied.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
  },
       
       
       
   exportPatentsExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find().sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Patents List");

    // 🔹 Excel columns
    worksheet.columns = [
       { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
  { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      { header: "Please select the facilites which need better management", key: "facilities", width: 15 },
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename= Patent Feedback.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
  },
   
   
        exportGernalDissatisfiedIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ service: "General",services: "Dissatisfied", }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Gernal List");

    // 🔹 Excel columns
    worksheet.columns = [
         { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
  { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      { header: "Please select the facilites which need better management", key: "facilities", width: 15 },
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];
    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=General OPD Dissatisfied.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
  },           
        
        
        
                exportPrivateDissatisfiedIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ service: "Private",services: "Dissatisfied", }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Private List");

    // 🔹 Excel columns
    worksheet.columns = [
         { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
  { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      { header: "Please select the facilites which need better management", key: "facilities", width: 15 },
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];
    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename= Private OPD Dissatisfied.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
  },  
                
                                exportEveningDissatisfiedIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ service: "Evening",services: "Dissatisfied", }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Evening List");

    // 🔹 Excel columns
    worksheet.columns = [
         { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
  { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      { header: "Please select the facilites which need better management", key: "facilities", width: 15 },
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];
    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename= Evening OPD Dissatisfied.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
  },  
                
     exportGernalIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ service: "General" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Gernal List");

    // 🔹 Excel columns
    worksheet.columns = [
         { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
  { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      { header: "Please select the facilites which need better management", key: "facilities", width: 15 },
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];
    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=General.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
  },
            
       exportPrivateIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ service: "Private" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("private List");

    // 🔹 Excel columns
   worksheet.columns = [
         { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
  { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      { header: "Please select the facilites which need better management", key: "facilities", width: 15 },
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];

    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Private.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
  },
         GernallIST_satisfied: async(req, res)=> {
        try {
            title = "GernallIST_satisfied"
            let catedata = await category_model.find({service:"General",services:"Dissatisfied"}).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/General_dissatisfied.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
  },
            PrivatelIST_satisfied: async(req, res)=> {
        try {
            title = "Private_dissatisfied"
            let catedata = await category_model.find({service:"Private",services:"Dissatisfied"}).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Private_dissatisfied.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
  },
                 EveningIST_satisfied: async(req, res)=> {
        try {
            title = "Evening_dissatisfied"
            let catedata = await category_model.find({service:"Evening",services:"Dissatisfied"}).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Evening_dissatisfied.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
       
         exporteveningIExcel : async (req, res) => {
  try {
    const parkingData = await category_model.find({ service: "Evening" }).sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("evening List");

    // 🔹 Excel columns
    worksheet.columns = [
         { header: "Patient Name ", key: "name", width: 20 },
      { header: "MRD Number", key: "mrdnumber", width: 20 },
      
      { header: "Mobile Number", key: "number", width: 20 },
      { header: "Doctor Name ", key: "doctorname", width: 20 },
  { header: "OPD types", key: "service", width: 20 },
      { header: "Were you satisfied with the hospital services?", key: "services", width: 20 },
      { header: "Please select the facilites which need better management", key: "facilities", width: 15 },
      { header: "Please mention your suggestion for improvement as per your experience", key: "Suggestion", width: 30 },
      { header: "Date of OPD visit", key: "createdAt", width: 25 },
    ];


    // 🔹 Add rows
    parkingData.forEach(item => {
      worksheet.addRow({
        name: item.name,
        mrdnumber: item.mrdnumber,
       
        number: item.number,
        doctorname: item.doctorname,
        service: item.service,
        services: item.services,
        facilities: item.facilities,
        Suggestion: item.Suggestion,
        createdAt: item.createdAt,
      });
    });

   
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=Evening.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();

  } catch (error) {
    console.log(error);
    res.status(500).send("Error exporting Excel");
  }
  },
            
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
          console.log(user,"useruseruser")
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
            let catedata = await category_model.find({ service: "General" }).sort({ createdAt: -1 })
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
            let catedata = await category_model.find({ services: "Dissatisfied" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Unsatisfied_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
            
    Parking_list: async (req, res) => {
        try {
            title = "Parking_list"
            let catedata = await category_model.find({ facilities: "Parking" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Parking_list.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },

  
     
      Wheel_Chair: async (req, res) => {
        try {
            title = "Wheel_Chair"
            let catedata = await category_model.find({ facilities: "Wheel chair and trolly" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Wheel_chair.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
      
      Blood_Collection: async (req, res) => {
        try {
            title = "Blood_Collection"
            let catedata = await category_model.find({ facilities: "Blood Collection Center" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Blood_collection.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
          
      
     Registration_Desk: async (req, res) => {
        try {
            title = " Registration_Desk"
            let catedata = await category_model.find({ facilities: "Registration Desk" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Registration_desk.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
     
      Help_Desk: async (req, res) => {
        try {
            title = "Help_Desk"
            let catedata = await category_model.find({ facilities: "Help Desk" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Help_desk.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
      
        Nursing_Care: async (req, res) => {
        try {
            title = "Nursing_Care"
            let catedata = await category_model.find({ facilities: "Nursing Care" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Nursing_care.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
          
             BP_Counter: async (req, res) => {
        try {
            title = "BP_Counter"
            let catedata = await category_model.find({ facilities: "BP Counter" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/BP_counter.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
             
          Doctor_Consult: async (req, res) => {
        try {
            title = "Doctor_Consult"
            let catedata = await category_model.find({ facilities: "Doctor Consult" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Doctor_Consult.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },
        
       XRay_CTScan: async (req, res) => {
        try {
            title = "XRay_CTScan"
            let catedata = await category_model.find({ facilities: "X-R/CT Scan/MRI" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Xray_CTscan.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
       
      OPD_Waiting: async (req, res) => {
        try {
            title = "OPD_Waiting"
            let catedata = await category_model.find({ facilities: "OPD Waiting" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/OPD_Waiting.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
            
      
           Pharmacy_Info: async (req, res) => {
        try {
            title = "Pharmacy_Info"
            let catedata = await category_model.find({ facilities: "Pharmacy Information About How To Take Your Medicines" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Pharmacy_info.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
           
     Physiotherapy: async (req, res) => {
        try {
            title = "Physiotherapy"
            let catedata = await category_model.find({ facilities: "Physiotherapy" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Physiotherapy.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
     
         Food_Facilities: async (req, res) => {
        try {
            title = "Food_Facilities"
            let catedata = await category_model.find({ facilities: "Food And Beverage Facilities" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Food_facilities.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
         
        Cleanliness: async (req, res) => {
        try {
            title = "Cleanliness"
            let catedata = await category_model.find({ facilities: "Cleanliness" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Cleanliness.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
        
     Security: async (req, res) => {
        try {
            title = "Security"
            let catedata = await category_model.find({ facilities: "Security" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Security.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
     
         Safe_Environment: async (req, res) => {
        try {
            title = "Safe_Environment"
            let catedata = await category_model.find({ facilities: "Safe & secure environment for treatment" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Safe_environment.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
         
           
       Patient_Rights: async (req, res) => {
        try {
            title = "Patient_Rights"
            let catedata = await category_model.find({ facilities: "Patient rights respected by staff" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Patient_rights', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
       
            Staff_Commun: async (req, res) => {
        try {
            title = "Staff_Commun"
            let catedata = await category_model.find({ facilities: "Hospital staff communication" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Staff_commun.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
        } catch (error) {
            console.log(error)
        }
    },  
            
     Any_Other: async (req, res) => {
        try {
            title = "Any_Other"
            let catedata = await category_model.find({ facilities: "Any Other" }).sort({ createdAt: -1 })
            console.log(catedata,"catedatacatedata")
            res.render('Admin/category/Any_other.ejs', {title, catedata, session: req.session.user, msg: req.flash('msg') })
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