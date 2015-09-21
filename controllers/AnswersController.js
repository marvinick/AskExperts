askExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
    $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
    $scope.addAnswer = function() {
      $scope.question.answers.push({ content: $scope.answerContent, upvotes: 0 });
      $scope.answerContent = null;
    }

    $scope.incrementUpvotes = function(answer) {
      answer.upvotes += 1;
    }
});
