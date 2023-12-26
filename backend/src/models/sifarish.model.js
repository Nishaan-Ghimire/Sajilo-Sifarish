import mongoose from 'mongoose';



const SifarishValueSchema = new mongoose.Schema({
    sifarish_id:{type: String, required: true},
    title: { type: String, required: true },
    type: { type: String, enum: ['form', 'file'], required: true },
    municipality: { type: String, required: true },
    wardId: {type: String, required: true},
    address: { type: String, required: true },
    applicantName: {type: String, required: true},
    applicantMobileNumber: { type: String, default: true },
    status: {type: String,enum:["Pending","Success","Failed"], default: "Pending"},
    user_id: {type: String, default: true}
    
  });

const SifarishValueModel = mongoose.model('SIFARISH_VALUES', SifarishValueSchema);




// export {SifarishtypesModel,SifarishValueModel};
export {SifarishValueModel};

