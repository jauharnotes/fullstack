import Product from "../models/ProductModel.js";

export const getProducts = async(req, res) => {
    try {
        const response = await Product.findAll();
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getProductById = async(req, res) => {
    try {
        const response = await Product.findOne({
            where: {
                id: req.params.id
            }
        });
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const saveProduct = (req, res) => {
    if(req.files === null) return res.status(400).json({msg: 'No File Uploaded'});
    const name = req.body.title;
    const file = req.files.file;
    const fileSize = req.data.length;
    const ext = path.extname(file.name);
    const fileName = file.md5 + ext;
    const url = `${req.protocol}://${req.get('host')}/images/${fileName}`;
    const allowedType = ['.png', '.jpg', 'jpeg'];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: 'Invalid Images'});
    if (fileSize > 5000000) return res.status(422).json({msg: 'Image must be less than 5 MB'});
}

export const updateProduct = async(req, res) => {

}

export const deleteProduct = async(req, res) => {

}