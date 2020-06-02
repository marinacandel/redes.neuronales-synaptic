var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron;

function miRed(){
    var inputlayer=new synaptic.Layer(42);
    var hiddenlayer=new synaptic.Layer(5);
    var hiddenlayer2=new synaptic.Layer(5);
    var outputlayer=new synaptic.Layer(1);

    inputlayer.project(hiddenlayer);
    hiddenlayer.project(hiddenlayer2);
    hiddenlayer2.project(outputlayer);
     this.set(
        {input:inputlayer,
        hidden:[hiddenlayer,hiddenlayer2],
        output:outputlayer}
    );
}
miRed.prototype=new synaptic.Network();
miRed.prototype.constructor=miRed;
var rn=new miRed();
var entrenar=new synaptic.Trainer(rn);
entrenar.train([
        {
            input:[0,0,1,1,0,0,
                   0,1,0,0,1,0,
                   1,0,0,0,0,1,
                   1,0,0,0,0,1,
                   1,0,0,0,0,1,
                   0,1,0,0,1,0,
                   0,0,1,1,0,0
                  ],
            output:[0,0,0]
        },
        {
            input: [0,0,0,0,1,0,
                    0,0,0,1,1,0,
                    0,0,1,0,1,0,
                    0,1,0,0,1,0,
                    0,0,0,0,1,0,
                    0,0,0,0,1,0,
                    0,0,0,0,1,0
                ],
            output:[0,0,1]
        },
        {
            input: [0,0,1,1,0,0,
                    0,1,0,0,1,0,
                    0,0,0,1,0,0,
                    0,0,1,0,0,0,
                    0,1,0,0,0,0,
                    0,1,0,0,0,0,
                    0,1,1,1,1,0
                ],
            output:[0,1,0]
        },
        {
            input: [0,1,1,1,1,0,
                    0,0,0,1,0,0,
                    0,0,1,0,0,0,
                    0,1,1,1,0,0,
                    0,0,0,0,1,0,                     
                    0,0,0,0,1,0,
                    0,1,1,1,0,0
                ],
            output:[0,1,1]
        }
    ],
        {
            iterations:1000000,
            cost:synaptic.Trainer.cost.MSE,
            shuffle:true,
            log:false
        }
    );

console.log(rn.activate([0,0,0,0,1,0,
                         0,0,0,1,1,0,
                         0,0,1,0,1,0,
                         0,1,0,0,1,0,
                         0,0,0,0,1,0,
                         0,0,0,0,1,0,
                         0,0,0,0,1,0]
                        )
            );

console.log("ejecucion finalizada");
