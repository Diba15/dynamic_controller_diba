class DynamicController {
  _model;

  constructor(model) {
    this._model = model;
  }

  //   Index method to fetch all data
  index = async (req, res) => {
    try {
      const data = await this._model.find();

      return res.json({
        status: true,
        message: "Data fetched successfully",
        total: data.length,
        data,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: "Data failed to fetch",
        error: error.message,
      });
    }
  };

  //   Store method to store data
  store = async (req, res) => {
    try {
      const data = await this._model.create(req.body);

      if (!data) {
        return res.status(400).json({
          status: false,
          message: "Data failed to store",
        });
      }

      return res.json({
        status: true,
        message: "Data stored successfully",
        total: data.length,
        data,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: "Data failed to store",
        error: error.message,
      });
    }
  };

  //   Update method to update data
  update = async (req, res) => {
    try {
      const data = await this._model.findByIdAndUpdate(req.params.id, req.body, { new: true });

      if (!data) {
        return res.status(400).json({
          status: false,
          message: "Data failed to update",
        });
      }

      return res.json({
        status: true,
        message: "Data updated successfully",
        total: data.length,
        data,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: "Data failed to update",
        error: error.message,
      });
    }
  };

  //   Show method to fetch single data
  show = async (req, res) => {
    try {
      const data = await this._model.findOne({ _id: req.params.id });

      if (!data) {
        return res.status(400).json({
          status: false,
          message: "Data not found",
        });
      }

      return res.json({
        status: true,
        message: "Data fetched successfully",
        total: data.length,
        data,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: "Data failed to fetch",
        error: error.message,
      });
    }
  };

  //   Delete method to delete data
  delete = async (req, res) => {
    try {
      const data = await this._model.findOneAndDelete({ _id: req.params.id });

      if (!data) {
        return res.status(400).json({
          status: false,
          message: "Data failed to delete",
        });
      }

      return res.json({
        status: true,
        message: "Data deleted successfully",
        total: data.length,
        data,
      });
    } catch (error) {
      return res.status(400).json({
        status: false,
        message: "Data failed to delete",
        error: error.message,
      });
    }
  }; 
}

export default DynamicController;