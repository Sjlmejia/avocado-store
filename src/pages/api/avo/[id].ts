import { NextApiRequest, NextApiResponse } from "next";
import DB from '../../../../database/db';
const allAvos =async (req: NextApiRequest, res:NextApiResponse) => {
  const db = new DB();
  const id = req.query.id;

  const entry = await  db.getById(<string>id);
  res.status(200).json(entry)
};

export default allAvos;