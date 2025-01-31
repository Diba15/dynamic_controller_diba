import express from 'express';
import DynamicController from '../controller/DynamicController.js';

const dynamicCrud = (model) => {
    const router = express.Router();
    const controller = new DynamicController(model);

    router.get('/', controller.index); // Index method to fetch all data
    router.get('/:id', controller.show); // Show method to fetch single data
    router.post('/', controller.store); // Store method to store data
    router.put('/:id', controller.update); // Update method to update data
    router.delete('/:id', controller.delete); // Destroy method to delete data

    return router;
}

export default dynamicCrud;