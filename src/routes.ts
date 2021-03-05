import express , {Request, Response} from 'express';
const Feature = require('./model.ts')

const router = express.Router();

  // get all features
 router.get('/api/features', [], (req: Request, res: Response)=> {

    Feature.find()
    .then((features: any) => {
        res.send(features);
    }).catch((err: any) => {
        res.status(500).send({
            message: err.message
        });
    });
     //return res.send('get features')
 })


            // get feature bt Id
 router.get('/api/features/search/:feature_id', [], (req: Request, res: Response)=> {

    Feature.findById(req.params.feature_id)
    .then((feature: any) => {
        res.send(feature);
    }).catch((err: any) => {
        return res.status(500).send({
            message: "Error retrieving feature with id " + req.params.feature_id
        });
    });
 })

    // create a new feature

 router.post('/api/features/feature',[], (req: Request, res: Response)=> {

    const feature = new Feature({
        feature_name: req.body.feature_name,
        feature_type: req.body.feature_type,
        feature_description: req.body.feature_description,
        feature_created_timestamp: req.body.feature_created_timestamp,
        feature_version: req.body.feature_version,
        feature_owner: req.body.feature_owner,
        feature_data: req.body.feature_data
    });

    
    feature.save()
    .then((data: any) => {
        res.send(data);
    }).catch((err: any) => {
        res.status(500).send({
            message: err.message
        });
    });


    //return res.send('post a  feature')
})

         //update a feature
router.put('/api/features/:feature_id', [], (req: Request, res: Response)=> {

    Feature.findByIdAndUpdate(req.params.feature_id, {
        feature_name: req.body.feature_name,
        feature_type: req.body.feature_type,
        feature_description: req.body.feature_description,
        feature_created_timestamp: req.body.feature_created_timestamp,
        feature_version: req.body.feature_version,
        feature_owner: req.body.feature_owner,
        feature_data: req.body.feature_data
    }, {new: true})
    .then((feature: any) => {
        res.send(feature);
    }).catch((err: any) => {
        return res.status(500).send({
            message: "Error updating feature with id " + req.params.noteId
        });
    });
 })


                    // delete a feature

 router.delete('/api/features/:feature_id', [], (req: Request, res: Response)=> {

    Feature.findByIdAndRemove(req.params.feature_id)
    .then((feature: any) => {
        res.send({message: "Feature deleted successfully!"});
    }).catch((err: any) => {
        return res.status(500).send({
            message: "Could not delete feature with id " + req.params.feature_id
        });
    });
 })

export {router as featureStoreRouter}