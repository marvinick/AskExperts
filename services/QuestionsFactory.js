askExperts.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];
  factory.addQuestion = function() {
    factory.questions.push({ title: factory.questionTitle, id: factory.questions.length + 1, answers: [] });
      factory.questionTitle = null;
  };
  return factory;
})