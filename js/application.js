'use strict';
 
(function () {
  $(document).ready(function () {
    // Initialises Tableau Data Extension
    tableau.extensions.initializeAsync().then(function () {
        console.log('initialize Started')
        refresh();
    }, function () { console.log('Error while Initializing: ' + err.toString()); });
  });
 
  function refresh() {
    console.log('Refresh Started')
    // Gets a list of the worksheets and adds them to the web page.
    $("#worksheets").text("");
    tableau.extensions.dashboardContent.dashboard.worksheets.forEach(function (worksheet) {
        console.log('Inside loop',worksheet.name)
        $("#worksheets").append("<button class='btn btn-secondary btn-block'>"+worksheet.name+"</button>");
    });
  }
})();