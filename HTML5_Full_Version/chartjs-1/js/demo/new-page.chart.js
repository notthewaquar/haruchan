  // var yAxisDataArr1 = yDataArr;
  var colorBarA = 'rgba(26,179,148,0.5)';

    // start bar chart
    var barData = {
      labels: [
        "1","2", "3","4", "5","6", "7","8", "9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40"],
      datasets: [
          // {
          //     label: "",
          //     backgroundColor: "#fff",
          //     pointBorderColor: "#fff",
          //     data: []
          // }
      ]
    };
    var barOptions = {
      responsive: true
    }; 
    
  var ctx2 = document.getElementById("barChart").getContext("2d");
  chart = new Chart(ctx2, {type: 'bar', data: barData, options:barOptions});

  function updateChart() {
    var newVal = $("#valuesYColumn1 option:selected").text();
    console.log(newVal);
  }
  function updateChart1(e) {
    var chartIndex1 = $(e).attr('chartIndex');
    // select value
    var index = e.value;
    // select label
    var tableTitle = parseInt(index) + 1;
    var myLabel =  $("#data-table thead tr th:nth-child("+ tableTitle + ")").text();

    // get values form table
    var myArr = $("#data-table")
                .find('tr')
                .map(function(){
    return [ 
      // $("th", this).text(),
      $("td", this).map(
        function(){ 
          return $(this).text();
        }
      ).get()
      ];
    }).get();
    selectedYAxis = index;
    selectedYAxis = parseInt(selectedYAxis);

    yDataArr = [];
    var myTableRows = $("#data-table tbody tr").length;
    
    for (var b = 1; b < myTableRows; b++) {
      kkkkk = myArr[b][selectedYAxis];
      yDataArr.push(parseInt(kkkkk));
    };
    // get values form table
    var colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

    if (!chart.data.datasets[chartIndex1]) {
      chart.data.datasets.push({
        label: myLabel,
        backgroundColor: colorArray[index],
        pointBorderColor: "#fff",
        data: yDataArr
      });
    } else {
      chart.data.datasets[chartIndex1].label = myLabel;
      chart.data.datasets[chartIndex1].backgroundColor = colorArray[index];
      chart.data.datasets[chartIndex1].data =  yDataArr;
    }

    chart.update();
  };
  function updateChartX(xAxixData) {
    var chartIndex1 = $(xAxixData).attr('chartIndex');
    // select value
    var index = xAxixData.value;
    // select label
    var tableTitle = parseInt(index) + 1;
    var myLabel =  $("#data-table thead tr th:nth-child("+ tableTitle + ")").text();

    // get values form table
    var myArr = $("#data-table")
                .find('tr')
                .map(function(){
    return [ 
      // $("th", this).text(),
      $("td", this).map(
        function(){ 
          return $(this).text();
        }
      ).get()
      ];
    }).get();
    selectedYAxis = index;
    selectedYAxis = parseInt(selectedYAxis);

    yDataArr = [];
    var myTableRows = $("#data-table tbody tr").length;
    
    for (var b = 1; b < myTableRows; b++) {
      kkkkk = myArr[b][selectedYAxis];
      yDataArr.push(parseInt(kkkkk));
    };
    

    if (!chart.data.datasets[chartIndex1]) {
      chart.data.labels = yDataArr;
    } 

    chart.update();    
  }
  function removeChart(removeIndex) {
      var kij = $(removeIndex).attr('removeChartIndex');
      var kil = parseInt(kij);
      chart.data.datasets.splice(kil,1);
      chart.update();
  };
// end chart
function openColorModal(num) {
  $('#colorModal').removeClass('modalHide');
  $('#colorModal').attr('numChart', num);
};
function hideModal() {
  $('#colorModal').addClass('modalHide');
  $('#colorModal').removeAttr('numChart');
};
function setChartColor(target1) {
  var chartDataIndex = $('#colorModal').attr('numChart');
  var chartColorNew = target1.value;
  if (chart.data.datasets[chartDataIndex]) {
    chart.data.datasets[chartDataIndex].backgroundColor = chartColorNew;
    chart.update();
    // console.log('YES');
  }
  // console.log('NOT');
};
//  end bar chart

