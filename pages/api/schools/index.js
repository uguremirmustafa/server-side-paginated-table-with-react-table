import School from '@models/School';
import dbConnect from '@utils/dbConnect';

dbConnect();

export default async function (req, res) {
  switch (req.method) {
    case 'GET':
      await getSchools(req, res);
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
const getSchools = async (req, res) => {
  try {
    let { page, perPage } = req.query;
    console.log(page, perPage);
    const options = {
      page: parseInt(page),
      limit: parseInt(perPage),
    };
    const schools = await School.paginate({}, options);
    res.status(200).json({
      success: true,
      data: schools,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
