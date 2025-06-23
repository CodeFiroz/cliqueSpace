const fieldValidation = (res, ...fields) => {
    let data = [...fields];

     for (const field of data) {
        if (!field?.trim()) {
            console.log("Missing required fields 😵");
            return res.status(400).json({
                success: false,
                message: "Required fields are missing 😵",
            });
        }
    }
    return;

}

export default fieldValidation;
