askExperts.controller("ApprovedAnswersCtrl", function ApprovedAnswersCtrl($scope, AnswersFactory) {
  $scope.answers = AnswersFactory.answers;
  $scope.addAnswerWithApprovalNote = function(answer) {
    answer.approvalNote = true;
  };
});
