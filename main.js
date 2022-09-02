
function startClassification(){
    classifier =  ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/q5hMx8OLW/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults)
}

function gotResults(error,results){
    console.log("banana")
}