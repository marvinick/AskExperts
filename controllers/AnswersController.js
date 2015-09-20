askExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
    $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
    $scope.addAnswer = function() {
      $scope.question.answers.push({ content: $scope.answerContent });
      $scope.answerContent = null;
    }
});