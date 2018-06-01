Ext.ns('Ext.project');
Ext.project.FundsLinerChartPanel = Ext.extend(Ext.Panel, {
    option : null,
    border: true,
    constructor : function(config) {
        if (config == null) {
            config = {};
        }
        Ext.apply(this, config);
        // 每页显示10条
        this.pageSize = 10;
        // 增删改查方法路径
        this.Url = {
            queryUrl: 'project/Schedule/queryListForPage',
            insertUrl: 'project/Schedule/insert',
            updateUrl: 'project/Schedule/update',
            deleteUrl: 'project/Schedule/delete'
        },
            this.option =  {
                color: ['#5793f3', '#d14a61', '#675bba'],

                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {
                    data:['2015 经费使用情况', '2016 经费使用情况']
                },
                grid: {
                    top: 70,
                    bottom: 50
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: '#d14a61'
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '经费使用情况  ' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },
                        data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: '#5793f3'
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '经费使用情况  ' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },
                        data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name:'2015 经费使用情况',
                        type:'line',
                        xAxisIndex: 1,
                        smooth: true,
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                    },
                    {
                        name:'2016 经费使用情况',
                        type:'line',
                        smooth: true,
                        data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                    }
                ]
            };

        this.grid = new Ext.loanStatistics.EchartsPanel({
            region: 'center',
            autoScroll:true,
            viewConfig : {
                forceFit : true
            },
            option : this.option
        });

        Ext.project.FundsLinerChartPanel.superclass.constructor.call(this, {
            title : '年度经费使用情况',
            layout: 'fit',
            items: [this.grid]
        })
    }
});