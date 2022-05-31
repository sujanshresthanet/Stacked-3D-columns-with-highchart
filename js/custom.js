Highcharts.chart('container', {
    chart: {
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
        }
    },
    title: {
        text: 'Total fruit consumption, grouped by persons'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },
    yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
            text: 'Number of fruits',
            skew3d: true
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            depth: 40
        }
    },
    series: [{
        name: 'Adam',
        data: [5, 8, 4, 7, 2],
        stack: 'male'
    }, {
        name: 'Joe',
        data: [4, 3, 4, 2, 5],
        stack: 'male'
    }, {
        name: 'Jennifer',
        data: [2, 5, 6, 2, 1],
        stack: 'female'
    }, {
        name: 'Kelly',
        data: [1, 0, 4, 4, 8],
        stack: 'female'
    }]
});