import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
const SchoolSchema = new mongoose.Schema(
  {
    name: {
      type: 'String',
      lowercase: true,
    },
    il: 'String',
    ilce: 'String',
    kont: 'Number',
    tercihEdenler: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'user',
      },
    ],
    yorumlar: [
      {
        kullanici: 'String',
        yorum: 'String',
      },
      { timestamps: true },
    ],
  },
  {
    timestamps: true,
  }
);
SchoolSchema.plugin(mongoosePaginate);
export default mongoose.models.School || mongoose.model('School', SchoolSchema);
