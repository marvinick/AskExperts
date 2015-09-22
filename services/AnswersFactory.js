askExperts.factory('AnswersFactory', function AnswersFactory() {
  var factory = {};
  factory.answers = [];

  factory.addAnswer = function() {
    factory.answers.push({ content: factory.answerContent, upvotes: 0, approvalNote: false });
    factory.answerContent = null;
  };

  factory.incrementUpvotes = function(answer) {
    answer.upvotes += 1;
  };

  return factory;
});