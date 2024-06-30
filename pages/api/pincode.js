import pincodes from "../../data/pincodes.json"
export default function handler (req, res){
    res.status(200).json(pincodes)
}
// export default function handler(req, res) {
//     res.status(200).json({ name: "John Doe" });
//   }
  