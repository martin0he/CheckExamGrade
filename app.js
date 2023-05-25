//toggle theme
/*const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle('light-mode')
})*/


$(document).ready(function() {
  // Function to calculate the average grade
  function calculateAverageGrade() {
    var totalGrade = 0;
    var totalWeight = 0;

    // Iterate over each paper
    $(".paper").each(function() {
      var grade = parseFloat($(this).find(".paperGrade").val());
      var weight = parseFloat($(this).find(".paperWeight").val());

      if (!isNaN(grade) && !isNaN(weight)) {
        totalGrade += grade * weight;
        totalWeight += weight;
      }
    });

    // Calculate the average grade
    var averageGrade = totalGrade / totalWeight;

    // Display the average grade
    $("#averageGrade").val(averageGrade.toFixed(2));
  }

  // Add a new paper
  $("#addPaperButton").click(function() {
    var newPaper = $(".paper").first().clone(); // Clone the first paper

    // Clear the input values of the cloned paper
    newPaper.find("input[type='number']").val("");

    // Append the cloned paper to the papers container
    $("#papersContainer").append(newPaper);

    // Attach event listeners to the cloned paper's inputs
    newPaper.find("input").on("input", calculateAverageGrade);

    // Attach event listener to the cloned paper's remove button
    newPaper.find(".removePaperButton").click(function() {
      if ($(".paper").length > 1) {
        $(this).closest(".paper").remove(); // Remove the corresponding paper
        calculateAverageGrade(); // Recalculate average grade
      }
    });
  });

  // Attach event listeners to the initial paper's inputs
  $(".paper input").on("input", calculateAverageGrade);

  // Attach event listener to the initial paper's remove button
  $(".paper .removePaperButton").click(function() {
    if ($(".paper").length > 1) {
      $(this).closest(".paper").remove(); // Remove the corresponding paper
      calculateAverageGrade(); // Recalculate average grade
    }
  });
  
  // Initial calculation on page load
  calculateAverageGrade();
});
