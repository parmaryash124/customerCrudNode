const Customer = require('../models/Customer');

exports.addCustomer = async (req, res) => {
  try {
    const customer = new Customer(req.body);
    await customer.save();
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ status: false, message: "Something went wrong", error: error.message });
  }
};


exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json({ status: true, message: "Customer's list fetched successfully", data: customers });
  } catch (error) {
    res.status(400).json({ status: false, message: "Something went wrong", error: error.message });
  }
};


exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer) {
      return res.status(404).json({ status: false, message: 'Customer not found' });
    }
    res.json({ status: true, message: 'Customer fetched successfully', data: customer });
  } catch (error) {
    res.status(400).json({ status: false, message: "Something went wrong", error: error.message });
  }
};


exports.updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!customer) {
      return res.status(404).json({ status: false, message: 'Customer not found' });
    }
    res.json({ status: true, message: "Customer updated successfully", data: customer });
  } catch (error) {
    res.status(400).json({ status: false, message: "Something went wrong", error: error.message });
  }
};


exports.removeCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer) {
      return res.status(404).json({ status: false, message: 'Customer not found' });
    }
    res.json({ status: true, message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(400).json({ status: false, message: "Something went wrong", error: error.message });
  }
};
