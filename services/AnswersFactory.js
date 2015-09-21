askExperts.factory('AnswersFactory', function  AnswersFactory() {
  var factory = {};
  factory.answers = [];

  $scope.addAnswer = function() {
    $scope.question.answers.push({ content: $scope.answerContent, upvotes: 0, approvedAnswer: false });
    $scope.answerContent = null;
  }

  $scope.incrementUpvotes = function(answer) {
    answer.upvotes += 1;
  }
})
