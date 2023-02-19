import connectMongo from "database/connection";
import { postUser,getUsers } from "../../../../database/controller";
export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "error in connection" })
  );
  const { method } = req;

  switch (method) {
    case 'GET':
      getUsers(req, res);
      break;
    case 'POST':
      postUser(req, res);
      break;
    case 'PUT':
      res.status(200).json({ method, resolve: "GET PUT success" });
      break;
    case 'DELETE':
      res.status(200).json({ method, resolve: "GET DELETE success" });
      break;
    default:
      res.setHeader("Allow", ["GET", "DELETE", "PUT", "POST"]);
      res.status(405).end(`method ${method} not allowed`);
      break;
  }

}
