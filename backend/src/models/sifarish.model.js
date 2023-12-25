import mongoose from 'mongoose';



const SifarishtypeSchema = new mongoose.Schema({
    sifarish_id:{type: String, required: true},
    title: { type: String, required: true },
    type: { type: String, enum: ['form', 'file'], required: true },
    name: { type: String, required: true },
    label: { type: String, required: true },
    required: { type: Boolean, default: true },
    
  });

const SifarishtypesModel = mongoose.model('SIFARISH_TYPES', SifarishtypeSchema);


const SifarishValueSchema = new mongoose.Schema({
    sifarish_id:{type: String, required: true},
    title: { type: String, required: true },
    type: { type: String, enum: ['form', 'file'], required: true },
    name: { type: String, required: true },
    value: {type: String, required: true},
    label: { type: String, required: true },
    user_id: {type: String, required: true},
    required: { type: Boolean, default: true },
    
  });

const SifarishValueModel = mongoose.model('SIFARISH_VALUES', SifarishValueSchema);




export {SifarishtypesModel,SifarishValueModel};

