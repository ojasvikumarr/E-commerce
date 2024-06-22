export default function handler (req, res){
    let pincodes = {
        "110003": ["Delhi", "Delhi"],
    "400001": ["Mumbai", "Maharashtra"],
    "700001": ["Kolkata", "West Bengal"],
    "560001": ["Bangalore", "Karnataka"],
    "600001": ["Chennai", "Tamil Nadu"],
    "500001": ["Hyderabad", "Telangana"],
    "302001": ["Jaipur", "Rajasthan"],
    "380001": ["Ahmedabad", "Gujarat"],
    "201301": ["Noida", "Uttar Pradesh"],
    "160017": ["Chandigarh", "Chandigarh"],
    "390001": ["Vadodara", "Gujarat"],
    "440001": ["Nagpur", "Maharashtra"],
    "682001": ["Kochi", "Kerala"],
    "641001": ["Coimbatore", "Tamil Nadu"],
    "221001": ["Varanasi", "Uttar Pradesh"],
    "751001": ["Bhubaneswar", "Odisha"],
    "144001": ["Jalandhar", "Punjab"],
    "110001": ["New Delhi", "Delhi"],
    "226001": ["Lucknow", "Uttar Pradesh"],
    "462001": ["Bhopal", "Madhya Pradesh"],
    "695001": ["Thiruvananthapuram", "Kerala"],
    "781001": ["Guwahati", "Assam"],
    "831001": ["Jamshedpur", "Jharkhand"],
    "682001": ["Kochi", "Kerala"],
    "737101": ["Gangtok", "Sikkim"],
    "500081": ["Gachibowli", "Telangana"],
    "380015": ["Vastrapur", "Gujarat"],
    "160036": ["Mohali", "Punjab"],
    "411001": ["Pune", "Maharashtra"],
    "111111": ["Heaven", "Swarg"],
    "000000": ["Sky", "Space"],
    "222222": ["Home", "Space"],
    "121003": ["Faridabad" , "Haryana"]
    }
    res.status(200).json(pincodes)
}
// export default function handler(req, res) {
//     res.status(200).json({ name: "John Doe" });
//   }
  