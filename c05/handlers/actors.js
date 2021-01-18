// const actorData = require('../pkg/actors');
const actorData = require('../pkg/actors/mongoose');

const getAllActors = async (req, res) => {
    try {
        let data = await actorData.getAll();
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const getOneActor = async (req, res) => {
    try {
        let data = await actorData.getOne(req.params.id);
        if(data === null) {
            return res.status(404).send('Not Found');
        }
        res.status(200).send(data);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const createActor = async (req, res) => {
    try {
        await actorData.create(req.body);
        res.status(201).send(req.body);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateActor = async (req, res) => {
    try {
        await actorData.update(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const updateActorPartial = async (req, res) => {
    try {
        await actorData.updatePartial(req.params.id, req.body);
        res.status(204).send(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

const deleteActor = async (req, res) => {
    try {
        await actorData.remove(req.params.id);
        res.status(204).send(req.body);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllActors,
    getOneActor,
    createActor,
    updateActor,
    updateActorPartial,
    deleteActor,
};