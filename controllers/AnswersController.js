askExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
    $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId)
});
