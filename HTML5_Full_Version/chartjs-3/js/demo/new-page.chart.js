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
    $('.table-div').removeClass('table-div-shadow');
    var chartIndex1 = $(e).attr('chartIndex');
    // select value
    var index = e.value;
    // select label
    var tableTitle = parseInt(index) + 1;
    var myLabel =  $("#data-table thead.t-title tr th:nth-child("+ tableTitle + ")").text();
    // select option name
    $(e).parent('div').prev('button').text(myLabel);
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
    var colorArray = ['#FF6633', '#9900B3', '#4DB3FF', '#3366E6', '#00B3E6', 
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
      // chart.data.datasets[chartIndex1].backgroundColor = colorArray[index];
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
    var myLabel =  $("#data-table thead.t-title tr th:nth-child("+ tableTitle + ")").text();

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
// table shadow
tabIndDY = 0;
function tableShadow(indDynamic){
  tabIndDY = indDynamic - 1;
  console.log(tabIndDY);
  $('.table-div').addClass('table-div-shadow');
  $('.top-thead2').hide();
  $('.top-thead').show();
}

$('.top-thead').hide();

$('.top-thead button').click(function() {
  $('.top-thead2').show();
  $('.top-thead').hide(); 
});

$(".hover1").on({
    mouseenter: function () {
      tableHeadAdd(1)
    },
    mouseleave: function () {
      tableHeadRemove(1)      
    },
    click: function () {
      tableHeadUpdateChart(tabIndDY, 1);
    }
});
$(".hover2").on({
    mouseenter: function () {
      tableHeadAdd(2)     
    },
    mouseleave: function () {
      tableHeadRemove(2)      
    },
    click: function () {
      tableHeadUpdateChart(tabIndDY, 2);
    }
});
$(".hover3").on({
    mouseenter: function () {
      tableHeadAdd(3)     
    },
    mouseleave: function () {
      tableHeadRemove(3)      
    },
    click: function () {
      tableHeadUpdateChart(tabIndDY, 3);
    }
});
$(".hover4").on({
    mouseenter: function () {
      tableHeadAdd(4)     
    },
    mouseleave: function () {
      tableHeadRemove(4)      
    },
    click: function () {
      tableHeadUpdateChart(tabIndDY, 4);
    }
});
$(".hover5").on({
    mouseenter: function () {
      tableHeadAdd(5)     
    },
    mouseleave: function () {
      tableHeadRemove(5)      
    },
    click: function () {
      tableHeadUpdateChart(tabIndDY, 5);
    }
});
$(".hover6").on({
    mouseenter: function () {
      tableHeadAdd(6)     
    },
    mouseleave: function () {
      tableHeadRemove(6)      
    },
    click: function () {
      tableHeadUpdateChart(tabIndDY, 6);
    }
});
function tableHeadAdd(ind) {
  $('.table-div th:nth-child('+ind+')').addClass('outline-sel');
  $('.table-div td:nth-child('+ind+')').addClass('outline-sel');    
}
function tableHeadRemove(ind) {
  $('.table-div th:nth-child('+ind+')').removeClass('outline-sel');
  $('.table-div td:nth-child('+ind+')').removeClass('outline-sel');    
}
function tableHeadUpdateChart(chartInd, tabInO) {
$('.table-div').removeClass('table-div-shadow');
    // select value
    var index = tabInO;
    // select label
    var tableTitle = parseInt(index);
    var myLabel =  $("#data-table thead.t-title tr th:nth-child("+ tableTitle + ")").text();

    // get values form table
    var myArr2 = $("#data-table")
                .find('tr:not(\'.thead1\')')
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
    selectedYAxis = parseInt(selectedYAxis)-1;

    yDataArr2 = [];
    var myTableRows = $("#data-table tbody tr").length;
    
    for (var b = 1; b < myTableRows; b++) {
      kkkkk2 = myArr2[b][selectedYAxis];
      yDataArr2.push(parseInt(kkkkk2));
    };
    var colorArray = ['#FF6633', '#FF3380', '#66E64D', '#4D8066', '#1AFF33' ]

    if (!chart.data.datasets[chartInd]) {
      chart.data.datasets.push({
        label: myLabel,
        backgroundColor: colorArray[chartInd],
        pointBorderColor: "#fff",
        data: yDataArr2
      });
      console.log('Hello World');
    } else {
      chart.data.datasets[chartInd].label = myLabel;
      // chart.data.datasets[chartInd].backgroundColor = colorArray[chartInd];
      chart.data.datasets[chartInd].data =  yDataArr2;
    }

    chart.update();
}

indexOfYInput = 1;
$('#addYAxisData').click(function() {
  $('.y-axis-parent-div div:nth-child('+indexOfYInput+')').addClass('my-hide-11');
  indexOfYInput++;
  console.log(indexOfYInput);
})