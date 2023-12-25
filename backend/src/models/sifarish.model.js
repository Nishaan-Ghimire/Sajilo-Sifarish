import mongoose from 'mongoose';

const FormTypeSchema = new mongoose.Schema({
  name: String,
  label: String,
  typecase: String,
  files: [{
    name: String,
    label: String,
  }],
  required: Boolean,
});

const SifarishtypeSchema = new mongoose.Schema({
  type: String,
  description_image: String,
  form: [FormTypeSchema],
  letterHead: String,
  typecase: String,
});

const SifarishtypesModel = mongoose.model('SIFARISH_TYPES', SifarishtypeSchema);

export default SifarishtypesModel;



// Description of how should we upload the data
// const FormType = {
//     name: "",
//     label: "",
//     typecase: undefined,
//     files: [],
//     required: false,
// };


// // Interface for SIFARISH_TYPE
// const SIFARISH_TYPE = {
//     type: "",
//     description_image: "",
//     form: [FormType],
//     letterHead: undefined,
//     typecase: undefined,
// };


// const SIFARISH_TYPES = [
//     {
//         type: "विवाह प्रमाणित गर्ने सिफारिस",
//         description_image: "/images/bibahitsifarish.png",
//         form: [
//             { name: "municipality", label: "गाउँ/नगरपालिका" },
//             { name: "wardId", label: "वडा नं." },
//             { name: "address", label: "ठेगाना" },
//             { name: "applicantName", label: "निवेदकको नाम",},
//             { name: "applicantMobileNumber",label: "निवेदकको मोबाइल नं.",},
//             { name: "reason", label: "प्रयोजन",},
//             { 
//                 name: "file", 
//                 label: "File",
//                 files: [
//                     {
//                       name: Filename.Applicant_Citizenship_Certificate,
//                       label: "नागरिकता प्रमाणपत्रको प्रतिलिपि",
//                     },
//                     {
//                       name: Filename.Applicants_Relatives_Citizenship_OR_Birth_Certificate,
//                       label:
//                         "निवेदकको हकदारहरुको नागरिकता प्रमाणपत्र वा जन्मदर्ताको प्रतिलिपि",
//                     },
//                     {
//                       name: Filename.Applicants_Relatives_Relation_Verification_Certifcate,
//                       label: "नाता खुल्ने कागजातको प्रतिलिपि",
//                     },
//                     {
//                       name: Filename.Death_Certificate,
//                       label: "मृत्यु दर्ता प्रमाणपत्रको प्रतिलिपि (आवश्यक भएमा मात्र)",
//                       required: false,
//                     },
//                     {
//                       name: Filename.Minor_Applicant_Birth_Certificate,
//                       label:
//                         "हकवाला नावालक भए जन्म दर्ता प्रमाणपत्रको प्रतिलिपि (आवश्यक भएमा मात्र)",
//                       required: false,
//                     },
//                     {
//                       name: Filename.Migration_Certificate,
//                       label:
//                         "वसाँईसरी आएको हकमा बसाईसराईको प्रतिलिपि (आवश्यक भएमा मात्र)",
//                       required: false,
//                     },
//                     {
//                       name: Filename.Additional_Verification_Files_Details,
//                       label:
//                         "थप प्रमाण जुटाउन आवश्यक परेमा वडाले स्थानीय सर्जमिन मुचुल्का गर्ने",
//                       required: false,
//                     },
//                     {
//                       name: Filename.Applicant_Passport_Size_Photo,
//                       label: "निवेदकको हालसालै खिचेको पासपोर्ट साइजको फोटो",
//                     },
//                     {
//                       name: Filename.Brother_Passport_Size_Photo,
//                       label: "निवेदकको दाइको हालसालै खिचेको पासपोर्ट साइजको फोटो",
//                     },
//                     {
//                       name: Filename.Father_Passport_Size_Photo,
//                       label: "निवेदकको बुबाको हालसालै खिचेको पासपोर्ट साइजको फोटो",
//                     },
//                     {
//                       name: Filename.Mother_Passport_Size_Photo,
//                       label: "निवेदकको माताको हालसालै खिचेको पासपोर्ट साइजको फोटो",
//                     },
//                     {
//                       name: Filename.Others_Passport_Size_Photo,
//                       label: "निवेदकको अरूको हालसालै खिचेको पासपोर्ट साइजको फोटो",
//                       required: false,
//                     },
//                     {
//                       name: Filename.Payment_Receipt,
//                       label: "तोकेको शुल्क बुझाएको रसीद",
//                     },
//                   ],
//             }
//         ],


//     },
  
// ];