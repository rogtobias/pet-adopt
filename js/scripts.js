///////////// Business Logic /////////////
function Pet(petName, petType, petColor, petAge, petStatus) {
  this.petName = petName;
  this.petType = petType;
  this.petColor = petColor;
  this.petAge = petAge;
  this.petStatus = "Available";
};

Pet.prototype.adoptStatus = function() {
  this.petStatus = "Adopted";
};

function resetFields() {
  $("#pet-name").text("");
  $("#pet-type").text("");
  $("#pet-color").text("");
  $("#pet-age").text("");
};

///////////// User Logic /////////////
$(function() {
  $("#form-one").submit(function(event) {
    event.preventDefault();
    var petName = $("#pet-name").val();
    var petType = $("#pet-type").val();
    var petColor = $("#pet-color").val();
    var petAge = $("#pet-age").val();

    var newPet = new Pet(petName, petType, petColor, petAge);

    $("#pet-list").append("<li><span class='pets'>" + newPet.petName + "</span></li>");
    resetFields();

    $(".pets").last().click(function() {
      $("#pet-display").show();
      $("#pet-name-display").text(this.petName);
      $("#pet-type-display").text(this.petType);
      $("#pet-color-display").text(this.petColor);
      $("#pet-age-display").text(this.petAge);
      $("#pet-status-display").text(this.petStatus);

      $("#pet-status-display-button").click(function() {
        newPet.adoptStatus();
      });
    });
  });
});
