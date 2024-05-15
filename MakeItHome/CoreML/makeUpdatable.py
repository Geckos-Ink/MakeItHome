import coremltools
from coremltools.models.neural_network.quantization_utils import quantize_weights

def make_updateable(mlmodel):
    model_spec = mlmodel.get_spec()

    builder = coremltools.models.neural_network.NeuralNetworkBuilder(spec=model_spec, mode='classifier')

    # Manually add a softmax at the end
    #builder.add_softmax(name='output_prob', input_name='output', output_name='output_prob')

    # Your update layer names.....
    builder.make_updatable(update_layer_names)
    print(builder.inspect_layers())
    print(builder.layers)
    print(builder.inspect_output_features())

    builder.set_sgd_optimizer(SgdParams(lr=0.01, batch=10))
    builder.set_epochs(10)
    feature = ('output', datatypes.Array(1))
    builder.set_categorical_cross_entropy_loss(name='lossLayer', input='output_prob')


    # Save the CoreML model
    updateable_model = ct.models.MLModel(model_spec)
    updateable_model.save('classifier_updateable.mlmodel')

model = coremltools.models.MLModel('./UpdatableDrawingClassifier.mlmodel')
make_updateable(model)